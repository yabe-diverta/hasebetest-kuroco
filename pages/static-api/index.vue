<template>
  <div>
    <p>Static APIで制限をかけた一覧ページ</p>
    <div v-for="n in response.list" :key="n.slug">
      <nuxt-link :to="'/static-api/' + n.slug"
        >{{ n.ymd }} {{ n.subject }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get(
        process.env.BASE_URL + '/rcms-api/9/test'
      )
      return { response }
    } catch (e) {
      console.log(e.message)
    }
  },
}
</script>
