const gigamillisecond = 1e12;

export const gigasecond = (reference_date) => new Date(reference_date.getTime() + gigamillisecond);
