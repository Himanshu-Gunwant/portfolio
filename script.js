const heroElements = document.querySelectorAll(".hero-name");
const letters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function runHeroNameAnimation() {
  heroElements.forEach((el) => {
    el.textContent = el.dataset.originalText || el.textContent;

    const originalText = el.textContent;
    el.dataset.originalText = originalText;

    let iteration = 0;

    function randomReveal() {
      let displayedText = "";

      for (let i = 0; i < originalText.length; i++) {
        if (i < iteration) {
          displayedText += originalText[i];
        } else if (originalText[i] === " ") {
          displayedText += " ";
        } else {
          displayedText += letters[Math.floor(Math.random() * letters.length)];
        }
      }

      el.textContent = displayedText;

      iteration += 0.4;

      if (iteration <= originalText.length) {
        setTimeout(randomReveal, 40);
      } else {
        el.textContent = originalText;
      }
    }

    randomReveal();
  });
}

runHeroNameAnimation();

const homeLink = document.querySelector('a[href="#home"]');

if (homeLink) {
  homeLink.addEventListener("click", (e) => {
    runHeroNameAnimation();
  });
}
const navMain = document.querySelector(".nav-main");
const navAlt = document.querySelector(".nav-alt");
const aboutSection = document.querySelector(".about");

window.addEventListener("scroll", () => {
  const aboutTop = aboutSection.offsetTop;

  if (window.scrollY >= aboutTop - navMain.offsetHeight) {
    navMain.classList.add("hidden");
    navAlt.classList.add("active");
  } else {
    navMain.classList.remove("hidden");
    navAlt.classList.remove("active");
  }
});
const cursor = document.getElementById('cursor-dot');

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

const speed = 0.1;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;
    
    cursorX = cursorX + (distX * speed);
    cursorY = cursorY + (distY * speed);

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(animate);
}
const links = document.querySelectorAll('a, button');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.width = '50px';
        cursor.style.height = '50px';
        cursor.textContent = 'view';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursor.textContent = '';
    });
});
animate();

let seconds = 5;
const countdownElement = document.getElementById('countdown');
  const interval = setInterval(() => {
    seconds--;
    countdownElement.textContent = seconds;

    if (seconds <= 0) {
      clearInterval(interval);
      window.location.href = "index.html#contact";
    }
}, 1000);