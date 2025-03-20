particlesJS("particles", {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5, "random": true },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
      "modes": { "repulse": { "distance": 100, "duration": 0.4 } }
    },
    "retina_detect": true
  });

  // Typing Animation
  const roles = ["Web Developer", "Data Scientist", "Data Analyst"];
  let roleIndex = 0;
  let charIndex = 0;
  const roleElement = document.querySelector('.role');
  function type() {
    if (charIndex < roles[roleIndex].length) {
      roleElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }
  function erase() {
    if (charIndex > 0) {
      roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 500);
    }
  }
  type();

  // 3D Tilt Effect
  VanillaTilt.init(document.querySelector(".profile-img"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
  });

  // Scroll Animation
  const sections = document.querySelectorAll('.about-me');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(section => observer.observe(section));

  // Sticky Nav Highlight
  const navLinks = document.querySelectorAll('nav a');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollSections = document.querySelectorAll('.container, section');
    scrollSections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href.startsWith('#') && href.substring(1) === current) {
        link.classList.add('active');
      }
    });
  });