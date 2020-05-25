import generateFakeData from './dataGenerator';

const getAnalyticsData = (startDate, endDate) => {
  // 50 - is an amount of fake data to generate
  // dates - time period in witch we generates data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateFakeData(50, {startDate, endDate}));
    }, 2000);
  });
  // TODO: Uncoment when real endpoint will be ready to use.
  // TODO: should we check dates for ISO format?

  // return Fliplet.Organizations.get().then(function(organizations) {
  //   return Fliplet.API.request({
  //     url: `v1/organizations/${organizations[0].id}/analytics`,
  //     method: 'POST',
  //     data: {
  //       startDate,
  //       endDate
  //     }
  //   });
  // });
};

export const calculateDynamic = (currentValue, previousValue) => {
  if (currentValue > previousValue) {
    return Math.round((( currentValue - previousValue ) / previousValue) * 100);
  }

  return Math.round((( previousValue - currentValue ) / previousValue) * 100);
};

export default getAnalyticsData;
