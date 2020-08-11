<template>
  <div :class="['alert', type]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'alert-warning'
    }
  }
};
</script>
