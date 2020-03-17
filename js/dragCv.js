console.log("test visablity");
dragElement(document.getElementById("drag"));

function dragElement(idDoc) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(idDoc.id + "header")) {
    document.getElementById(idDoc.id + "header").onmousedown = dragMouseDown;
  } else {
    idDoc.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    idDoc.style.top = (idDoc.offsetTop - pos2) + "px";
    idDoc.style.left = (idDoc.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}