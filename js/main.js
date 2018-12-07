// всплывающее меню //
 
const popupMenu = document.querySelector('#popup-menu');
const hamburgMenu = document.querySelector('.hamburger-menu');
const popupMenuClose = document.querySelector('.popup-menu__close');
const popupMenulink = document.querySelector('.popup-menu__list');
const body = document.querySelector('body');


 hamburgMenu.addEventListener('click', function(){   
   popupMenu.style.display = 'flex' ;
   body.style.overflow = 'hidden';

})

   popupMenuClose.addEventListener('click', function(){
    popupMenu.style.display = 'none';
    body.style.overflow = '';

   })

   
   popupMenulink.addEventListener('click', function(){
       popupMenu.style.display = 'none';
       body.style.overflow = 'auto'; 
       
   });

   // hamburger_menu //

const menu = document.querySelector('.section__menu');
const menuItem = document.querySelectorAll('.menu-accord__item');
let menuItemlength = menuItem.length;

menu.addEventListener('click', function(e) {
    for (let i = 0; i < menuItemlength; i++) {
      menuItem[i].classList.remove('menu-accord__item--active');
      
    }
  })
  
  for (let i = 0; i < menuItemlength; i++) {
    menuItem[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      if (menuItem[i].classList.contains('menu-accord__item--active'))
       {
        menuItem[i].classList.remove('menu-accord__item--active');
        
      } else {
        for (let i = 0; i < menuItemlength; i++) {
          menuItem[i].classList.remove('menu-accord__item--active');
          
        }
        menuItem[i].classList.add('menu-accord__item--active')
        
      }
    })
  };

  // team //

  const team = document.querySelector('.section-team__accordion');
const teamItem = document.querySelectorAll('.section-team__item');
let teamItemlength = teamItem.length;

team.addEventListener('click', function(e) {
    for (let i = 0; i < teamItemlength; i++) {
      teamItem[i].classList.remove('section-team__item--active');
      
    }
  })
  
  for (let i = 0; i < teamItemlength; i++) {
    teamItem[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      if (teamItem[i].classList.contains('section-team__item--active')) {
        teamItem[i].classList.remove('section-team__item--active');
        
      } else {
        for (let i = 0; i < teamItemlength; i++) {
          teamItem[i].classList.remove('section-team__item--active');
          
        }
        teamItem[i].classList.add('section-team__item--active');
        
      }
    })
  };

// comments//
const commentsList = document.querySelector('.section-comments__list');
const overlay = document.querySelector('.overlay');
const popupModal = document.querySelector('.popup-modal__text');
const popupModalClose = document.querySelector('.popup-modal__close');

commentsList.addEventListener('click', e => {
  let element = e.target;
  console.log(e.target);
  if (document.querySelector(".section-comment__batton")) {
    let modalText = element.previousElementSibling.innerHTML;
    
    popupModal.innerHTML = modalText;
    overlay.style.display = 'block';
  }
  else( overlay.style.display = 'none')
});



document.addEventListener('keyup', e => {
  let keyName = e.keyCode;
  
  if (keyName === 27) {
    overlay.style.display = 'none';
  }
});

popupModalClose.addEventListener('click', function(){
  overlay.style.display = 'none';

 });

 //burgers//

 var slide_left=document.querySelector('.section-burgers__nav-back');
 var slide_right=document.querySelector('.section-burgers__nav-next');
 
 var slider=document.querySelectorAll('.burgers-content'); /*Получаем все фото*/
idx=0; /*Индекс массива фото*/
 
 slide_right.addEventListener('click', moveLeft);
function moveLeft(){
    slide_left.style.display = 'flex';
    slider[idx].style.display = 'none';
    slider[++idx].style.display = 'flex';
    if (idx === slider.length - 1) {
      slide_right.style.display = 'none';
      slider[idx].style.display = 'flex';
    }
}

slide_left.addEventListener('click', moveRight);
function moveRight(){
    slide_right.style.display = 'flex';
    slider[idx].style.display = 'none';
    slider[--idx].style.display = 'flex';
    if (idx === 0) {
      slide_left.style.display = 'none';
      slider[idx].style.display = 'flex';
    }
};

//scroll//
const section = $("section");
const display = $(".maincontent");
let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const setActivePage = pageEq => {
  $('.fixed-nav__page').eq(pageEq).addClass('active')
    .siblings().removeClass('active')
}

const performTransition = sectionEq => {
  const position = `${sectionEq * -100}%`;

  if (inScroll) return;

  inScroll = true;

  section
    .eq(sectionEq)
    .addClass("active")
    .siblings()
    .removeClass("active");

  display.css({
    transform: `translate(0, ${position})`,
    "-webkit-transform": `translate(0, ${position})`
  });

  setTimeout(() => {
    inScroll = false;
    setActivePage(sectionEq);
  }, 1300); // продолжительность анимации + 300ms - потому что закончится инерция
};

const scrollToSection = direction => {
  const activeSection = section.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "up" && prevSection.length) {
    performTransition(prevSection.index());
  }

  if (direction === "down" && nextSection.length) {
    performTransition(nextSection.index());
  }
};

$(document).on({
  wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0 ? "down" : "up";

    scrollToSection(direction);
  },
  keydown: e => {
    switch (e.keyCode) {
      case 40:
        scrollToSection("down");
        break;

      case 38:
        scrollToSection("up");
        break;
    }
  },
  touchmove: e => e.preventDefault()

  // touchstart touchend touchmove 
});


$('[data-scroll-to]').on('click', e => {
  e.preventDefault();

  const target = parseInt($(e.currentTarget).attr('data-scroll-to'));


  performTransition(target);

})

if (isMobile) {
  $(document).swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    
      const scrollDirection = direction === 'down' ? 'up' : 'down';
      
      scrollToSection(scrollDirection);
    }
  });
};


//map//

$(function(){

  ymaps.ready(init);
  var myMap,
  myPlacemark,
  myPlacemarks = [{
      latitude: 59.915038,
      longitude: 30.486096,
      hintContent: 'Mr.Burger на Товарищеском', 
      balloonContent: 'Товарищеский проспект, 20/27'
  },
  {
      latitude: 59.94708381,
      longitude: 30.38481688,
      hintContent: 'Mr.Burger на Тверской', 
      balloonContent: 'Тверская улица, 16'
  },
  {
      latitude: 59.891295,
      longitude: 30.316907,
      hintContent: 'Mr.Burger на Московском', 
      balloonContent: 'Московский проспект, 103к2'
  },
  {
      latitude: 59.973999,
      longitude: 30.311091,
      hintContent: 'Mr.Burger на Чапыгина', 
      balloonContent: 'улица Чапыгина, 13А'
  }];
  
  function init(){     
      myMap = new ymaps.Map("map", {
          center: [59.92606548, 30.32610869],
          zoom: 11
      });

      myPlacemarks.forEach(function(obj) {
          myPlacemark = new ymaps.Placemark([obj.latitude, obj.longitude], { 
          hintContent: obj.hintContent, 
          hintContent: obj.balloonContent
      }, {
          iconLayout: 'default#image',
          iconImageHref: './img/icons/map-marker.svg',
          iconImageSize: [46, 57],
          iconImageOffset: [-15, -50]
          });

          myMap.geoObjects.add(myPlacemark);
      });
      
      myMap.behaviors
      .disable('scrollZoom')
      .disable('drag')

  }

})
