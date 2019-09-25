window.addEventListener("DOMContentLoaded", function() {
  "use strict";
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }
  info.addEventListener("click", e => {
    let target = e.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer

  let deadLine = "2019-09-27";

  function getTimeRemaning(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = addZeroz(Math.floor((t / 1000) % 60)),
      minutes = addZeroz(Math.floor((t / 1000 / 60) % 60)),
      hours = addZeroz(Math.floor(t / (1000 * 60 * 60)));
    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  function addZeroz(number) {
    return ("0" + number).slice(-2);
  }
  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaning(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;
      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }
  }
  setClock("timer", deadLine);
  // modal

  let mores = document.querySelectorAll(".more, .description-btn"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close");

  for (let more of mores) {
    more.addEventListener("click", () => {
      overlay.style.display = "block";
      this.classList.add("more-splash");
      document.body.style.overflow = "hidden";
    });
    close.addEventListener("click", () => {
      overlay.style.display = "none";
      more.classList.remove("more-splash");
      document.body.style.overflow = "";
    });
  }
});
