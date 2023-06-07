export const getHTMLTextLength = (value: string) =>
value
  ?.replaceAll(/<\/?[^>]+>/g, '')
  .replace('&nbsp;', '')
  .replaceAll('\n', '')
  .replaceAll('<style(.+?)</style>', '')
  .replaceAll('/style="[a-zA-Z0-9:;.s()-,]*"/gi', '')
  .trim().length;