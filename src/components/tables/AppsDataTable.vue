<template>
  <div>
    <div v-if="dataTransfotmed">
      <DataTable :columns="cols" :rows="rows"></DataTable>
    </div>
  </div>
</template>

<script>
import DataTable from './DataTable';

export default {
  props: {
    apps: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      cols: [
        {
          name: 'App',
          help: ''
        },
        {
          name: 'Created',
          help: 'Discription'
        },
        {
          name: 'Last Edit',
          help: ''
        },
        {
          name: 'Last publish',
          help: ''
        },
        {
          name: 'Apple',
          help: ''
        },
        {
          name: 'Android',
          help: ''
        },
        {
          name: 'Web',
          help: ''
        },
        {
          name: 'Users',
          help: ''
        },
        {
          name: 'Sessions',
          help: ''
        },
        {
          name: 'Edits',
          help: ''
        },
        {
          name: 'Published',
          help: ''
        }
      ],
      rows: [],
      dataTransfotmed: false
    };
  },
  components: {
    DataTable
  },
  mounted: function() {
    this.transformData();
  },
  methods: {
    transformData: function() {
      this.apps.forEach(app => {
        this.rows.push(
          [
            [ app.name],
            [app.createdAt],
            [app.updatedAt],
            [app.publishedAt],
            [app.publishedAppleAt],
            [app.publishedGoogleAt],
            [app.publishedWebAt],
            [app.stats.users.count, app.stats.users.previousPeriodCount],
            [app.stats.sessions.count, app.stats.sessions.previousPeriodCount],
            [app.stats.updates.count, app.stats.updates.previousPeriodCount],
            [app.stats.publishes.count, app.stats.publishes.previousPeriodCount]
          ]
        );

        this.dataTransfotmed = true;
      });
    }
  }
};
</script>
