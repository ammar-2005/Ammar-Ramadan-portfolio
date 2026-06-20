// ^ Write your JavaScript code here

// dark & light mood
const themeToggleButton = document.getElementById('theme-toggle-button');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    htmlElement.classList.add('dark');
    themeToggleButton.setAttribute('aria-pressed', 'true');
} else if (savedTheme === 'light') {
    htmlElement.classList.remove('dark');
    themeToggleButton.setAttribute('aria-pressed', 'false');
} else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
}

themeToggleButton.addEventListener('click', () => {

    htmlElement.classList.toggle('dark');
  
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.setAttribute('aria-pressed', 'true');
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.setAttribute('aria-pressed', 'false');
    }
});

//  active with scrool

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a'); 


window.addEventListener('scroll', () => {
   
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
            currentSectionId = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});

// scroll-to-top
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        scrollToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        scrollToTopBtn.classList.remove('opacity-100', 'visible');
        scrollToTopBtn.classList.add('opacity-0', 'invisible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});


// portfolio filter
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.portfolio-filter');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedFilter = button.getAttribute('data-filter');
      filterButtons.forEach(btn => {
        btn.classList.remove(
          'active',
          'bg-linear-to-r',
          'from-primary',
          'to-secondary',
          'text-white',
          'hover:shadow-lg',
          'hover:shadow-primary/50'
        );
        btn.classList.add(
          'bg-white',
          'dark:bg-slate-800',
          'text-slate-600',
          'dark:text-slate-300',
          'border',
          'border-slate-300',
          'dark:border-slate-700'
        );
        btn.setAttribute('aria-pressed', 'false');
      });

      button.classList.add(
        'active',
        'bg-linear-to-r',
        'from-primary',
        'to-secondary',
        'text-white',
        'hover:shadow-lg',
        'hover:shadow-primary/50'
      );
      button.classList.remove(
        'bg-white',
        'dark:bg-slate-800',
        'text-slate-600',
        'dark:text-slate-300',
        'border',
        'border-slate-300',
        'dark:border-slate-700'
      );
      button.setAttribute('aria-pressed', 'true');

      // فلترة الكروت
      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (selectedFilter === 'all' || itemCategory === selectedFilter) {
          item.classList.remove('hidden');
          item.style.display = '';
        } else {
          item.classList.add('hidden');
          item.style.display = 'none';
        }
      });
    });
  });
});
// settings-toggle
const settingsToggleBtn = document.getElementById('settings-toggle');
const closeSettingsBtn = document.getElementById('close-settings');
const settingsSidebar = document.getElementById('settings-sidebar');


settingsToggleBtn.addEventListener('click', () => {

    settingsSidebar.classList.remove('translate-x-full');
    settingsToggleBtn.setAttribute('aria-expanded', 'true');
    settingsSidebar.setAttribute('aria-hidden', 'false');
});

closeSettingsBtn.addEventListener('click', () => {
    settingsSidebar.classList.add('translate-x-full');
    settingsToggleBtn.setAttribute('aria-expanded', 'false');
    settingsSidebar.setAttribute('aria-hidden', 'true');
});

document.addEventListener('click', (event) => {
    if (!settingsSidebar.contains(event.target) && !settingsToggleBtn.contains(event.target)) {
        if (!settingsSidebar.classList.contains('translate-x-full')) {
            settingsSidebar.classList.add('translate-x-full');
            settingsToggleBtn.setAttribute('aria-expanded', 'false');
            settingsSidebar.setAttribute('aria-hidden', 'true');
        }
    }
});
//  cheaing the font
const fontButtons = document.querySelectorAll('.font-option');
const rootElement = document.documentElement;

const savedFont = localStorage.getItem('site-font');
if (savedFont) {
    applyFont(savedFont);
}

fontButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedFont = button.getAttribute('data-font');
        
        applyFont(selectedFont);
        localStorage.setItem('site-font', selectedFont);
    });
});
function applyFont(fontName) {
   
    rootElement.classList.remove('font-alexandria', 'font-tajawal', 'font-cairo');
    rootElement.classList.add(`font-${fontName}`);
    fontButtons.forEach(btn => {
        if (btn.getAttribute('data-font') === fontName) {
            btn.classList.add('active');
            btn.setAttribute('aria-checked', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-checked', 'false');
        }
    });
}
// reset-settings
const resetBtn = document.getElementById('reset-settings');
if(resetBtn) {
    resetBtn.addEventListener('click', () => {
        localStorage.removeItem('site-font');
        rootElement.classList.remove('font-alexandria', 'font-tajawal', 'font-cairo');
        
        applyFont('tajawal'); 
    });
}


//   testimonials

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('testimonials-carousel');
  const cards = document.querySelectorAll('.testimonial-card');
  const nextBtn = document.getElementById('next-testimonial');
  const prevBtn = document.getElementById('prev-testimonial');
  const indicators = document.querySelectorAll('.carousel-indicator');

  let currentIndex = 0;
  const totalItems = cards.length;
  function getVisibleCardsCount() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;  
    return 1;                               
  }
  function updateCarousel() {
    if (!carousel) return;

    const visibleCards = getVisibleCardsCount();
    const maxIndex = Math.max(0, totalItems - visibleCards);
    
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    const cardWidth = cards[0].getBoundingClientRect().width;
    const moveDistance = currentIndex * cardWidth;
    carousel.style.transform = `translateX(${moveDistance}px)`;
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add('bg-accent');
        indicator.classList.remove('bg-slate-400', 'dark:bg-slate-600');
        indicator.setAttribute('aria-selected', 'true');
      } else {
        indicator.classList.remove('bg-accent');
        indicator.classList.add('bg-slate-400', 'dark:bg-slate-600');
        indicator.setAttribute('aria-selected', 'false');
      }
    });
    if (prevBtn && nextBtn) {
      if (currentIndex === 0) {
        prevBtn.classList.add('opacity-50', 'pointer-events-none');
      } else {
        prevBtn.classList.remove('opacity-50', 'pointer-events-none');
      }

      if (currentIndex >= maxIndex) {
        nextBtn.classList.add('opacity-50', 'pointer-events-none');
      } else {
        nextBtn.classList.remove('opacity-50', 'pointer-events-none');
      }
    }
  }
  nextBtn?.addEventListener('click', () => {
    const visibleCards = getVisibleCardsCount();
    const maxIndex = Math.max(0, totalItems - visibleCards);
    
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn?.addEventListener('click', () => {
    const visibleCards = getVisibleCardsCount();
    const maxIndex = Math.max(0, totalItems - visibleCards);

    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex; 
    }
    updateCarousel();
  });

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
      currentIndex = parseInt(e.target.getAttribute('data-index'));
      updateCarousel();
    });
  });

  window.addEventListener('resize', updateCarousel);

  
  if (totalItems > 0) {
    updateCarousel();
  }
});

// colors-grid
document.addEventListener('DOMContentLoaded', () => {
  const colorsGrid = document.getElementById('theme-colors-grid');
  const rootElement = document.documentElement;

  const colorThemes = [
    { name: 'purple', primary: '#8b5cf6', secondary: '#a855f7', accent: '#c084fc' },
    { name: 'pinkOrange', primary: '#ec4899', secondary: '#f97316', accent: '#fb923c' },
    { name: 'green', primary: '#079F6F', secondary: '#0bbf87', accent: '#0bbf87' },
    { name: 'blue', primary: '#239AE6', secondary: '#5cb6ed', accent: '#5cb6ed' },
    { name: 'red', primary: '#F24152', secondary: '#F24152', accent: '#F24152' },
    { name: 'orange', primary: '#EF790B', secondary: '#EF790B', accent: '#EF790B' }
  ];

  function applyTheme(primary, secondary, accent) {
    rootElement.style.setProperty('--primary', primary);
    rootElement.style.setProperty('--secondary', secondary);
    rootElement.style.setProperty('--accent', accent);

    rootElement.style.setProperty('--color-primary', primary);
    rootElement.style.setProperty('--color-secondary', secondary);
    rootElement.style.setProperty('--color-accent', accent);

    rootElement.style.setProperty('--primary-color', primary);
    rootElement.style.setProperty('--secondary-color', secondary);
    rootElement.style.setProperty('--accent-color', accent);
  }

  function updateActiveButton(activeName) {
    const buttons = colorsGrid.querySelectorAll('.color-option');
    buttons.forEach(btn => {
      if (btn.getAttribute('data-theme') === activeName) {
        btn.classList.add('scale-110', 'ring-2', 'ring-offset-2', 'ring-slate-100', 'dark:ring-offset-slate-900');
      } else {
        btn.classList.remove('scale-110', 'ring-2', 'ring-offset-2', 'ring-slate-100');
      }
    });
  }
  if (colorsGrid) {
    colorsGrid.innerHTML = '';

    colorThemes.forEach(theme => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `color-option h-10 w-10 mx-auto rounded-full cursor-pointer flex items-center justify-center text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm relative`;
      button.style.background = `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`;
      button.setAttribute('data-theme', theme.name);
      button.setAttribute('aria-label', `تفعيل الثيم ${theme.name}`);

      button.addEventListener('click', () => {
        applyTheme(theme.primary, theme.secondary, theme.accent);
        updateActiveButton(theme.name);
        localStorage.setItem('selected-theme-colors', JSON.stringify(theme));
      });

      colorsGrid.appendChild(button);
    });
  }

  const savedThemeData = localStorage.getItem('selected-theme-colors');
  if (savedThemeData) {
    const savedTheme = JSON.parse(savedThemeData);
    applyTheme(savedTheme.primary, savedTheme.secondary, savedTheme.accent);
    setTimeout(() => updateActiveButton(savedTheme.name), 20);
  } else {
    setTimeout(() => updateActiveButton('indigo'), 20);
  }

  const resetBtn = document.getElementById('reset-settings');
  resetBtn?.addEventListener('click', () => {
    localStorage.removeItem('selected-theme-colors');
    ['--primary', '--secondary', '--accent', '--color-primary', '--color-secondary', '--color-accent', '--primary-color', '--secondary-color', '--accent-color']
      .forEach(varName => rootElement.style.removeProperty(varName));
    updateActiveButton('indigo');
  });
});