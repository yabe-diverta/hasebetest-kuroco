<template>
  <div>
    <h1 class="title">{{ response.details.subject }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      const response = await $axios.$get(
        process.env.BASE_URL + '/rcms-api/9/test_detail/' + `${params.slug}`
      )
      console.log(response)
      return { response }
    } catch (e) {
      console.log(e.message)
    }
  },
}
</script>
