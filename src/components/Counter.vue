<template>
  <div class="counter">
    <!-- {{count}} -->
    <Count :count="count"></Count>
    <button type="button" @click="increment">自增</button>
  </div>
</template>

<script>
import Count from "./Count";
export default {
  data() {
    return { count: 0 };
  },
  components: {
    Count
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>
<style lang="less" scoped>
.counter {
  padding: 30px;
  text-align: center;
}
</style>
