<template>
  <span v-if="content" :data-content="content" data-trigger="hover" ref="info">
    <slot></slot>
    <i class="fa fa-info-circle"></i>
  </span>
</template>

<script>
export default {
  props: {
    content: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    initPopover: function() {
      $(this.$refs.info).popover(this.options);
    }
  },
  mounted: function() {
    this.initPopover();
  }
};
</script>
