document.querySelectorAll(".collapseBtn").forEach(e => {
  e.onclick = () => {
    e.classList.toggle("active");
    e.children[1].classList.toggle("fa-angles-right");
    e.children[1].classList.toggle("fa-angles-down");
  }
})