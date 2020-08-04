<template>
  <div :class="['alert', type]" v-html="message"></div>
</template>

<script>
export default {
  props: {
    message: String,
    type: {
      type: String,
      default: 'alert-warning'
    }
  }
};
</script>
