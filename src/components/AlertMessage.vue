<template>
  <div :class="['alert', alertClass]" v-html="message"></div>
</template>

<script>
export default {
  props: {
    message: String,
    alertClass: {
      type: String,
      default: 'alert-warning'
    }
  }
};
</script>
