export const state = () => ({
    profile: null
})

export const getters = {
    authenticated (state) {
        return state.profile !== null
    },
    hostname () {
        try {
            const sitekey = localStorage.getItem('sitekey');
            if (sitekey === '' || sitekey === 'undefined' || sitekey === 'null') {
                throw new Error('unknown sitekey');
            }
            return `https://${sitekey}.g.kuroco.app`;
        } catch (e) {
            return false;
        }
    }
}

export const mutations = {
    setProfile (state, { profile }) {
        state.profile = profile
    },
}

export const actions = {
    async login ({ commit, getters }, payload) {
        localStorage.setItem('sitekey', payload.sitekey);
        this.$axios.defaults.baseURL = getters.hostname;

        await this.$axios.$post('/rcms-api/18/login', payload.loginInfo)
        const profileRes = await this.$axios.$get('/rcms-api/18/profile', { withCredentials: true })
        commit('setProfile', { profile: profileRes.data })        
    },

    async logout ({ commit }) {
        try {
            await this.$axios.$post('/rcms-api/18/logout')
        } catch {
             /** No Process */
             /** エラーが返却されてきた場合は、結果的にログアウトできているものとみなし、これを無視します。 */
            }
            commit('setProfile', { profile: null })

            this.$router.push('/login')
        },

    async restoreLoginState ({ commit, dispatch, getters }) {
        if (!getters.hostname) {
            await dispatch('logout')
            throw new Error('need to login')
        }
        try {
            this.$axios.defaults.baseURL = getters.hostname;
            const profileRes = await this.$axios.$get('/rcms-api/18/profile', { withCredentials: true })
            commit('setProfile', { profile: profileRes.data });
        } catch {
            await dispatch('logout')
            throw new Error('need to login')
        }
    }
}