<template>
  <div>
    <button type="button" @click="logout">
      ログアウト
    </button>
    <p>ニュース一覧ページ{{ this.$route.params.page }}</p>
    <div v-for="n in response.list" :key="n.slug">
      <nuxt-link :to="'/news/' + n.slug +'/'">{{ n.ymd }} {{ n.subject }}</nuxt-link>
    </div>

    <ul style="list-style: none; display: flex">
      <li v-if="response.pageInfo.pageNo === 1">前へ</li>
      <li v-else><nuxt-link :to="'/news/list/' + (response.pageInfo.pageNo -1) +'/'">前へ</nuxt-link></li>
      <li v-for="i in response.pageInfo.totalPageCnt" :key="i">        
        <nuxt-link :to="'/news/list/' + i +'/'">{{i}}</nuxt-link>
      </li>
      <li v-if="response.pageInfo.pageNo === response.pageInfo.totalPageCnt">次へ</li>
      <li v-else><nuxt-link :to="'/news/list/' + (response.pageInfo.pageNo +1) +'/'">次へ</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  middleware: 'auth',
  async asyncData({ $axios, params}) {
    try {
      const response = await $axios.$get(
        process.env.BASE_URL + '/rcms-api/1/news',
        {
          params: {
            pageID: params.page,
          },
        }
      )
      return { response }
    } catch (e) {
      console.log(e.message)
    }
  },
  methods: {
    ...mapActions(['logout'])
    }
}
</script>