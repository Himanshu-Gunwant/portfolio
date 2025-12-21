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
