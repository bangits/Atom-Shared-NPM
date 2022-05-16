import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
  LogLevel
} from '@microsoft/signalr';

export interface ISocketService {
  connect: (hubName: string) => Promise<void>;
  disconnect: () => Promise<void>;
  invoke: (methodName: string, ...args: unknown[]) => Promise<void>;
  on<T>(event: string, cb: (response: T) => void): void;
  off(event: string): void;
}

export class SocketService implements ISocketService {
  private socket: HubConnection | null = null;
  private baseUrl: string;
  private methods: {
    methodName: string;
    subscriber: (...args: unknown[]) => void;
  }[] = [];

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  disconnect = async () => {
    await this.socket?.stop();
    this.methods.forEach((method) => this.socket?.off(method.methodName));
  };

  async invoke(methodName: string, ...args: unknown[]) {
    if (this.socket?.state === HubConnectionState.Connected) this.socket?.invoke(methodName, ...args);
  }

  reconnect = async () => {
    if (
      this.socket &&
      (this.socket.state === HubConnectionState.Connecting ||
        this.socket.state === HubConnectionState.Connected ||
        this.socket.state === HubConnectionState.Reconnecting)
    )
      return;

    await this.socket?.start();
    this.methods.forEach((method) => this.socket?.on(method.methodName, method.subscriber));
  };

  async connect(hubName: string) {
    if (this.socket && this.socket?.state !== HubConnectionState.Disconnected) return;

    const socket: HubConnection = new HubConnectionBuilder()
      .withUrl(`${this.baseUrl}${hubName}`, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    await socket.start();

    this.socket = socket;

    this.socket.onclose(this.disconnect);

    const originalOn = socket.on.bind(socket);

    this.socket.on = (methodName: string, subscriber: (...args: unknown[]) => void) => {
      this.methods.push({
        methodName,
        subscriber
      });
      return originalOn(methodName, subscriber);
    };

    this.methods = [];

    window.addEventListener('offline', this.disconnect);
    window.addEventListener('online', this.reconnect);
  }

  on = <T>(event: string, cb: (response: T) => void) => this.socket?.on(event, cb);
  off = (event: string) => this.socket.off(event);
}
