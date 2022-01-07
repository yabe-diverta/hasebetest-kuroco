<template>
  <div>
    <div v-for="n in response.list" :key="n.slug">
      <nuxt-link :to="'/news/'+ n.slug">{{n.ymd}} {{n.subject}}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, app }) {
    if(app.i18n.locale === 'ja'){
      try {
       const response = await $axios.$get(
         process.env.BASE_URL + '/rcms-api/1/news'
       )
       console.log(response)
       return { response }
      } catch (e) {
       console.log(e.message)
       }
    }
    else{
      try {
       const response = await $axios.$get(
         process.env.BASE_URL + '/rcms-api/1/news?_lang=en'
       )
       console.log(response)
       return { response }
      } catch (e) {
        console.log(e.message)
       }
    }
  },
}
</script>