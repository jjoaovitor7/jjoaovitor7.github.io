class CardTool extends HTMLElement {
  constructor() {
    super();

    const category = this.getAttribute("category");
    const name = this.getAttribute("name");
    const url = this.getAttribute("url");

    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.classList = "card";

    wrapper.innerHTML = `
    <p><b>${category}</b></p>
    <p>
      <a target="_blank" href=${url} tabindex="4">
      ${name}
      </a>
    </p>`;

    const style = document.createElement("style");
    style.textContent = `
        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          width: 175px;
          height: 100px;
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

customElements.define("card-tool", CardTool);
