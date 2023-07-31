export const capitalizeWord = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const generatePageName = (url: string) => {
  const name = url.split('/')[1];

  if (!name) {
    return 'Home';
  }

  return capitalizeWord(name);
};
