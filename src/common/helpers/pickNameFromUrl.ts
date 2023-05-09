export const pickNameFromUrl = (url: string, guidCharsCount = 37) => {
  if (!url) {
    return '';
  }

  const urlArr = url.split('/');
  urlArr.splice(0, 4);
  const nameWithGuid = urlArr.join();
  const nameWithGuidArr = nameWithGuid.split('');
  nameWithGuidArr.splice(0, guidCharsCount);
  return decodeURI(nameWithGuidArr.join(''));
};
