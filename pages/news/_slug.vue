<template>
  <div>
    <h1 class="title">{{ response.details.subject }}</h1>
    <div class="post" v-html="response.details.contents"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      const response = await $axios.$get(
        '/rcms-api/1/newsdetail/' + `${params.slug}`
      )
      console.log(response)
      return { response }
    } catch (e) {
      console.log(e.message)
    }
  },
}
</script>
