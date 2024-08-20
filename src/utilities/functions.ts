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
