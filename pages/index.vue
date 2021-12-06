<template>
  <div>
    <div class="p-3 mb-4 bg-img">
      <div class="text-center container">
        <div class="row py-lg-3">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">アルバムの実例</h1>
            <p class="lead">
              短くて、その下のコレクション、そのコンテンツ、クリエイターなどを指し示すものではない。短くて甘いですが、あまりにも短くはないので、人々はそれを完全にスキップしない。
            </p>
            <p>
              <a href="#" class="btn btn-primary">アクションへの主な呼びかけ</a>
              <a href="#" class="btn btn-secondary">二次的なアクション</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- マーケティングメッセージングとフィーチャー
      ================================================== -->
    <!-- 残りのページを別のコンテナで囲んで、すべてのコンテンツを中央に配置 -->
    <div class="container marketing">
      <!-- 3列のテキスト -->
      <div class="row">
        <div class="col-lg-4">
          <img :src="response.details.ext_col_02[0].url" class="bd-placeholder-img rounded-circle" width="140" height="140" />
            <rect fill="#777" width="100%" height="100%" />
          <h2>{{ response.details.ext_col_03[0] }}</h2>
          <p>
            {{ response.details.ext_col_04[0] }}
          </p>
          <p><nuxt-link :to="response.details.ext_col_05[0]" class="btn btn-secondary">詳細を見る</nuxt-link></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <title>一般的なプレースホルダ画像</title>
            <rect fill="#777" width="100%" height="100%" />
          </svg>
          <h2>見出し</h2>
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          </p>
          <p><a class="btn btn-secondary" href="#">詳細を見る &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <title>一般的なプレースホルダ画像</title>
            <rect fill="#777" width="100%" height="100%" />
          </svg>
          <h2>見出し</h2>
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          </p>
          <p><a class="btn btn-secondary" href="#">詳細を見る &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->

      <!-- フィーチャーを開始 -->
      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            最初のフィーチャータイトル。<span class="text-muted"
              >それはあなたの心を吹き飛ばすだろう。</span
            >
          </h2>
          <p class="lead">
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <title>一般的なプレースホルダ画像</title>
            <rect fill="#eee" width="100%" height="100%" />
            <text fill="#aaa" dy=".3em" x="50%" y="50%">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            ああ、それは良いことだ。<span class="text-muted">自分で見て。</span>
          </h2>
          <p class="lead">
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <title>一般的なプレースホルダ画像</title>
            <rect fill="#eee" width="100%" height="100%" />
            <text fill="#aaa" dy=".3em" x="50%" y="50%">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            そして、最後に、これ。<span class="text-muted"
              >チェックメイト。</span
            >
          </h2>
          <p class="lead">
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <title>一般的なプレースホルダ画像</title>
            <rect fill="#eee" width="100%" height="100%" />
            <text fill="#aaa" dy=".3em" x="50%" y="50%">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />
      <!-- /フィーチャーを終了 -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
export default {}
</script>

<style>
/* 全体的なスタイル
/* マーケティング・コンテンツ
-------------------------------------------------- */

/* カルーセルの下の3列の中のテキストを整列 */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}

/* フィーチャー
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* ブートストラップの&lt;hr&gt;をもっと外に出す */
}

/* マーケティングの見出しを細めにする */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;
}

/* 背景 */
.bg-img {
  background-image: url('https://hasebetest.g.kuroco-img.app/v=1234567890/files/user/Image/29_ext_01_0.png');
  background-size: cover;
  background-position: center 60%;
}

/* レスポンシブCSS
-------------------------------------------------- */

@media (min-width: 40em) {
  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get(
        process.env.BASE_URL + '/rcms-api/14/top/1002'
      )
      console.log(response)
      return { response }
    } catch (e) {
      console.log(e.message)
    }
  },
}
</script>
