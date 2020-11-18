<template>
  <div>widget {{message}}</div>
</template>

<script>
export default {
  name: "Widget",
  props: {
    message: {
      type: String,
      default: "counter"
    }
  },
  mounted() {
    console.log("counter mounted");
  }
};
</script>
