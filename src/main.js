import "./style.css";

// mobile menu toggle
const mybtn = document.getElementById("mybtn");
const mymenu = document.getElementById("mymenu");

mybtn.addEventListener("click", () => {
  if (mymenu.style.right === "0px") {
    mymenu.style.right = "-100%";
  } else {
    mymenu.style.right = "0px";
  }
});

// sticky navbar on scroll && glassy effect

window.addEventListener("scroll", function () {
  const mynav = document.getElementById("mynavbar");
  if (window.scrollY > 50) {
    mynav.classList.add(
      "bg-blue-700/50",
      "shadow-md",
      "backdrop-blur",
      "bg-opacity-30",
      "transition",
      "duration-500",
      "ease-in-out"
    );
    mynav.classList.add("py-2");
  } else {
    mynav.classList.remove(
      "bg-blue-700/50",
      "backdrop-blur-md",
      "shadow-lg",
      "py-2"
    );
  }
});

//back to top button

const btnback = document.getElementById("btnback");

addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnback.style.display = "block";
    btnback.style.transition = "all 0.5s ease-in-out";
    btnback.classList.add("animate-bounce" , "duration-500" , "ease-in-out");

  } else {
    btnback.style.display = "none";
  }
})

btnback.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});