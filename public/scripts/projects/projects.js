import ButtonProjects from "./ButtonProjects.js";
import CardProjects from "./CardProjects.js";

window.onload = () => {
  module.render();
};

let module = {
  renderProjetosPessoais: () => {
    const container = document.querySelector(".container");

    // #page-navbar-projects
    let nav = document.createElement("nav");
    nav.setAttribute("id", "page-navbar-projects");
    container.appendChild(nav);

    // #page-navbar-projects ul
    let ul = document.createElement("ul");
    nav.appendChild(ul);

    // #page-navbar-projects ul li
    let btn1 = new ButtonProjects("#pessoais", "Pessoais");
    ul.appendChild(btn1);

    // #page-navbar-projects ul li
    let btn2 = new ButtonProjects("#universidade", "Universidade");
    ul.appendChild(btn2);

    let divContainerCards = document.createElement("div");
    divContainerCards.setAttribute("id", "container-cards");
    container.appendChild(divContainerCards);

    let card1 = new CardProjects(
      "https://jjoaovitor7.github.io/Piano",
      "4",
      "Piano",
      "HTML + CSS + JS"
    );
    divContainerCards.appendChild(card1);

    let card2 = new CardProjects(
      "https://gist.github.com/jjoaovitor7/7920eef0160f6af7b6c24e698fad2e09",
      "5",
      "Instalador do StuntRally",
      "ShellScript"
    );
    divContainerCards.appendChild(card2);

    let card3 = new CardProjects(
      "https://jjoaovitor7.github.io/Bin2Dec",
      "6",
      "Bin2Dec",
      "HTML + CSS + JS"
    );
    divContainerCards.appendChild(card3);

    let card4 = new CardProjects(
      "https://jjoaovitor7.github.io/BorderRadiusPreviewer",
      "7",
      "Border Radius Previewer",
      "HTML + CSS + JS"
    );
    divContainerCards.appendChild(card4);

    let card5 = new CardProjects(
      "https://jjoaovitor7.github.io/Calculadora",
      "8",
      "Calculadora",
      "HTML + CSS + JS"
    );
    divContainerCards.appendChild(card5);

    let card6 = new CardProjects(
      "https://jjoaovitor7.github.io/calculadora-gorjeta",
      "9",
      "Calculadora de Gorjetas",
      "HTML + CSS + JS"
    );
    divContainerCards.appendChild(card6);

    let card7 = new CardProjects(
      "https://jjoaovitor7.github.io/MediaCalculator",
      "10",
      "Calculadora de Média",
      "HTML + CSS + JS"
    );

    divContainerCards.appendChild(card7);

    let card8 = new CardProjects(
      "https://github.com/jjoaovitor7/Celular",
      "11",
      "Celular",
      "PHP"
    );

    divContainerCards.appendChild(card8);
  },

  renderProjetosUniversidade: () => {
    const container = document.querySelector(".container");

    // #page-navbar-projects
    let nav = document.createElement("nav");
    nav.setAttribute("id", "page-navbar-projects");
    container.appendChild(nav);

    // #page-navbar-projects ul
    let ul = document.createElement("ul");
    nav.appendChild(ul);

    // #page-navbar-projects ul li
    let btn1 = new ButtonProjects("#pessoais", "Pessoais");
    ul.appendChild(btn1);

    // #page-navbar-projects ul li
    let btn2 = new ButtonProjects("#universidade", "Universidade");
    ul.appendChild(btn2);

    let divContainerCards = document.createElement("div");
    divContainerCards.setAttribute("id", "container-cards");
    container.appendChild(divContainerCards);

    let card1 = new CardProjects(
      "https://github.com/jjoaovitor7-unit/GraphCodeFlow-SR",
      "4",
      "Sistema de Recomendação",
      "Python3"
    );
    divContainerCards.appendChild(card1);

    let card2 = new CardProjects(
      "https://github.com/jjoaovitor7-unit/suite-laa",
      "5",
      "Suíte LAA",
      "HTML + CSS + JS"
    );
    divContainerCards.appendChild(card2);

    let card3 = new CardProjects(
      "https://github.com/jjoaovitor7-unit/AdapterDesignPattern",
      "6",
      "Design Pattern Adapter e Iterator",
      "PHP"
    );
    divContainerCards.appendChild(card3);

    let card4 = new CardProjects(
      "https://github.com/jjoaovitor7-unit/APIREST",
      "7",
      "API REST",
      "HTML + CSS + JS"
    );
    divContainerCards.appendChild(card4);

    let card5 = new CardProjects(
      "https://github.com/jjoaovitor7-unit/ObserverDesignPattern",
      "8",
      "Design Pattern Observer",
      "NodeJS"
    );
    divContainerCards.appendChild(card5);

    let card6 = new CardProjects(
      "https://github.com/jjoaovitor7-unit/LAA-Grafo",
      "9",
      "LAA-Grafo",
      "HTML + CSS + Python3"
    );
    divContainerCards.appendChild(card6);
  },

  render: () => {
    let currentPath = location.hash.substr(1);

    if (currentPath == "") {
      module.renderProjetosPessoais();
      let liAs = document.querySelectorAll("#page-navbar-projects ul li a");
      liAs[0].addEventListener("click", function (e) {
        location.hash = "#pessoais";
        document.location.reload();
      });

      liAs[1].addEventListener("click", function (e) {
        location.hash = "#universidade";
        document.location.reload();
      });
    }

    if (currentPath == "pessoais") {
      module.renderProjetosPessoais();
      let liAs = document.querySelectorAll("#page-navbar-projects ul li a");
      liAs[0].addEventListener("click", function (e) {
        location.hash = "#pessoais";
        document.location.reload();
      });

      liAs[1].addEventListener("click", function (e) {
        location.hash = "#universidade";
        document.location.reload();
      });
    }

    if (currentPath == "universidade") {
      module.renderProjetosUniversidade();
      let liAs = document.querySelectorAll("#page-navbar-projects ul li a");
      liAs[0].addEventListener("click", function (e) {
        location.hash = "#pessoais";
        document.location.reload();
      });

      liAs[1].addEventListener("click", function (e) {
        location.hash = "#universidade";
        document.location.reload();
      });
    }
  },
};
