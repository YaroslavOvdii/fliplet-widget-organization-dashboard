import generateFakeData from './dataGenerator';

const getAnalytics = (dates) => {
  // 50 - is an amount of fake data to generate
  // dates - time period in witch we generates data
  return generateFakeData(50, dates);

  // TODO: Uncoment when real endpoint will be ready to use.
  // TODO: should we check dates for ISO format?

  // return Fliplet.Organizations.get().then(function(organizations) {
  //   return Fliplet.API.request({
  //     url: `v1/organizations/${organizations[0].id}/analytics`,
  //     method: 'POST',
  //     data: {
  //       startDate: startDate,
  //       endDate: endDate
  //     }
  //   }).then(function onSuccess(response) {
  //     return response;
  //   }).catch(function onError(error) {
  //     return {error: error};
  //   });
  // });
};

export default getAnalytics;
