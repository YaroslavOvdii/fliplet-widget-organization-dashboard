<template>
  <i v-if="content" :data-content="content" data-trigger="hover" ref="info" class="fas fa-info-circle"></i>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    };
  },
  mounted: function() {
    this.initPopover();
  },
  methods: {
    initPopover: function() {
      $(this.$refs.info).popover();
    }
  }
};
</script>
