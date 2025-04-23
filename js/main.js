let goUpBtn = document.querySelector(".goUpBtn");
let showLoginForm = document.querySelectorAll(".showLoginForm");
let showRegisterForm = document.querySelector(".showRegisterForm");
let showRecoverForm = document.querySelector(".showRecoverForm");

showLoginForm.forEach(e => {
  e.onclick = () => {
    document.querySelector(".registerForm").classList.add("z-n1");
    document.querySelector(".recoveryForm").classList.add("z-n1");
  }
})

showRegisterForm.onclick = () => {
  document.querySelector(".recoveryForm").classList.add("z-n1");
  document.querySelector(".registerForm").classList.remove("z-n1");
}

showRecoverForm.onclick = () => {
  document.querySelector(".recoveryForm").classList.remove("z-n1");
  document.querySelector(".registerForm").classList.add("z-n1");
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    goUpBtn.classList.remove("d-none");
    goUpBtn.onclick = () => {
      window.scrollTo(0, 0);
    }
  } else {
    goUpBtn.classList.add("d-none");
  }
})