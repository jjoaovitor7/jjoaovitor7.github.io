class ButtonProjects {
  constructor(HASH, TEXT) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = `${HASH}`;
    a.innerHTML = `${TEXT}`;
    li.appendChild(a);
    return li;
  }
}

export default ButtonProjects;
