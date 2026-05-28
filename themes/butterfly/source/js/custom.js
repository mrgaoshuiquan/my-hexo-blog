(function () {

  function setCover() {

    const imgs = document.querySelectorAll(
      ".post-bg, .post-cover img, .article-cover img"
    );

    imgs.forEach((img) => {
      const url = "https://www.loliapi.com/acg?random=" + Date.now() + Math.random();
      img.src = url;
    });

  }

  // 首次加载
  document.addEventListener("DOMContentLoaded", setCover);

  // Butterfly PJAX 支持（关键）
  document.addEventListener("pjax:complete", setCover);

})();