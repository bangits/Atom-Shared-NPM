export const downloadURL = (url: string, name: string) => {
  fetch(url)
    .then((response) => response.blob())
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response]));

      let link = document.createElement('a');

      link.href = url;

      link.setAttribute('download', name);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      link = null;
    });
};
