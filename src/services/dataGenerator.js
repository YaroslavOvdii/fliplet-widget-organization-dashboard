import faker from 'faker';

const generateFakeData = (amount, dateData) => {
  let fakeData = {};
  let startDate = previousePeriod(dateData);
  let dateRange = {startDate: startDate, endDate: dateData.endDate};

  fakeData['appSessions'] = generateFakeAppSessions();
  fakeData['studioSessions'] = generateStudioSessions();
  fakeData['stats'] = generateStats();
  fakeData['apps'] = generateApps(amount, dateRange);
  fakeData['users'] = generateUsers(amount, dateRange);

  return fakeData;
};

const previousePeriod = (dateData) => {
  const startDate = new Date(dateData.startDate);
  const endDate = new Date(dateData.endDate);
  const diffTime = Math.abs(startDate - endDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  startDate.setDate(startDate.getDate() - diffDays);

  return startDate;
};

const generateApps = (amount, dateRange) => {
  let apps = [];
  let id = 1;

  while (apps.length < amount) {
    apps.push({
      id: id,
      name: 'Internal Comms',
      createdAt: setCorrectDate(faker.date.between(dateRange.startDate, dateRange.endDate), 'standart'),
      updatedAt: setCorrectDate(faker.date.between(dateRange.startDate, dateRange.endDate), 'standart'),
      publishedAt: setCorrectDate(faker.date.between(dateRange.startDate, dateRange.endDate), 'standart'),
      publishedAppleAt: setCorrectDate(faker.date.between(dateRange.startDate, dateRange.endDate), 'standart'),
      publishedGoogleAt: setCorrectDate(faker.date.between(dateRange.startDate, dateRange.endDate), 'standart'),
      publishedWebAt: setCorrectDate(faker.date.between(dateRange.startDate, dateRange.endDate), 'standart'),
      stats: {
        users: {
          count: faker.random.number({min: 500, max: 600}),
          previousPeriodCount: faker.random.number({min: 500, max: 700})
        },
        sessions: {
          count: faker.random.number({min: 500, max: 600}),
          previousPeriodCount: faker.random.number({min: 100, max: 500})
        },
        updates: {
          count: faker.random.number({min: 500, max: 600}),
          previousPeriodCount: faker.random.number({min: 100, max: 500})
        },
        publishes: {
          count: faker.random.number({min: 500, max: 600}),
          previousPeriodCount: faker.random.number({min: 100, max: 500})
        }
      }
    });

    id++;
  }

  return apps;
};

const generateUsers = (amount, dateRange) => {
  let users = [];

  while (users.length < amount) {
    users.push({
      email: faker.internet.email(),
      lastSeenAt: setCorrectDate(faker.date.between(dateRange.startDate, dateRange.endDate), 'standart'),
      createdAt: setCorrectDate(faker.date.between(dateRange.startDate, dateRange.endDate), 'standart'),
      stats: {
        studioSessions: {
          count: faker.random.number({min: 500, max: 600})
        },
        viewerSessions: {
          count: faker.random.number({min: 500, max: 600})
        },
        appPublishes: {
          count: faker.random.number({min: 500, max: 600})
        },
        appsAvailable: {
          count: faker.random.number({min: 500, max: 600})
        },
        appsCreated: {
          count: faker.random.number({min: 500, max: 600})
        }
      }
    });
  }

  return users;
};

const generateStats = () => {
  return {
    studioSessions: {
      count: faker.random.number({min: 500, max: 600}),
      previousPeriodCount: faker.random.number({min: 500, max: 600})
    },
    totalUsers: {
      count: faker.random.number({min: 500, max: 1000}),
      previousPeriodCount: faker.random.number({min: 100, max: 499})
    },
    newStudioUsers: {
      count: faker.random.number({min: 500, max: 1000}),
      previousPeriodCount: faker.random.number({min: 100, max: 499})
    },
    appsCreated: {
      count: faker.random.number({min: 500, max: 1000}),
      previousPeriodCount: faker.random.number({min: 100, max: 499})
    },
    appsEdited: {
      count: faker.random.number({min: 500, max: 1000}),
      previousPeriodCount: faker.random.number({min: 100, max: 499})
    },
    appsPublished: {
      count: faker.random.number({min: 500, max: 1000}),
      previousPeriodCount: faker.random.number({min: 100, max: 499})
    }
  };
};

const generateFakeAppSessions = () => {
  let appSessions = [];
  let month = 1;

  while (appSessions.length < 7) {
    appSessions.push({
      day: `2020-${ month > 9 ? month : `0${month}`}`,
      count: faker.random.number(10)
    });
    month++;
  }

  return appSessions;
};

const generateStudioSessions = () => {
  let studioSessions = [];
  let month = 1;

  while (studioSessions.length < 7) {
    studioSessions.push({
      day: `2020-${ month > 9 ? month : `0${month}`}`,
      count: faker.random.number(10)
    });

    month++;
  }

  return studioSessions;
};

const setCorrectDate = (date, format) => {
  switch (format) {
    case 'dayMonth':
      return moment(date).format('YYYY-MM');
    case 'ISO':
      return date.toISOString();
    case 'standart':
      return date;
    default:
      break;
  }
};

export default generateFakeData;
