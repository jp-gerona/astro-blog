// Change the date format to a more readable string format
const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, options);
};

// Capitalize the first letter of a string
const capitalizeText = (text: string): string => {
  if (typeof text !== 'string' || text.length === 0) return text;

  return text.charAt(0).toUpperCase() + text.slice(1);
};

export { formatDate, capitalizeText };