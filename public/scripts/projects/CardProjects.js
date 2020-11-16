class CardProjects {
  constructor(URL, INDEX, NAME, LANGS) {
    let div = document.createElement("div");
    div.classList = "card";
    div.innerHTML = `<p><a target="_blank" href="${URL}" tabindex="${INDEX}"> <b>${NAME}</b> </a> </p> <p>${LANGS}</p>`;
    return div;
  }
}

export default CardProjects;
