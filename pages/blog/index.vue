<template>
  <div><p>ブログ一覧ページ</p>
    <div class="container">
	    <div class="row">
        <div v-for="n in response.list" :key="n.slug" class="col-4">
          <img :src="n.ext_col_01.url" width = 120>
          <nuxt-link :to="'/blog/'+ n.slug">{{n.ymd}} {{n.subject}}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData ({ $axios }) {
        try {
            const response = await $axios.$get(process.env.BASE_URL + '/rcms-api/1/blog')
            return { response }
        }catch (e) {
            console.log(e.message)
        }
    }
}
</script>