import singleSpa from 'single-spa';

export class HistoryService {
  private conditionFn: (url: string) => boolean;

  block(conditionFn: (url: string) => boolean): () => void {
    this.conditionFn = conditionFn;

    return () => {
      this.conditionFn = null;
    };
  }

  redirectToURL(url: string) {
    if (this.conditionFn && this.conditionFn(url)) return;

    singleSpa.navigateToUrl(url);
  }
}

export const historyService = new HistoryService();