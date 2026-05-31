class CardProject extends HTMLElement {
  constructor() {
    super();
    const shadow  = this.attachShadow({ mode: "open" });
    const name    = this.getAttribute("name")    || "";
    const url     = this.getAttribute("url")     || "#";
    const preview = this.getAttribute("preview") || "";
    const stack   = this.getAttribute("stack")   || "";

    shadow.innerHTML = `
      <link rel="stylesheet" href="./public/styles/card-project.css">
      <div class="card">
        <a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${name}">
          <figure class="card__figure">
            <img class="card__img" src="${preview}" alt="${name}">
          </figure>
          <figcaption class="card__caption">
            <strong class="card__name">${name}</strong>
            <span class="card__stack">${stack}</span>
          </figcaption>
        </a>
      </div>`;

    shadow.querySelector("img").addEventListener("error", function () {
      this.style.display = "none";
    }, { once: true });
  }
}

customElements.define("card-project", CardProject);
