<template>
  <span v-if="content" :data-content="content" data-trigger="hover" ref="info">
    <i class="fa fa-info-circle"></i>
  </span>
</template>

<script>
export default {
  props: {
    content: String
  },
  methods: {
    initPopover: function() {
      $(this.$refs.info).popover();
    }
  },
  mounted: function() {
    this.initPopover();
  }
};
</script>
