<template>
  <div>
    <header class="p-header" style="background-color: #696969">
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">テストサイト</a>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <nuxt-link :to="localePath('/')" class="nav-link active" aria-current="page">Home</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link :to="localePath('/blog/')" class="nav-link active" aria-current="page" >ブログ</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/news/list/" class="nav-link active" aria-current="page" >ニュース</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/form/" class="nav-link active" aria-current="page">フォーム</nuxt-link>
              </li>
              <li class="nav-item dropdown">
                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="##">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="###">Something else here</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-expanded="false">ドロップダウン</a>
                <div class="dropdown-menu" aria-labelledby="dropdown01">
                 <a class="dropdown-item" href="#">リンク1</a>
                 <a class="dropdown-item" href="#">リンク2</a>
                  <a class="dropdown-item" href="#">リンク3</a>
                </div>
              </li>
            </ul>
            <div><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></div>|
            <div><nuxt-link :to="switchLocalePath('ja')">japanese</nuxt-link></div>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <Nuxt />
    <footer
      class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
    >
      <p class="col-md-4 mb-0 text-muted">&copy; 2021 会社名</p>

      <a
        href="/"
        class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap" />
        </svg>
      </a>

      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">ホーム</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">特徴</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">価格設定</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">FAQ</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">概要</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style>
/* 仕切り部分 */
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

/* アイコン */
.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}
</style>
