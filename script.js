
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed", {
    strings: ["Software Developer", "Designer", "Freelancer"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    smartBackspace: false, // disable to avoid skipping first string
    showCursor: true,
    cursorChar: "|"
  });
});

let hamburger = document.querySelector(".hamburger");
let navUl = document.querySelector("nav ul");
let nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  navUl.classList.toggle("active");
  nav.classList.toggle("pad");


  let hamImg = document.querySelector(".hamburger img");
  let src = hamImg.src;

  if (src.includes("hamburger.svg")) {
  hamImg.classList.toggle("anim");
    hamImg.src = src.replace("hamburger.svg", "close.png");
  

  } else if (src.includes("close.png")) {
  hamImg.classList.toggle("anim");
    hamImg.src = src.replace("close.png", "hamburger.svg");
  }


});

document.querySelector("nav ul,li").addEventListener("click", () => {

  navUl.classList.remove("active");
  nav.classList.remove("pad");


})


// Close menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideMenu = navUl.contains(event.target) || hamburger.contains(event.target);

  if (!isClickInsideMenu) {
    navUl.classList.remove("active");
    nav.classList.remove("pad");
  }
});

const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
window.location.href = "submit.html";
    } else {
      alert("❌ Failed to send message.");
    }
  });