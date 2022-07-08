class CardProject extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("div");
    wrapper.classList = "card";
    wrapper.innerHTML = `
        <p>
          <a target="_blank" href=${this.getAttribute("url")}>
            <strong>${this.getAttribute("name")}</strong>
          </a>
        </p>
        <p>${this.getAttribute("langs")}</p>`;

    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "./public/styles/card-project.css");

    shadow.append(style, wrapper);
  }
}
customElements.define("card-project", CardProject);

window.onload = function() {
  const container_loader = document.getElementById("container-loader");
  container_loader.style.opacity = "0";
  container_loader.addEventListener("transitionend", () => {
    container_loader.remove();
  });

  let today = new Date();
  let date = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
  document.getElementById("date").innerHTML = `<p>Data atual: <br />${date}</p>`;
};
