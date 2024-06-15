document.addEventListener("DOMContentLoaded", () => {
  /**
   * HEADER
   */

  let hamburger = document.querySelector(".hamburger");
  let nav = document.querySelector(".navbar-container");
  let toggleLogo = document.querySelector(".toggle-logo-header");

  if (window.innerWidth < 992) {
    hamburger.style.display = "block";
    nav.style.display = "none";
  }
  window.addEventListener("resize", () => {
    console.log(nav.classList.contains("toggle"));

    if (window.innerWidth < 992) {
      hamburger.style.display = "block";
      nav.style.display = "none";
    } else {
      hamburger.style.display = "none";
      nav.style.display = "block";
      if (nav.classList.contains("toggle")) {
        nav.classList.remove("toggle");
        nav.classList.remove("active");
      }
    }
  });

  /**
   * NAV
   */
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("toggle");
    nav.classList.toggle("active");
    toggleLogo.classList.toggle("active");
    if (nav.classList.contains("toggle")) {
      hamburger.style.display = "block";
      nav.style.display = "block";
      toggleLogo.style.display = "block";
    } else {
      hamburger.style.display = "block";
      nav.style.display = "none";
      toggleLogo.style.display = "none";
    }
  });

  let additions = document.querySelector(".additions");
  let hero = document.querySelector(".hero");

  let news = document.querySelector(".news");
  let discoverContent1 = document.querySelector(".dc1");
  let discoverContent2 = document.querySelector(".dc2");

  let mission = document.querySelector(".mission");
  let missionImg = document.querySelector(".mission-image");
  let missionContent = document.querySelector(".mission-content");

  window.addEventListener("scroll", () => {
    let heroBottom = hero.getBoundingClientRect().bottom;

    let newsTop = news.getBoundingClientRect().top;

    let missionTop = mission.getBoundingClientRect().top;
    let missionBottom = mission.getBoundingClientRect().bottom;

    if (heroBottom < 650) {
      additions.style.transform = "translateY(0%)";
    } else {
      additions.style.transform = "translateY(100%)";
    }

    if (newsTop < 280) {
      discoverContent1.style.transform = "translateY(0%)";
      discoverContent2.style.transform = "translateY(0%)";
    } else {
      discoverContent1.style.transform = "translateY(100%)";
      discoverContent2.style.transform = "translateY(100%)";
    }

    if (missionTop > 600) {
      missionImg.style.transform =
        "rotateZ(-20deg) translateX(-40%) translateY(-30%)";
      missionImg.style.opacity = 0;
      missionContent.style.transform =
        "rotateZ(20deg) translateX(40%) translateY(-30%)";
      missionContent.style.opacity = 0;
    } else if (missionBottom < 400) {
      missionImg.style.transform =
        "rotateZ(-20deg) translateX(-40%) translateY(-30%)";
      missionImg.style.opacity = 0;
      missionContent.style.transform =
        "rotateZ(20deg) translateX(40%) translateY(-30%)";
      missionContent.style.opacity = 0;
    } else if (missionTop < 600) {
      missionImg.style.transform =
        "rotateZ(0deg) translateX(0%) translateY(0%)";
      missionImg.style.opacity = 1;
      missionContent.style.transform =
        "rotateZ(0deg) translateX(0%) translateY(0%)";
      missionContent.style.opacity = 1;
    }
  });

  /**
   * PRE-LOADER
   */
  window.addEventListener("load", function () {
    // Get the preloader elements
    var loaders = document.querySelectorAll(".loader");

    // Set a counter for the animation delay
    var counter = 0;

    // Add animation delay to each loader
    loaders.forEach(function (loader) {
      loader.style.animationDelay = counter + "s";
      counter += 0.4; // Adjust the delay timing as needed
    });

    // Hide the preloader after a delay
    setTimeout(function () {
      var preloader = document.querySelector(".preloader");
      preloader.style.display = "none";
    }, (counter - 0.5) * 1000); // Adjust the delay timing as needed
  });
});
