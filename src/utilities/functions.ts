const getCurrentHour = () => {
  const now = new Date();
  return now.getHours();
};

export const getTimeOfDay = () => {
  const hour = getCurrentHour();

  if (hour >= 5 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 18) {
    return 'afternoon';
  } else {
    return 'night';
  }
};

export const formatDateStatusBarSurveyPenutupan = (currentDate: Date) => {
  return `${String(currentDate.getDate()).padStart(
    2,
    '0',
  )}-${currentDate.toLocaleString('en-US', {month: 'short'})}-${String(
    currentDate.getFullYear(),
  ).slice(-2)}`;
};

export const formatDateSurveyPenutupanIncomingJob = (date: string): string => {
  const itemDate = new Date(date);
  const formattedDate = `${String(itemDate.getDate()).padStart(
    2,
    '0',
  )}-${itemDate.toLocaleString('en-US', {month: 'short'})}-${String(
    itemDate.getFullYear(),
  ).slice(-2)}`;

  return formattedDate;
};

export const calcAgingDate = (date: string): number => {
  const itemDate = new Date(date);

  const currDate = new Date();
  const dayDiff = Math.round(
    (currDate.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24),
  );
  return dayDiff;
};
