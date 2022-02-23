<template>
  <div>
    <p>ニュース一覧ページ</p>
    <p>現在のページ {{response.pageInfo.pageNo}}/{{response.pageInfo.totalPageCnt}}</p>
    <div v-for="n in response.list" :key="n.slug">
      <nuxt-link :to="'/news/' + n.slug">{{ n.ymd }} {{ n.subject }}</nuxt-link>
    </div>

    <ul style="list-style: none; display: flex">
      <li>前へ</li>
      <li v-for="i in response.pageInfo.totalPageCnt" :key="i">        
        <nuxt-link :to="{query:{pageID:i}}" replace>{{i}}</nuxt-link>
      </li>
      <li>次へ</li>
    </ul>
  </div>
</template>

<script>
export default {
//  beforeRouteUpdate(to, from, next) {
//    next()
//    window.location.reload()
//  },
  watch: {
    '$route.query'() {
      this.$router.go(0)
    }
  },
  async asyncData({ $axios, query }) {
    try {
      const response = await $axios.$get(
        process.env.BASE_URL + '/rcms-api/1/news',
        {
          params: {
            cnt: 4,
            pageID: query.pageID,
          },
        }
      )
      return { response }
    } catch (e) {
      console.log(e.message)
    }
  },
}
</script>
