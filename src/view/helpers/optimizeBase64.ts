export const optimizeBase64 = (base64: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const image = new Image();

    image.onload = function () {
      // @ts-expect-error Ignored typescript for this typecast
      canvas.width = this.naturalWidth;
      // @ts-expect-error Ignored typescript for this typecast
      canvas.height = this.naturalHeight;

      ctx.drawImage(image, 0, 0);

      resolve(canvas.toDataURL('image/jpeg', 0.7));
    };

    image.src = base64;
  });
};
