class CardProject extends HTMLElement {
  constructor() {
    super();

    const url = this.getAttribute("url");
    const name = this.getAttribute("name");
    const langs = this.getAttribute("langs");

    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.classList = "card";

    wrapper.innerHTML = `
      <p>
        <a
          target="_blank"
          href=${url}
        >
        <b>${name}</b>
        </a>
      </p>
      <p>${langs}</p>`;

    const style = document.createElement("style");
    style.textContent = `
      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f1f1f1 !important;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 175px;
        min-height: 100px;
        text-align: center;
        margin: 10px;
      }

      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      .card p {
        margin: 5px;
        font-family: "Times New Roman", Times, serif;
        font-size: 17px;
      }

      .card a {
        text-decoration: none;
      }
      `;

    shadow.append(style, wrapper);
  }
}

customElements.define("card-project", CardProject);
