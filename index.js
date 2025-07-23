document.addEventListener('DOMContentLoaded', function() {
  // メニューボタンとメニュー本体を取得
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');

  // 要素が存在する場合のみイベントリスナーを登録
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      menu.classList.toggle('open');
      menuBtn.classList.toggle('open');
    });

    menu.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
      }
      e.stopPropagation();
    });

    document.addEventListener('click', function() {
      menu.classList.remove('open');
      menuBtn.classList.remove('open');
    });
  }
});
