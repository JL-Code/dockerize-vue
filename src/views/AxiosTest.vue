<template>
  <div>
    <p>
      axios timeout:
      <input class="el-input" type="number" v-model="timeout" />
    </p>
    <p>
      server timeout:
      <input class="el-input" type="number" v-model="serverTimeout" />
    </p>
    <p>
      url:
      <input class="el-input" type="text" v-model="url" />
    </p>
    <button type="button" @click="request">发起请求</button>

    <p>
      请求数据：
      {{ data }}
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AxiosTest",
  data() {
    return {
      data: {},
      timeout: 2000,
      serverTimeout: 1000,
      url: "/api/timeout/case",
    };
  },
  methods: {
    request() {
      axios
        .create({
          timeout: this.timeout,
        })
        .get(this.url, { params: { timeout: this.serverTimeout } })
        .then((res) => {
          this.data = res;
          console.log(res);
        })
        .catch((err) => {
          this.data = err;
          console.log(err);
        });
    },
  },
};
</script>

<style>
.el-input {
  width: 500px;
  height: 40px;
  line-height: 40px;
}
</style>