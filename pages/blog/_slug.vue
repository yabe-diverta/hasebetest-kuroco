<template>
  <div>
    <h1 class="title">{{ response.details.subject }}</h1>
    <img :src="response.details.ext_col_01.url" />
    <div class="post" v-html="response.details.contents"></div>
    <div>vimeoの動画</div>
    <iframe
      :src="response.details.ext_col_02.url"
      width="640"
      height="360"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      const response = await $axios.$get(
        process.env.BASE_URL + '/rcms-api/1/blog/' + `${params.slug}`
      )
      console.log(response)
      return { response }
    } catch (e) {
      console.log(e.message)
    }
  },
}
</script>
