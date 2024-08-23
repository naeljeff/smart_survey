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
