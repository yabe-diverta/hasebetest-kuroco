<template>
  <div>
    <form>
    <h1>マガジン登録</h1>
      <p v-if="loginStatus !== null">
        {{ resultMessage }}
      </p>
    <input v-model="emailEntered" name="email" type="email" placeholder="email">
    <button v-on:click.prevent="subscribeSubmit">購読する</button>
    <button v-on:click.prevent="unsubscribeSubmit">購読解除する</button>
    <button>テスト送信する</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      emailEntered: '',
      loginStatus: null,
      resultMessage: null,
      }
  },
  methods: {
    //購読するクリック時の動作
    async subscribeSubmit() {
      try {
        const payload = {
                    email: this.emailEntered
                }
        // post data
        const response = await this.$axios.$post(
          process.env.BASE_URL + `/rcms-api/13/magazine_subscribe/1`, payload)
          this.loginStatus = 'success'
          this.resultMessage = response.messages[0]
      } catch (error) {
         this.loginStatus = 'failure'
         this.resultMessage = error.response.data.errors[0].message
      }
    },
    //購読するクリック時の動作
    async unsubscribeSubmit() {
      try {
        const payload = {
                    email: this.emailEntered
                }
        // post data
        const response = await this.$axios.$post(
          process.env.BASE_URL + `/rcms-api/13/magazine_unsubscribe/1`, payload)
          this.loginStatus = 'success'
          this.resultMessage = response.messages[0]
      } catch (error) {
         this.loginStatus = 'failure'
         this.resultMessage = error.response.data.errors[0].message
      }
    },
  },
}
</script>
