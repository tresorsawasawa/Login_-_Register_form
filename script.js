

const loginBtn = document.querySelectorAll(".login-btn"),
      registerBtn = document.querySelectorAll(".register-btn"),
      lossPassBtn = document.querySelectorAll(".lost-pass-btn"),
      box = document.querySelector(".box")

registerBtn.forEach((btn) =>{
    btn.addEventListener("click",() =>{
        box.classList.add("slide-active");
    });
})
