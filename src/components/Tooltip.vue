<template>
  <span v-if="content" :data-content="content" data-trigger="hover" ref="info">
    <slot></slot>
    <i :class="['fa', icon]"></i>
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
    },
    icon: {
      type: String,
      default: 'fa-info-circle'
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
