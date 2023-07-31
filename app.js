var swiper = new Swiper(".home__swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop:true, 
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});    

const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}

const inputElement = document.querySelector('#correo');
const lbl_inputElement = document.querySelector('#lbl_correo');
const form = document.querySelector('.form');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
})
function verificarContenido() {
    const valor = inputElement.value.trim();

    if (valor === '') {
        // El input está vacío
        lbl_inputElement.classList.remove("cont");
    } else {
        // El input tiene contenido
        lbl_inputElement.classList.add("cont");
    }
}

// Evento que se ejecuta cuando se produce un cambio en el input
inputElement.addEventListener('change', verificarContenido);
