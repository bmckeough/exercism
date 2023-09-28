const responses = {
  other: 'Whatever.',
  allCapsQuestion: "Calm down, I know what I'm doing!",
  allCaps: 'Whoa, chill out!',
  question: 'Sure.',
  silence: 'Fine. Be that way!',
};

export const hey = (message) => {
  message = message.trim();
  if (!message) return responses.silence;

  const allCaps = (message.toUpperCase() === message && message.toLowerCase() !== message);
  const question = (message.endsWith("?"));

  if (allCaps && question) return responses.allCapsQuestion;
  if (allCaps) return responses.allCaps;
  if (question) return responses.question;

  return responses.other;
};
