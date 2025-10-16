document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menuOverlay = document.querySelector('.menu-overlay');
  const body = document.body;
  
  if (menuBtn && menuOverlay) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      menuOverlay.classList.toggle('active');
      body.classList.toggle('menu-open');
    });
    
    const navLinks = document.querySelectorAll('.menu-nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });
    
    menuOverlay.addEventListener('click', (e) => {
      if (e.target === menuOverlay) {
        menuBtn.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  }
  
  const exploreBtn = document.querySelector('.explore-btn');
  const cteSection = document.querySelector('.cte-section');
  
  if (exploreBtn && cteSection) {
    exploreBtn.addEventListener('click', () => {
      cteSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const desktopNavLinks = document.querySelectorAll('.nav-link[href^="#"]');
  desktopNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  const desktopNav = document.querySelector('.desktop-nav');
  if (desktopNav) {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        desktopNav.style.background = 'rgba(0, 0, 0, 0.9)';
        desktopNav.style.backdropFilter = 'blur(25px)';
        desktopNav.style.borderColor = 'rgba(250, 208, 44, 0.6)';
      } else {
        desktopNav.style.background = 'rgba(0, 0, 0, 0.8)';
        desktopNav.style.backdropFilter = 'blur(20px)';
        desktopNav.style.borderColor = 'rgba(250, 208, 44, 0.4)';
      }
      
      lastScrollY = currentScrollY;
    });
  }

  const navTitle = document.querySelector(".nav-title");

if (navTitle) {
  navTitle.addEventListener("click", () => {
    window.location.href = "/index.html";
  });
}

const menuTitle = document.querySelector(".menu-title");

if (menuTitle) {
  menuTitle.addEventListener("click", () => {
    window.location.href = "/index.html";
  });
}

const navLink = document.querySelector(".nav-link-teacher");
const footerSection = document.querySelector(".footer-section");

if (navLink) {
  navLink.addEventListener("click", () => {
     footerSection.scrollIntoView(
      { behavior: 'smooth' }
     );
  });
}

const menuNavLink = document.querySelector(".menu-nav-link-teacher");

if (menuNavLink) {
  menuNavLink.addEventListener("click", () => {
     footerSection.scrollIntoView(
      { behavior: 'smooth' }
     );
  });
}

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
});