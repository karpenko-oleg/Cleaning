let popupBg = document.querySelector('.burger_popUp');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.button__connection_cal');
let closePopupButton = document.querySelector('.popup__closse_img');

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
  });
});

closePopupButton.addEventListener('click', () => {
  popupBg.classList.remove('active');
  popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  }
});

// Маска на номер телефона
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

// Меню бургера
const iconMenu = document.querySelector('.burger__menu');
const iconMenuClosse = document.querySelector('.nav__menu_closs');
if (iconMenu) {
  const menuNav = document.querySelector('.nav__menu');
  iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('_active');
    menuNav.classList.toggle('_active');
  });
}

// Плавный скролл
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menulink = e.target;
    if (menulink.dataset.goto && document.querySelector(menulink.dataset.goto)) {
      const gotoBlock = document.querySelector(menulink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        scrollY -
        document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}
