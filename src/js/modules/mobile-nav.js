function mobileNav() {
  // Mobile nav button
  const navBtnOpen = document.querySelector('#mobile-nav-btn');
  const navBtnClose = document.querySelector('#close-mobile-nav');
  const mobileNavFade = document.querySelector('.mobile-nav-fade');

  const nav = document.querySelector('.mobile-nav');
  //Открыть мобильную навигацию
  navBtnOpen.onclick = openMobileNav;

  //Закрыть мобильную навигацию по кнопке
  navBtnClose.onclick = closeMobileNav;

  //Открыть мобильную навигацию по оверлею
  mobileNavFade.onclick = closeMobileNav;

  function closeMobileNav() {
    nav.classList.remove('mobile-nav--open');
    mobileNavFade.classList.remove('mobile-nav-fade--open');
    document.body.classList.toggle('no-scroll');
  }
  function openMobileNav() {
    nav.classList.add('mobile-nav--open');
    mobileNavFade.classList.add('mobile-nav-fade--open');
    document.body.classList.toggle('no-scroll');
  }

  //Запретить всплытие кликов из мобильной навегации
  nav.addEventListener('click', function (e) {
    e.stopPropagation();
  })
}

export default mobileNav;