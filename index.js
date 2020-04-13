const pang = document.getElementById("pangolin");
let isDragging = false;

pang.addEventListener("mouseover", newCursor);
function newCursor() {
  console.log("on target, ready to grab");
  pang.style.cursor = "grab";
}

pang.addEventListener("mousedown", startDrag);
function startDrag(e) {
  e.preventDefault();
  console.log("dragging activated");
  isDragging = true;
  const x = e.clientX;
  const y = e.clientY;

  let shiftX = x - pang.getBoundingClientRect().left;
  let shiftY = y - pang.getBoundingClientRect().top;

  window.addEventListener("mousemove", movePang);
  function movePang(e) {
    if (isDragging === true) {
      console.log("dragging in progressions");
      const x = e.clientX;
      const y = e.clientY;
      pang.style.transform = `translate(${x - shiftX}px, ${y - shiftY}px)`;
      pang.style.cursor = "grabbing";
    }
  }
}

window.addEventListener("mouseup", stopDrag);
function stopDrag(e) {
  if (isDragging === true) {
    console.log("draging over");
    isDragging = false;
    pang.style.cursor = "auto";
  }
}
