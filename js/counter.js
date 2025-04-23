let counter = document.querySelector(".counter");
let counts = document.querySelectorAll(".count h2 span");
let started = false;

window.onscroll = () => {
  if (window.scrollY >= counter.getBoundingClientRect().top + 2000) {
    if (!started) {
      fillCounter();
    }
    started = true;
  }
}

function fillCounter() {
  counts.forEach(e => {
    let x = setInterval(() => {
      e.textContent = +e.textContent + 1;
      if (+e.textContent === +e.getAttribute("data-target")) {
        clearInterval(x)
      }
    }, 2500 / +e.getAttribute("data-target"));
  })
}