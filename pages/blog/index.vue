<template>
  <div>
    <div class="container">
      <h1>ブログ一覧ページ</h1>
      <div class="row mb-2">
        <div v-for="n in response.list" :key="n.slug" class="col-md-6">
          <div class="row m-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2" :style="'color:' + n.contents_type_ext_col_02">{{ n.contents_type_nm }}</strong>
             <h3 class="mb-0">{{ n.subject }}</h3>
             <div class="mb-1 text-muted">{{ n.ymd }}</div>
             <p class="card-text mb-auto"  v-html="n.ext_col_02"></p>
              <nuxt-link :to="'/blog/' + n.slug" class="stretched-link">ブログを見る</nuxt-link>
            </div>
            <div class="p-0 col-auto d-none d-lg-block">
            <img :src="n.ext_col_01.url" width="200" height="250"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.h-250 { height: 250px; }
@media (min-width: 768px) {
	.h-md-250 { height: 250px; }
}
</style>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get(
        process.env.BASE_URL + '/rcms-api/15/blog'
      )
      return { response }
    } catch (e) {
      console.log(e.message)
    }
  },
}
</script>
