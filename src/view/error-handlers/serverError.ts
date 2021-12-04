export const serverErrorHandler = [
  (response) => response,
  function (error) {
    return Promise.reject(error);
  }
];
