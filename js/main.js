

(function () {
   const header = document.querySelector('.header');
   console.log(header);
   window.onscroll = () => {
     if (window.pageYOffset > 50) {
       header.classList.add('header__active');
     } else {
       header.classList.remove('header__active');
     }
   }
 }()
 );

(function () {

   const burger = document.querySelector('.burger');
   const menuOpen = document.querySelector('.menu');
   const menuClose = document.querySelector('.header__nav-ico-close');
   const menuLinks = document.querySelectorAll('.header__link');

   burger.addEventListener('click', () => {
      menuOpen.classList.add('header__nav_active');
   });

   menuClose.addEventListener('click', () => {
      menuOpen.classList.remove('header__nav_active');
   });

   if (window.innerWidth <= 767) {
      menuLinks.forEach(item => item.addEventListener('click', () => {
         menuOpen.classList.remove('header__nav_active');
      }))
   }
}()
);

(function () {
   const tabs = document.querySelectorAll('.tabs__btn-item');

   tabs.forEach(item => item.addEventListener('click', () => {
      let activeBtn = document.querySelector('.tabs__btn-item--active');
      let activeContent = document.querySelector('.tabs__content-item--active');
      console.log(activeBtn);

      activeBtn.classList.remove('tabs__btn-item--active');
      item.classList.add('tabs__btn-item--active');
      let attribute = item.getAttribute('data-button');
      console.log(attribute);
      let attributeGet = document.querySelector(`#${attribute}`);
      console.log(attributeGet);

      activeContent.classList.remove('tabs__content-item--active');
      attributeGet.classList.add('tabs__content-item--active');
   }
   ))
}())