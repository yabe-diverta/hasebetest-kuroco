<template>
    <form @submit.prevent="login">
      <p v-if="loginStatus !== null" :style="{ color: resultMessageColor }">
        {{ resultMessage }}
      </p>

        <input v-model="sitekey" name="sitekey" type="sitekey" placeholder="sitekey">
        <input v-model="email" name="email" type="email" placeholder="email">
        <input
            v-model="password"
            name="password"
            type="password"
            placeholder="password"
        >
        <button type="submit">
            ログイン
        </button>

        <div>
            <nuxt-link to="/news/list">ニュース一覧ページへ</nuxt-link>
            <nuxt-link to="/b2btest">b2bテストページへ</nuxt-link>
        </div>
    </form>
</template>

<script>
export default {
    data () {
        return {
            sitekey: '',
            email: '',
            password: '',
            loginStatus: null,
            resultMessage: null
        }
    },
    computed: {
        resultMessageColor () {
            switch (this.loginStatus) {
            case 'success':
                return 'green'
            case 'failure':
                return 'red'
            default:
                return ''
            }
        }
    },
    methods: {
        async login () {
            localStorage.setItem('sitekey', this.sitekey); // save sitekey
            this.$axios.defaults.baseURL = this.sitekey === 'dev-nuxt-auth'
                ? 'https://dev-nuxt-auth.a.kuroco.app'
                : `https://${this.sitekey}.g.kuroco.app`;
            try {
                const payload = {
                    email: this.email,
                    password: this.password
                }
                await this.$store.dispatch('login', payload)
                this.loginStatus = 'success'
                this.resultMessage = 'ログインに成功しました。'
            } catch (e) {
                this.loginStatus = 'failure'
                this.resultMessage = 'ログインに失敗しました。'
            }
        }
    }
}
</script>