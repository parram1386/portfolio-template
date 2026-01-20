import "./style.css";

// mobile menu toggle
const mybtn = document.getElementById("mybtn");
const mymenu = document.getElementById("mymenu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

const toggleMenu = () => {
  mymenu.classList.toggle("-right-full");
  mymenu.classList.toggle("right-0");
  overlay.classList.toggle("hidden");
};

overlay.addEventListener("click", toggleMenu);

mybtn.addEventListener("click", toggleMenu);

if (closeBtn) {
  closeBtn.addEventListener("click", toggleMenu);
}

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
      "py-2",
      
    );
  }
});

//back to top button

const btnback = document.getElementById("btnback");

addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnback.style.display = "block";
    btnback.style.transition = "all 0.5s ease-in-out";
    btnback.classList.add("animate-bounce", "duration-500", "ease-in-out");
  } else {
    btnback.style.display = "none";
  }
});

btnback.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

////Image slider Automatic

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-item img");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  let currentIndex = 0;
  let slideInterval;

  function updateSlider(index) {
    slides.forEach((img) => {
      img.classList.remove("opacity-100");
      img.classList.add("opacity-0");
    });
    dots.forEach((dot) => {
      dot.className =
        "dot w-2 h-2 rounded-full bg-white/20 transition-all duration-300";
    });

    currentIndex = index;
    slides[currentIndex].classList.remove("opacity-0");
    slides[currentIndex].classList.add("opacity-100");
    dots[currentIndex].className =
      "dot w-6 h-2 rounded-full bg-white transition-all duration-300";
  }

  function nextSlide() {
    let next = (currentIndex + 1) % slides.length;
    updateSlider(next);
  }

  function prevSlide() {
    let prev = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider(prev);
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetTimer();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetTimer();
  });

  function startTimer() {
    slideInterval = setInterval(nextSlide, 4000);
  }

  function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
  }

  startTimer();
});

///FAQ

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    const arrow = this.querySelector(".arrow");
    const answer = this.nextElementSibling;
    arrow.classList.toggle("rotate-180");

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

////Email Form

const form = document.getElementById("my-form");
const formContent = document.getElementById("form-content");
const thanksContent = document.getElementById("thanks-content");
const btn = document.getElementById("submit-btn");
const btnText = document.getElementById("btn-text");


function toggleView(showThanks) {
    if (showThanks) {
        formContent.classList.add("opacity-0", "scale-95", "-translate-y-10");
        setTimeout(() => {
            formContent.classList.add("hidden");
            thanksContent.classList.remove("hidden");
            thanksContent.classList.add("flex");
        }, 500);
    } else {
        thanksContent.classList.add("hidden");
        thanksContent.classList.remove("flex");
        formContent.classList.remove("hidden", "opacity-0", "scale-95", "-translate-y-10");
        form.reset();
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    
    btn.disabled = true;
    btnText.innerText = "Sending...";
    
    const data = new FormData(e.target);

    try {
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
           
            toggleView(true);
        } else {
            alert("Oops! There was a problem. Please try again.");
        }
    } catch (error) {
        alert("Network error. Please check your connection.");
    } finally {
        btn.disabled = false;
        btnText.innerText = "Send Message";
    }
});