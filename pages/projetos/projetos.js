window.onload = () => {
  module.render();
};

let module = {
  renderProjetosPessoais: () => {
    const container = document.querySelector(".container");

    // #page-navbar-projects
    let navProjects = document.createElement("nav");
    navProjects.setAttribute("id", "page-navbar-projects");
    container.appendChild(navProjects);

    // #page-navbar-projects ul
    let ulNavProjects = document.createElement("ul");
    navProjects.appendChild(ulNavProjects);

    let liNavProjectsPessoais = document.createElement("li");
    let aNavProjectsPessoais = document.createElement("a");
    aNavProjectsPessoais.href = "#pessoais";
    aNavProjectsPessoais.innerHTML = "Pessoais";
    liNavProjectsPessoais.appendChild(aNavProjectsPessoais);
    ulNavProjects.appendChild(liNavProjectsPessoais);

    let liNavProjectsUniversidade = document.createElement("li");
    let aNavProjectsUniversidade = document.createElement("a");
    aNavProjectsUniversidade.href = "#universidade";
    aNavProjectsUniversidade.innerHTML = "Universidade";
    liNavProjectsUniversidade.appendChild(aNavProjectsUniversidade);
    ulNavProjects.appendChild(liNavProjectsUniversidade);

    divContainerCards = document.createElement("div");
    divContainerCards.setAttribute("id", "container-cards");
    container.appendChild(divContainerCards);

    card1 = document.createElement("div");
    card1.classList = "card";
    card1.innerHTML =
      '<p><a target="_blank" href="https://jjoaovitor7.github.io/Piano" tabindex="4"> <b>Piano</b> </a> </p> <p>HTML + CSS + JS</p>';
    divContainerCards.appendChild(card1);

    card2 = document.createElement("div");
    card2.classList = "card";
    card2.innerHTML =
      '<p> <a target="_blank" href="https://gist.github.com/jjoaovitor7/7920eef0160f6af7b6c24e698fad2e09" tabindex="5"> <b>Instalador do StuntRally</b> </a> </p> <p>ShellScript</p>';
    divContainerCards.appendChild(card2);

    card3 = document.createElement("div");
    card3.classList = "card";
    card3.innerHTML =
      '<p class="notranslate"> <a target="_blank" href="https://jjoaovitor7.github.io/Bin2Dec" tabindex="6"> <b>Bin2Dec</b> </a> </p> <p>HTML + CSS + JS</p>';
    divContainerCards.appendChild(card3);

    card4 = document.createElement("div");
    card4.classList = "card";
    card4.innerHTML =
      '<p class="notranslate"> <a target="_blank" href="https://jjoaovitor7.github.io/BorderRadiusPreviewer" tabindex="7"> <b>Border Radius Previewer</b> </a> </p> <p>HTML + CSS + JS</p>';
    divContainerCards.appendChild(card4);

    card5 = document.createElement("div");
    card5.classList = "card";
    card5.innerHTML =
      '<p> <a target="_blank" href="https://jjoaovitor7.github.io/Calculadora" tabindex="8"> <b>Calculadora</b> </a> </p> <p>HTML + CSS + JS</p>';
    divContainerCards.appendChild(card5);

    card6 = document.createElement("div");
    card6.classList = "card";
    card6.innerHTML =
      '<p> <a target="_blank" href="https://jjoaovitor7.github.io/calculadora-gorjeta" tabindex="9"> <b>Calculadora de Gorjetas</b></a> </p> <p>HTML + CSS + JS</p>';
    divContainerCards.appendChild(card6);

    card7 = document.createElement("div");
    card7.classList = "card";
    card7.innerHTML =
      '<p> <a target="_blank" href="https://jjoaovitor7.github.io/MediaCalculator" tabindex="10"> <b>Calculadora de Média</b></a> </p> <p>HTML + CSS + JS</p>';
    divContainerCards.appendChild(card7);

    card8 = document.createElement("div");
    card8.classList = "card";
    card8.innerHTML =
      '<p> <a target="_blank" href="https://github.com/jjoaovitor7/Celular" tabindex="11"> <b>Celular</b></a> </p> <p>PHP</p>';
    divContainerCards.appendChild(card8);
  },

  renderProjetosUniversidade: () => {
    const container = document.querySelector(".container");

    // #page-navbar-projects
    let navProjects = document.createElement("nav");
    navProjects.setAttribute("id", "page-navbar-projects");
    container.appendChild(navProjects);

    // #page-navbar-projects ul
    let ulNavProjects = document.createElement("ul");
    navProjects.appendChild(ulNavProjects);

    let liNavProjectsPessoais = document.createElement("li");
    let aNavProjectsPessoais = document.createElement("a");
    aNavProjectsPessoais.href = "#pessoais";
    aNavProjectsPessoais.innerHTML = "Pessoais";
    liNavProjectsPessoais.appendChild(aNavProjectsPessoais);
    ulNavProjects.appendChild(liNavProjectsPessoais);

    let liNavProjectsUniversidade = document.createElement("li");
    let aNavProjectsUniversidade = document.createElement("a");
    aNavProjectsUniversidade.href = "#universidade";
    aNavProjectsUniversidade.innerHTML = "Universidade";
    liNavProjectsUniversidade.appendChild(aNavProjectsUniversidade);
    ulNavProjects.appendChild(liNavProjectsUniversidade);

    divContainerCards = document.createElement("div");
    divContainerCards.setAttribute("id", "container-cards");
    container.appendChild(divContainerCards);

    card1 = document.createElement("div");
    card1.classList = "card";
    card1.innerHTML =
      '<p><a target="_blank" href="https://github.com/jjoaovitor7-unit/GraphCodeFlow-SR" tabindex="4"> <b>Sistema de Recomendação</b> </a> </p> <p>Python3</p>';
    divContainerCards.appendChild(card1);

    card2 = document.createElement("div");
    card2.classList = "card";
    card2.innerHTML =
      '<p> <a target="_blank" href="https://github.com/jjoaovitor7-unit/suite-laa" tabindex="5"> <b>Suíte LAA</b> </a> </p> <p>HTML + CSS + JS</p>';
    divContainerCards.appendChild(card2);

    card3 = document.createElement("div");
    card3.classList = "card";
    card3.innerHTML =
      '<p class="notranslate"> <a target="_blank" href="https://github.com/jjoaovitor7-unit/AdapterDesignPattern" tabindex="6"> <b>Design Pattern Adapter e Iterator</b> </a> </p> <p>PHP</p>';
    divContainerCards.appendChild(card3);

    card4 = document.createElement("div");
    card4.classList = "card";
    card4.innerHTML =
      '<p class="notranslate"> <a target="_blank" href="https://github.com/jjoaovitor7-unit/APIREST" tabindex="7"> <b>API REST</b> </a> </p> <p>HTML + CSS + JS + JQuery</p>';
    divContainerCards.appendChild(card4);

    card5 = document.createElement("div");
    card5.classList = "card";
    card5.innerHTML =
      '<p> <a target="_blank" href="https://github.com/jjoaovitor7-unit/ObserverDesignPattern" tabindex="8"> <b>Design Pattern Observer</b> </a> </p> <p>NodeJS</p>';
    divContainerCards.appendChild(card5);

    card6 = document.createElement("div");
    card6.classList = "card";
    card6.innerHTML =
      '<p> <a target="_blank" href="https://github.com/jjoaovitor7-unit/LAA-Grafo" tabindex="9"> <b>LAA-Grafo</b></a> </p> <p>HTML + CSS + Python3</p>';
    divContainerCards.appendChild(card6);
  },

  render: () => {
    let currentPath = location.hash.substr(1);

    if (currentPath == "") {
      module.renderProjetosPessoais();
      liAs = document.querySelectorAll("#page-navbar-projects ul li a");
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
      liAs = document.querySelectorAll("#page-navbar-projects ul li a");
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
      liAs = document.querySelectorAll("#page-navbar-projects ul li a");
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
