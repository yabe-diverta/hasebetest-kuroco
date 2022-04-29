<template>
  <div>
    <p>{{ response.details.subject}}</p>
    <p>{{ response.details.ext_col_02}}</p>

  <button type="button" @click="logout">
  ログアウト
  </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  middleware: 'auth',
  async asyncData({ $axios}) {
    try {
      const response = await $axios.$get('/rcms-api/20/details/1046')
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