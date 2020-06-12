const getAnalyticsData = (startDate, endDate) => {
  return Fliplet.Organizations.Analytics.get({ startDate, endDate });
};

export const calculateDynamic = (currentValue, previousValue = 0) => {
  if (currentValue === previousValue) {
    return 0 + '%';
  }

  if (previousValue === 0) {
    return currentValue;
  }

  if (currentValue > previousValue) {
    return Math.round((( currentValue - previousValue ) / previousValue) * 100) + '%';
  }

  return Math.round((( previousValue - currentValue ) / previousValue) * 100) + '%';
};

export default getAnalyticsData;
