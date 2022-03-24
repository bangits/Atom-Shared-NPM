class EnviromentService {
  private env = {};

  constructor() {
    this.env = JSON.parse(JSON.stringify(env));

    env = null;
  }

  get<T>(key: string): T {
    if (this.env[key] === undefined) throw new Error('Invalid key found in EnviromentService');

    return this.env[key];
  }
}

export const enviromentService = new EnviromentService();
