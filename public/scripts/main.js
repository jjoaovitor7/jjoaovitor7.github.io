window.onload = function () {
  document.querySelector(".loader").style.display = "none";
};

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
          box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          width: 17.5rem;
          height: 12rem;
          text-align: center;
          margin: .5rem;
        }
  
        .card:hover {
          box-shadow: 0 .8rem 1.6rem 0 rgba(0, 0, 0, 0.2);
        }
  
        .card p {
          margin: .5rem;
          font-family: "Times New Roman", Times, serif;
          font-size: 1.6rem;
        }
  
        .card a {
          text-decoration: none;
        }
        `;

    shadow.append(style, wrapper);
  }
}

customElements.define("card-tool", CardTool);
customElements.define("card-project", CardProject);
