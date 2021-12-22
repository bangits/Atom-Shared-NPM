export const convertBase64ToFile = (base64: string, fileName?: string): Promise<File> => {
  return new Promise((resolve, reject) => {
    const arr = base64.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]);

    let n = bstr.length;

    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    resolve(new File([u8arr], fileName || 'file', { type: mime }));
  });
};
