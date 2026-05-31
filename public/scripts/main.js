const _hideLoader = () => {
  const loader = document.getElementById("container-loader");
  if (!loader) {
    return;
  }
  loader.style.opacity = "0";
  loader.addEventListener("transitionend", () => {
    loader.remove()
  }, { once: true });
};

const setParticleJS = () => {
  if (typeof particlesJS === "undefined") {
    return;
  }
  particlesJS.load('main', '../public/particles.json', function () {
    console.log('%ccallback - particles.js config loaded', 'color: #4af626;');
  });
};

const initNavHighlight = () => {
  const navLinks = document.querySelectorAll("#nav-main .nav-link");

  const highlight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
        })
      }
    })
  }, { rootMargin: "-20% 0px -75% 0px" });

  navLinks.forEach(link => {
    const section = document.getElementById(link.getAttribute("href")?.slice(1));

    if (section) {
      highlight.observe(section);
    }
  });
};

const initFading = () => {
  const fadings = document.querySelectorAll(".fading");
  if (!fadings.length) {
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      })
    },
    { threshold: 0.08 }
  );

  fadings.forEach(el => {
    observer.observe(el)
  });
};

const initAboutBlocks = () => {
  document.querySelectorAll("#about .block").forEach((block, idx) => {
    setTimeout(() => {
      block.classList.add("active")
    }, idx * 800 + 512);
  });
};

window.addEventListener("load", () => {
  _hideLoader();
  setParticleJS();
  initNavHighlight();
  initFading();
  initAboutBlocks();
  window.addEventListener("resize", setParticleJS);
});
