interface ForeachCallback<T> {
  cb: (value: T, index: number, array: T[]) => void;
}

export const asyncForeach = <T>(arr: T[], cb: ForeachCallback<T>['cb']): Promise<void> => {
  return new Promise((resolve, reject) => {
    arr.forEach(async (item, index) => {
      try {
        await cb(item, index, arr);

        if (index === arr.length - 1) resolve();
      } catch (error) {
        reject(error);
      }
    });
  });
};
