export const generatePageName = (url: string) => {
  const name = url.split('/')[1];

  if (!name) {
    return 'Home';
  }

  return name.charAt(0).toUpperCase() + name.slice(1);
};
