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
          help: 'Test description'
        },
        {
          name: 'Created',
          help: 'Test description'
        },
        {
          name: 'Last Edit',
          help: 'Test description'
        },
        {
          name: 'Last publish',
          help: 'Test description'
        },
        {
          name: 'Apple',
          help: 'Test description'
        },
        {
          name: 'Android',
          help: 'Test description'
        },
        {
          name: 'Web',
          help: 'Test description'
        },
        {
          name: 'Users',
          help: 'Test description'
        },
        {
          name: 'Sessions',
          help: 'Test description'
        },
        {
          name: 'Edits',
          help: 'Test description'
        },
        {
          name: 'Published',
          help: 'Test description'
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
            { value: app.name },
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
