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
      
      if (menuItem[i].classList.contains('menu-accord__item--active')) {
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


  