<template>
  <div>
    <div v-for="n in response.list" :key="n.slug">
      <nuxt-link :to="`/news_preview/${n.topics_id}`">{{n.ymd}} {{n.subject}}</nuxt-link>
    </div>
  </div>
</template>


<script>
export default {
    async asyncData ({ route, $axios }) {

        const requestNews = async () => {
            const response = await $axios.$get('/rcms-api/1/news');
            return { response };
        };
        const requestNewsPreview = async (previewToken) => {
            const response = await $axios.$get('/rcms-api/1/news/preview' + '?preview_token=' + previewToken);
            return { response: { list: [response.details] } };
        };

        // URLのクエリに、
        // preview_tokenが存在する場合は、previewエンドポイントへ、
        // preview_tokenが存在しない場合は、newsエンドポイントへ、
        // リクエストします。
        try {
            const previewToken = route.query.preview_token;
            return previewToken !== undefined ?
                await requestNewsPreview(previewToken) :
                await requestNews();
        }catch (e) {
            console.log(e.message)
        }
    }
}
</script>