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
          name: 'Users',
          help: 'Test description'
        },
        {
          name: 'Last seen',
          help: 'Test description'
        },
        {
          name: 'Created',
          help: 'Test description'
        },
        {
          name: 'Studio sessions',
          help: 'Test description'
        },
        {
          name: 'Viewer sessions',
          help: 'Test description'
        },
        {
          name: 'App Publishes',
          help: 'Test description'
        },
        {
          name: 'Apps available',
          help: 'Test description'
        },
        {
          name: 'Apps created',
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
    users: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    transformData: function() {
      this.users.forEach(user => {
        this.rows.push(
          [
            { value: user.email },
            { value: user.lastSeenAt, type: 'date'},
            { value: user.createdAt, type: 'date'},
            { value: user.stats.studioSessions.count },
            { value: user.stats.viewerSessions.count },
            { value: user.stats.appPublishes.count },
            { value: user.stats.appsAvailable.count },
            { value: user.stats.appsCreated.count }
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
