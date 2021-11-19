/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  // si la variables existe : validation
  if (toggle && nav) {
    // injecte une class
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // au click de chaque lien navigation, retire le menu mobile
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*===== CHANGER BACKGROUND HEADER =====*/

function scrollHeader() {
  const nav = document.getElementById("header");
  // quand la page est scrollé a plus de 200vh, ajout de la class scroll-header
  if (this.scrollY >= 200) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/*===== VOIR LE SCROLL =====*/

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // quand le scroll est a plus de 560vh, ajout de la class show-scroll
  if (this.scrollY >= 560) {
    scrollTop.classList.add("scroll-top");
  } else {
    scrollTop.classList.remove("scroll-top");
  }
}

window.addEventListener("scroll", scrollTop);

// /*===== DARK THEME =====*/
// const themeButton = document.getElementById('theme-button')
// const darktheme = 'dark-theme'

// // activer/désactiver le theme dark
// themeButton.addEventListener('click', ()=>{
//     document.body.classList.toggle(darktheme)
// })

// ******** SCROLL ANIMATION *********
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img,
            .about__data, .about__img,
            .menu__content, .contact__data,
            .contact__button, .footer__content`,
  {
    interval: 250,
  }
);

// ******** MODAL*********

const showModal = (openButton, modalContent) => {
  const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent);

  if (openBtn && modalContainer) {
    openBtn.addEventListener("click", () => {
      modalContainer.classList.add("show-modal");
    });
  }

};

showModal("open-modal", "modal-container");




const closeBtn = document.querySelectorAll('.close-modal');

function closeModal() {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.classList.remove("show-modal");
}

closeBtn.forEach((c) => c.addEventListener("click", closeModal));