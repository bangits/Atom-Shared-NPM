
const downloadURL = (url: string, name: string) => {
  let link: HTMLAnchorElement = document.createElement('a');

  link.download = name;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  link = null;
};

export default downloadURL;
