export const twoFer = (name = 'you') => {
  // Conditional handles null and empty string
  if (!name) name = 'you';

  return `One for ${name}, one for me.`;
};
