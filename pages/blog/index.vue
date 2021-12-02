<template>
  <div>
    <p>ブログ一覧ページ</p>
    <div class="row">
      <div
        v-for="n in response.list"
        :key="n.slug"
        class="col-sm-4"
        style="width: 18rem"
      >
        <div class="card">
          <img :src="n.ext_col_01.url" width="120" />
          <div class="container-fluid">
            <h5 class="card-title">{{ n.subject }}</h5>
            <p class="card-text" v-html="n.contents"></p>
            <nuxt-link :to="'/blog/' + n.slug" class="btn btn-primary"
              >ブログを見る</nuxt-link
            ><br />
            <nuxt-link :to="'/blog/' + n.slug"
              >{{ n.ymd }} {{ n.subject }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get(
        process.env.BASE_URL + '/rcms-api/1/blog'
      )
      return { response }
    } catch (e) {
      console.log(e.message)
    }
  },
}
</script>
