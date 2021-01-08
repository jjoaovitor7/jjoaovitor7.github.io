const ex1Tabs1 = document.getElementById("ex1-tab-1");
const ex1Tabs2 = document.getElementById("ex1-tab-2");

function tabsAux1Hidden() {
  document.getElementById("ex1-tabs-2").setAttribute("hidden", true);
  document.getElementById("ex1-tabs-1").removeAttribute("hidden");
}

function tabsAux2Hidden() {
  document.getElementById("ex1-tabs-1").setAttribute("hidden", true);
  document.getElementById("ex1-tabs-2").removeAttribute("hidden");
}

ex1Tabs1.addEventListener("click", tabsAux1Hidden);
ex1Tabs2.addEventListener("click", tabsAux2Hidden);
