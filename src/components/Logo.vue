<template>
  <div class="zap-logo-group">
    <img v-if="logo" class="zap-logo__img" :src="logo" alt="logo" />
    <img v-else class="zap-logo__img" src="../../assets/logo@2x.png" alt="logo" />
    <div class="zap-divider zap-divider_vertical"></div>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    logo: String
  },
  computed: {
    useParams() {
      return this.logo ? true : false;
    }
  }
};
</script>
