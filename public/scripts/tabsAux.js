const ex1Tabs1 = document.getElementById("ex1-tab-1");
const ex1Tabs2 = document.getElementById("ex1-tab-2");
const ex1Tabs3 = document.getElementById("ex1-tab-3");
const ex1Tabs4 = document.getElementById("ex1-tab-4");

function tabsAux1Hidden() {
  document.getElementById("ex1-tabs-2").setAttribute("hidden", true);
  document.getElementById("ex1-tabs-1").removeAttribute("hidden");
  document.getElementById("ex1-tabs-3").removeAttribute("hidden");
  document.getElementById("ex1-tabs-4").removeAttribute("hidden");
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

ex1Tabs1.addEventListener("click", tabsAux1Hidden);
ex1Tabs2.addEventListener("click", tabsAux2Hidden);
ex1Tabs3.addEventListener("click", tabsAux3Hidden);
ex1Tabs4.addEventListener("click", tabsAux4Hidden);
