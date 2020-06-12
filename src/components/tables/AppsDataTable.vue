<template>
  <div>
    <div v-if="isDataTransformed">
      <DataTable :columns="cols" :rows="rows"></DataTable>
    </div>
  </div>
</template>

<script>
import DataTable from './DataTable';

export default {
  data() {
    return {
      cols: [
        {
          name: 'App',
          help: ''
        },
        {
          name: 'Created',
          help: 'The date the app was created in Studio'
        },
        {
          name: 'Last Edit',
          help: 'The date a screen was last editing in Studio'
        },
        {
          name: 'Last publish',
          help: 'The date an app update was last published in Studio'
        },
        {
          name: 'Apple',
          help: 'The first time an app was built for iOS'
        },
        {
          name: 'Android',
          help: 'The first time an app was built for Android'
        },
        {
          name: 'Web',
          help: 'The first time an app was published to web'
        },
        {
          name: 'Users',
          help: 'Total app users across all apps.\n A user is a unique device and, if the app has a login, a unique logged in user.'
        },
        {
          name: 'Sessions',
          help: 'The total number of app sessions.\n A session is a group of interactions without 30 min of inactivity.'
        },
        {
          name: 'Edits',
          help: 'The total times screens were edited in Studio'
        },
        {
          name: 'Published',
          help: 'The total times the an app updated was published in Studio'
        }
      ],
      rows: [],
      isDataTransformed: false
    };
  },
  components: {
    DataTable
  },
  props: {
    apps: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    transformData: function() {
      this.apps.forEach(app => {
        this.rows.push(
          [
            { value: { title: app.name, appId: app.id }, type: 'action' },
            { value: app.createdAt, type: 'date' },
            { value: app.updatedAt, type: 'date'},
            { value: app.publishedAt, type: 'date'},
            { value: app.publishedAppleAt, type: 'date'},
            { value: app.publishedGoogleAt, type: 'date'},
            { value: app.publishedWebAt, type: 'date'},
            { value: [app.stats.users.count, app.stats.users.previousPeriodCount], type: 'dynamic'},
            { value: [app.stats.sessions.count, app.stats.sessions.previousPeriodCount], type: 'dynamic'},
            { value: [app.stats.updates.count, app.stats.updates.previousPeriodCount], type: 'dynamic'},
            { value: [app.stats.publishes.count, app.stats.publishes.previousPeriodCount], type: 'dynamic'}
          ]
        );

        this.isDataTransformed = true;
      });
    }
  },
  mounted: function() {
    this.transformData();
  }
};
</script>
