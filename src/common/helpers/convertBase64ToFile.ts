export const convertBase64ToFile = (base64: string, fileName?: string): Promise<File> => {
  return new Promise((resolve, reject) => {
    const arr = base64.split(','),
      mime = arr[0].match(/:(.*?);/)[1];

    return fetch(base64)
      .then((res) => res.blob())
      .then((blob) => {
        resolve(new File([blob], fileName || 'file', { type: mime }));
      });
  });
};
