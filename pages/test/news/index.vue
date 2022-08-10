<template>
  <div>
    <p>ニュース一覧ページ</p>
    <div v-for="n in response.list" :key="n.slug">
      <nuxt-link :to="`/news/${n.topics_id}`">
        {{ n.ymd }} {{ n.subject }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
 export default {
     async asyncData ({ $axios }) {
         try {
           const response = await $axios.$get('/rcms-api/13/news', {
               headers: { 'x-rcms-api-access-token': 'b33f52bcdbc6d0b60ccbe43a9c42ffe7e847c00c8aa2e12a80c4c848127e9547' }
             }
           )
             return { response }
         }catch (e) {
             console.log(e.message)
         }
  },
};
</script>