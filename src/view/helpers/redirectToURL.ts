import singleSpa from 'single-spa';

export const redirectToURL = (url: string) => singleSpa.navigateToUrl(url);
