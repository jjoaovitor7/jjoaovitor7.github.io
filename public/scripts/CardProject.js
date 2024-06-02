class CardProject extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("div");
    wrapper.classList = "card block my-4";
    wrapper.innerHTML = `<p>
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