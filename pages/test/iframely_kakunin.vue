<template>
  <div v-if="response">
    <h1 class="title">{{ response.details.subject }}</h1>
    <div class="post" v-html="response.details.ext_col_01"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    return {
      response: await $axios.$get(
        `https://sample-support-kuroco.a.kuroco.app/rcms-api/26/test/253`
      ),
    }
  },
  data() {
    return {
      response: null,
      iframesCount: null,
    }
  },
  watch: {
    iframesCount: {
      immediate: true,
      handler(count) {
        if (count === 0) {
          this.loadIframely()
        }
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      const iframes = Array.from(document.querySelectorAll('.post iframe'))
      // sets iframe elements count, does count-down to detect all iframes loaded.
      this.iframesCount = iframes.length
      iframes.forEach(
        (iframe) =>
          (iframe.onload = () => (this.iframesCount = this.iframesCount - 1))
      )
    })
  },
  methods: {
    // adds iframely scripts manually, because it won't load external elements before loading iframes done.
    loadIframely() {
      const elm = document.createElement('script')
      const iframelyResource = {
        async: true,
        charset: 'utf-8',
        src: 'https://iframely.kuroco-front.app/embed.js?cancel=0',
        // src: '//cdn.iframe.ly/embed.js',
      }
      Object.entries(iframelyResource).forEach(([k, v]) =>
        elm.setAttribute(k, v)
      )
      document.body.appendChild(elm)
    },
  },
}
</script>
