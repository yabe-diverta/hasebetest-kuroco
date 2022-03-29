<template>
  <div>
    <form>
    <h1>マガジン登録</h1>
      <p v-if="loginStatus !== null">
        {{ emailEntered }}{{ resultMessage }}
      </p>
    <input v-model="emailEntered" name="email" type="email" placeholder="email">
    <button v-on:click.prevent="SubscribeSubmit">購読する</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      emailEntered: '',
      loginStatus: null,
      resultMessage: null
      }
  },
  methods: {
    async SubscribeSubmit(e) {
      try {
        const payload = {
                    email: this.emailEntered
                }
        // post data
        const response = await this.$axios.$post(
          process.env.BASE_URL + `/rcms-api/13/magazine_subscribe/1`, payload)
          this.loginStatus = 'success'
          this.resultMessage = 'の配信購読者登録をしました。'
      } catch (e) {
         this.loginStatus = 'failure'
         this.resultMessage = 'の配信購読者登録ができませんでした。'
      }
    },
  },
}
</script>
