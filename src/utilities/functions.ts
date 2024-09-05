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

export const formatDateSurveyPenutupanJob = (date: string): string => {
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

export const formatInputDateFUA = (date?: Date): string => {
  if (!date) return '';

  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', {month: 'short'});
  const year = date.getFullYear().toString().slice(-2);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}-${month}-${year} ${hours}:${minutes}`;
};

export const formatDateToDateTime = (date?: Date): string => {
  if (!date) return '';

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
