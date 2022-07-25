<template>
  <div>
    <h1 class="title">{{ response.details.subject }}</h1>
    <div class="post" v-html="response.details.ext_col_01"></div>
  </div>
</template>


<script>
export default {
  head() {
    return {
      script: [
        {
          async: true,
          charset: "utf-8",
          src: "https://iframely.kuroco-front.app/embed.js?cancel=0",
        }
      ],
    };
  },
  async asyncData({ $axios, params }) {
    return {
      response: await $axios.$get(`https://sample-support-kuroco.a.kuroco.app/rcms-api/26/test/253`),
    };
  },
};
</script>

