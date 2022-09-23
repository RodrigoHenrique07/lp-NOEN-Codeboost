
// DROPDOWN
const btnDropdown = document.getElementById('js-btn-dropdown')
// determinar um id para a tag a que contem "produtos neon" que é onde 
//vai ser ativado
const dropdown = document.querySelector('.js-dropdown')
// selecionando a caixa que contem o dropdown para fazer ela receber/remover
// a class active

function openDropdown (event){
    event.preventDefault(); //previnir o comportamento padrão de atualizar

    dropdown.classList.toggle('active'); //ativa e desativa
}

btnDropdown.addEventListener('click', openDropdown);
dropdown.addEventListener('mouseleave', openDropdown); 
// o mouseleave vai executar e remover a class 'active' quando
// tiver o cursor de cima do dropdown (toda a caixa)


// ========== MENU FIXO =================

const header = document.getElementById('js-header')


function fixedMenu () {
    // O window.pageYOffset pega a posição da pagina e quando a pagina estiver numa posição maior que 80 vai executar a função
    if(window.pageYOffset > 80) {
        header.classList.add('fixed-menu');
    } else {
        header.classList.remove('fixed-menu');
    }
   
}

document.addEventListener('scroll', fixedMenu)
//neste evento, sempre que for dado scroll na pagina ele vai ser executado

// =========== MODAL =============

const btnMenu = document.getElementById('js-btn-menu-mobile')
const overleyMenu = document.querySelector('.js-overley')
// const dropDownMenuMobile = document.getElementById('js-btn-dropdown-menu-mobile')


function openMenuMobile () {
    document.documentElement.classList.toggle('menu-opened') /*está adicioando uma class no document (html) */

}

// function openDropdownMenuMobile (event) {
//     event.preventDefault()
//     dropdown.classList.toggle('active');
//     openMenuMobile()
// }

btnMenu.addEventListener('click', openMenuMobile)
overleyMenu.addEventListener('click', openMenuMobile)
// dropDownMenuMobile.addEventListener('click', openDropdownMenuMobile)




// STYLE / RESPONSIVO SIWPER
var swiper = new Swiper(".slide-depoimentos", {
    slidesPerView: 3,
    spaceBetween: 82,
    pagination: {
      el: ".s-depoimentos .top .slide-depoimentos-pagination",
      clickable: true,
    },
    breakpoints:{
      320: {
          slidesPerView: 1.3,
          spaceBetween: 16,
      },
      380: {
          slidesPerView: 2,
          spaceBetween: 72,
      },
      600: {
          slidesPerView: 2.3,
          spaceBetween: 62,
      },
      991: {
          slidesPerView: 2.7,
          spaceBetween: 12,
      },
     
      1200: {
          slidesPerView: 3,
          spaceBetween: 32,
      },
      1440: {
          slidesPerView: 3,
          spaceBetween: 82,
      },
    },
    
  });

// ANIMAÇÕES COM AOS
  AOS.init({
      duration: 1000,
      once: true
  });