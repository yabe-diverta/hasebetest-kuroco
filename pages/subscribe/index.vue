<template>
  <div>
    <form>
    <h1>マガジン登録</h1>
    <input name="email" type="text">
    <button v-on:click="SubscribeSubmit">購読する</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    async SubscribeSubmit(e) {
      try {
        // post data
        const { id } = await this.$axios.$post(
          process.env.BASE_URL + `/rcms-api/13/magazine_subscribe/1`,{"email":"test7@example.com"})
      } catch (e) {
         console.log(e)
      }
    },
  },
}
</script>
