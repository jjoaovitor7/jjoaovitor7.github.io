const _state = {
  "click": 0
};

function toggleActive(cond, el) {
  if (cond) {
    el.classList.add("active");
    // if (!_state.click)
    //   document.querySelector(`a[href="#${el.id}"`).classList.add("active");
  } else {
    el.classList.remove("active");
    // if (!_state.click)
    //   document.querySelector(`a[href="#${el.id}"`).classList.remove("active");
  }

  if (!_state.click) {
    const navlinkActive = document.querySelectorAll(`#nav-main .active`);
    if (navlinkActive.length > 0) {
      navlinkActive.forEach((el, idx) => {
        if (idx != navlinkActive.length - 1) {
          el.classList.remove("active");
        }
      });
    }
  }
}

window.onload = function () {
  const container_loader = document.getElementById("container-loader");
  container_loader.style.opacity = "0";
  container_loader.addEventListener("transitionend", () => {
    container_loader.remove();
  });

  particlesJS.load('main', '../public/particles.json', function () {
    console.log('%ccallback - particles.js config loaded', 'color: #4af626;');
  });

  document.addEventListener("click", (e) => {
    _state.click = 1;
  });

  document.addEventListener("scroll", async (e) => {
    const pageTop = window.scrollY || document.documentElement.scrollTop;

    if (window.innerWidth > 768) {
      const fadings = document.querySelectorAll(".fading");

      for (let i = 0; i < fadings.length; i++) {
        let fading = fadings[i];

        if (fading.getBoundingClientRect().bottom - fading.clientHeight < pageTop + 256) {
          toggleActive(1, fading)
        } else {
          toggleActive(0, fading)
        }

        // if (!_state.click) {
        //   const navlinkActive = document.querySelectorAll(`#nav-main .active`);
        //   if (navlinkActive.length > 0) {
        //     navlinkActive.forEach((el, idx) => {
        //       if (idx != navlinkActive.length - 1) {
        //         el.classList.remove("active");
        //       }
        //     });
        //   }
        // }
      }
    }

    _state.click = 0;
  });


  const blocks = document.querySelectorAll("#about .block");
  blocks.forEach((i, idx) => {
    setTimeout((_) => {
      i.classList.add("active");
    }, idx * 800 + 512)
  });

  let navlinkActive = document.querySelectorAll(`#nav-main .nav-link`);
  navlinkActive.forEach((i) => {
    i.addEventListener("click", (e) => {
      e.preventDefault();

      document.getElementById(e.target.href.split("#")[1])
        .scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        });
      // Array.from(navlinkActive)
      //   .map((el) => el.classList.remove("active"));
      // e.target.classList.add("active");
    })
  })
};
