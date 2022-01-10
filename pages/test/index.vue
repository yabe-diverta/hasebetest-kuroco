<template>
    <div>
      <p>KurocoFilesキャッシュのテスト3</p>
      <p><a :href="response.details.ext_col_01.url">APIのレスポンスのテストpdf</a></p>
      <p><a href="https://hasebetest.g.kuroco-img.app/v=1234567890/files/user/testfile.pdf">KurocFilesを直接参照テストpdf</a></p>
      <p>APIのレスポンスのテスト画像<img :src="response.details.ext_col_02.url"/></p>
      <p>KurocFilesを直接参照テスト画像<img src="https://hasebetest.g.kuroco-img.app/v=1234567894/files/user/gazo.png"/></p>
    </div>
</template>

<script>
export default {
  async asyncData({ $axios, app }) {
      try {
       const response = await $axios.$get(
         process.env.BASE_URL + '/rcms-api/1/file/1019'
       )
       console.log(response)
       return { response }
      } catch (e) {
       console.log(e.message)
       }
  },
}
</script>
