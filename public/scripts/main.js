class CardProject extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("div");
    wrapper.classList = "card block my-4";
    wrapper.innerHTML = `
        <p>
          <a target="_blank" href=${this.getAttribute("url")}>
            <strong>${this.getAttribute("name")}</strong>
          </a>
        </p>
        <p>${this.getAttribute("stack")}</p>`;

    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "./public/styles/card-project.css");

    shadow.append(style, wrapper);
  }
}
customElements.define("card-project", CardProject);

window.onload = function () {
  const container_loader = document.getElementById("container-loader");
  container_loader.style.opacity = "0";
  container_loader.addEventListener("transitionend", () => {
    container_loader.remove();
  });

  VANTA.WAVES({
    el: "body",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 256.00,
    minWidth: 256.00,
    scale: 0.80,
    scaleMobile: 0.42,
    shininess: 0.00,
    waveHeight: 42.00,
    waveSpeed: 0.16,
    zoom: 0.32,
    color: "#141617"
  });

  const _state = {
    "click": 0
  };

  document.addEventListener("click", (e) => {
    _state.click = 1;
  });

  document.addEventListener("scroll", (e) => {
    if (window.innerWidth > 768) {
      const fadings = document.querySelectorAll(".fading");

      const pageTop = window.scrollY || document.documentElement.scrollTop;

      for (let i = 0; i < fadings.length; i++) {
        let fading = fadings[i];

        if (fading.getBoundingClientRect().bottom - fading.clientHeight + 128 < pageTop + 256) {
          fading.classList.add("active");
          !_state.click
            ? document.querySelector(`a[href="#${fading.id}"`).classList.add("active")
            : null;
        } else {
          fading.classList.remove("active");
          !_state.click
            ? document.querySelector(`a[href="#${fading.id}"`).classList.remove("active")
            : null;
        }
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

      const options = {
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      };

      document.getElementById(e.target.href.split("#")[1]).scrollIntoView(options);

      window.scroll(window.scrollY, window.scrollY - 16);

      Array.from(navlinkActive).forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
    })
  })
};
