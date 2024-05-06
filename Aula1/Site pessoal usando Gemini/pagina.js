// Menu responsivo
const menu = document.querySelector('nav ul');
const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Animação de entrada na seção Introdução
const introducao = document.querySelector('.introducao');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    introducao.classList.add('animate');
  } else {
    introducao.classList.remove('animate');
  }
});

// Animação de rolagem suave para as seções
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('nav a');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (event) => {
    event.preventDefault();

    const targetSection = document.querySelector(links[i].getAttribute('href'));
    const targetPosition = targetSection.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
}
