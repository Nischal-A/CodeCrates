// Select the header and dynamically create the hero cover
const header = document.querySelector('header');
const heroCover = document.createElement('div');
heroCover.className = 'hero-cover';
document.body.appendChild(heroCover);

// Listen for scroll events
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Fade navbar background and adjust styles on scroll
  if (scrollPosition > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Slide up the hero cover when scrolling past the hero section
  if (scrollPosition > window.innerHeight - 50) {
    heroCover.classList.add('hidden');
  } else {
    heroCover.classList.remove('hidden');
  }
});
