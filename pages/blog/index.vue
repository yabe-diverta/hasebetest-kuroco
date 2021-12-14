<template>
  <div>
    <p>ブログ一覧ページ</p>
    <div class="container">
      <div class="row mb-2">
        <div v-for="n in response.list" :key="n.slug" class="col-md-6">
          <div class="row m-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2" :style="'color:' + n.contents_type_ext_col_02">{{ n.contents_type_nm }}</strong>
             <h3 class="mb-0">{{ n.subject }}</h3>
             <div class="mb-1 text-muted">{{ n.ymd }}</div>
             <p class="card-text mb-auto"  v-html="n.ext_col_02"></p>
              <nuxt-link :to="'/blog/' + n.slug" class="stretched-link">ブログを見る</nuxt-link>
            </div>
            <div class="p-0 col-auto d-none d-lg-block">
            <img :src="n.ext_col_01.url" width="200" height="250"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
/*
 *ヘッダ
 */

.blog-header {
	line-height: 1;
	border-bottom: 1px solid #e5e5e5;
}

.blog-header-logo {
	font-family: "Playfair Display", Georgia, "Times New Roman", serif;
	font-size: 2.25rem;
}

.blog-header-logo:hover {
	text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
	font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}

.display-4 {
	font-size: 2.5rem;
}
@media (min-width: 768px) {
	.display-4 {
		font-size: 3rem;
	}
}

.nav-scroller {
	position: relative;
	z-index: 2;
	height: 2.75rem;
	overflow-y: hidden;
}

.nav-scroller .nav {
	display: flex;
	flex-wrap: nowrap;
	padding-bottom: 1rem;
	margin-top: -1px;
	overflow-x: auto;
	text-align: center;
	white-space: nowrap;
	-webkit-overflow-scrolling: touch;
}

.nav-scroller .nav-link {
	padding-top: .75rem;
	padding-bottom: .75rem;
	font-size: .875rem;
}

.card-img-right {
	height: 100%;
	border-radius: 0 3px 3px 0;
}

.flex-auto {
	-ms-flex: 0 0 auto;
	flex: 0 0 auto;
}

.h-250 { height: 250px; }
@media (min-width: 768px) {
	.h-md-250 { height: 250px; }
}

/* ページ送り */
.blog-pagination {
	margin-bottom: 4rem;
}
.blog-pagination > .btn {
	border-radius: 2rem;
}

/*
 * ブログの投稿
 */

.blog-post {
	margin-bottom: 4rem;
}
.blog-post-title {
	margin-bottom: .25rem;
	font-size: 2.5rem;
}
.blog-post-meta {
	margin-bottom: 1.25rem;
	color: #727272;
}

/*
 * フッタ
 */

.blog-footer {
	padding: 2.5rem 0;
	color: #727272;
	text-align: center;
	background-color: #f9f9f9;
	border-top: .05rem solid #e5e5e5;
}
.blog-footer p:last-child {
	margin-bottom: 0;
}
</style>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get(
        process.env.BASE_URL + '/rcms-api/15/blog'
      )
      return { response }
    } catch (e) {
      console.log(e.message)
    }
  },
}
</script>
