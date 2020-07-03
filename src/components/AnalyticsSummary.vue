<template>
  <div class="analytics-container">
    <SummaryCell
      v-for="(item, index) in cellInformation"
      :data="analyticsData[item[0]]"
      :title="item[1]"
      :tooltip="item[2]"
      :key="index"
    ></SummaryCell>
  </div>
</template>

<script>
import SummaryCell from './SummaryCell.vue';

export default {
  data() {
    return {
      cellInformation: [
        [
          'studioSessions',
          'Studio sessions',
          'The total number of Studio sessions. A session is a group of interactions without 30 min of inactivity.'
        ],
        [
          'newStudioUsers',
          'New studio users',
          'The total number of Studio users that logged in for the first time.'
        ],
        ['studioUsers', 'Studio users', 'The total number of Studio users.'],
        ['appsCreated', 'Apps created', 'The total number of apps created.'],
        [
          'appsEdited',
          'Apps edited',
          'The total number of apps that had screens altered within Studio.'
        ],
        [
          'appsPublished',
          'Apps published',
          'The total number of apps that had app updates published via Studio.'
        ],
        [
          'appSessions',
          'App sessions',
          'The total number of app sessions. A session is a group of interactions without 30 min of inactivity.'
        ],
        ['totalAppUsers', 'Total app users', 'The total number of app users.'],
        [
          'uniqueAppUsers',
          'Unique app users',
          'The total number of unique app users.'
        ]
      ]
    };
  },
  components: {
    SummaryCell
  },
  props: {
    analyticsData: Object
  }
};
</script>
