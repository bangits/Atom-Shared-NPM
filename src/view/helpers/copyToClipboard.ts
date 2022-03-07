function fallbackCopyTextToClipboard(text: string) {
  const textArea = document.createElement('textarea');

  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');

    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  } finally {
    document.body.removeChild(textArea);
  }
}

export const copyToClipboard = (text: string): Promise<void> => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return Promise.resolve();
  }

  return navigator.clipboard.writeText(text);
};
