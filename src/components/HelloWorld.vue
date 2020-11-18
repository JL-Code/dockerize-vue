<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ user.userName }}</h2>
    <h3>{{errmsg}}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      errmsg: "",
      user: {
        userId: "",
        userName: "",
        userCode: ""
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
