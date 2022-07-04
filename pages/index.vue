<template>
  <div>
    <h1>{{ $t('home.title') }} - {{$i18n.locale}}</h1>
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

    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- インジケータ -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="response.details.ext_col_01[0].url" class="bd-placeholder-img" width="100%" height="100%"><rect fill="#777" width="100%" height="100%"/>
          <div class="container">
            <div class="carousel-caption text-left">
              <h1>見出しの例。</h1>
              <p>カルーセルの1番目のスライドの代表的なプレースホルダーコンテンツ。</p>
              <p><a class="btn btn-primary" href="#">本日登録</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="response.details.ext_col_01[1].url" class="bd-placeholder-img" width="100%" height="100%"><rect fill="#777" width="100%" height="100%"/>
          <div class="container">
            <div class="carousel-caption">
              <h1>別の見出しの例。</h1>
              <p>カルーセルの2番目のスライドの代表的なプレースホルダーコンテンツ。</p>
              <p><a class="btn btn-primary" href="#">もっと学ぼう</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="response.details.ext_col_01[2].url" class="bd-placeholder-img" width="100%" height="100%"><rect fill="#777" width="100%" height="100%"/>
          <div class="container">
            <div class="carousel-caption">
              <h1>もう1つ良い指標。</h1>
              <p>カルーセルの3番目のスライドの代表的なプレースホルダーコンテンツ。</p>
              <p><a class="btn btn-primary" href="#">ギャラリーを閲覧</a></p>
            </div>
          </div>
        </div>
      </div>
    </div><!-- /.carousel -->

    <!-- マーケティングメッセージングとフィーチャー
      ================================================== -->
    <!-- 残りのページを別のコンテナで囲んで、すべてのコンテンツを中央に配置 -->
    <div class="container marketing">
      <!-- 3列のテキスト -->
      <div class="row">
        <div v-for="n in response.details.ext_col_02" class="col-lg-4">
          <img :src="n.ext_col_02.url" class="bd-placeholder-img rounded-circle" width="140" height="140" />
            <rect fill="#777" width="100%" height="100%" />
          <h2>{{ n.ext_col_03 }}</h2>
          <p>
            {{ n.ext_col_04 }}
          </p>
          <p><nuxt-link :to="n.ext_col_05" class="btn btn-secondary">詳細を見る</nuxt-link></p>
        </div>
      </div>

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

<style>
/* 全体的なスタイル
/* カルーセルをカスタマイズ
-------------------------------------------------- */

/* カルーセルの基本クラス */
.carousel {
  margin-bottom: 4rem;
}
/* 画像を配置しているので、キャプションを手助けする必要がある */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* img要素の配置のために高さを宣言 */
.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}

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
  async asyncData({ $axios, app, $config }) {
  console.log('baseURL=' + process.env.BASE_URL);
  console.log('API_SECRET=' + $config.apiSecret);
  console.log('BASE_ORIGIN=' + $config.baseOrigin);
    if(app.i18n.locale === 'ja'){
      try {
       const response = await $axios.$get(
         process.env.BASE_URL + '/rcms-api/14/top/1002'
       )
       console.log(response)
       return { response }
      } catch (e) {
       console.log(e.message)
       }
    }
    else{
      try {
       const response = await $axios.$get(
         process.env.BASE_URL + '/rcms-api/14/top/1002?_lang=en'
       )
       console.log(response)
       return { response }
      } catch (e) {
        console.log(e.message)
       }
    }
  },
}
</script>
