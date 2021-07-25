const tabPessoais = document.getElementById("ex1-tab-1");
const tabUniversidade = document.getElementById("ex1-tab-2");
const tabPage1 = document.getElementById("ex1-tab-3");
const tabPage2 = document.getElementById("ex1-tab-4");

function tabsAux1Hidden() {
  document.getElementById("ex1-tabs-2").setAttribute("hidden", true);
  document.getElementById("ex1-tabs-1").removeAttribute("hidden");
  document.getElementById("ex1-tabs-3").removeAttribute("hidden");
  document.getElementById("ex1-tabs-4").setAttribute("hidden", true);
  document.getElementById("ex1-tabs-3").classList.add("active");
  document.getElementById("ex1-tabs-4").classList.remove("active");
}

function tabsAux2Hidden() {
  document.getElementById("ex1-tabs-1").setAttribute("hidden", true);
  document.getElementById("ex1-tabs-2").removeAttribute("hidden");
  document.getElementById("ex1-tabs-3").setAttribute("hidden", true);
  document.getElementById("ex1-tabs-4").setAttribute("hidden", true);
}

function tabsAux3Hidden() {
  document.getElementById("ex1-tabs-4").setAttribute("hidden", true);
  document.getElementById("ex1-tabs-3").removeAttribute("hidden");
}

function tabsAux4Hidden() {
  document.getElementById("ex1-tabs-3").setAttribute("hidden", true);
  document.getElementById("ex1-tabs-4").removeAttribute("hidden");
}

tabPessoais.addEventListener("click", tabsAux1Hidden);
tabUniversidade.addEventListener("click", tabsAux2Hidden);
tabPage1.addEventListener("click", tabsAux3Hidden);
tabPage2.addEventListener("click", tabsAux4Hidden);
