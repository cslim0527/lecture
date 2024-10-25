console.log("[common.js]");

const controls = document.querySelector(".slide-controls");
const playBtn = document.querySelector(".slide-controls .btn-play");
const prevBtn = document.querySelector(".slide-controls .btn-prev");
const nextBtn = document.querySelector(".slide-controls .btn-next");
let intervalId = null;
let slideIndex = 1;

const onActiveSlideItem = (currentIndex) => {
  const activeItem = document.querySelector(".slide-item.active");
  activeItem.classList.remove("active");
  const nextActiveItem = document.querySelector(
    `.slide-item:nth-child(${currentIndex})`
  );
  nextActiveItem.classList.add("active");
};

const onChangeVisualSectionBackground = (currentIndex) => {
  const visualSection = document.querySelector(".visual-section");

  visualSection.classList.replace(
    `active-${currentIndex === 1 ? 4 : currentIndex - 1}`,
    `active-${currentIndex}`
  );
};

const onChangeIndicator = (currentIndex) => {
  const now = document.querySelector(".slide-controls .indicator .now");
  now.textContent = "0" + currentIndex;
};

const mainSlider = {
  move: (direction) => {
    if (direction === "next") {
      slideIndex++;
      onActiveSlideItem(slideIndex);
      onChangeIndicator(slideIndex);
      onChangeVisualSectionBackground(slideIndex);

      if (slideIndex >= 4) {
        slideIndex = 0;
      }
    } else {
      slideIndex--;

      if (slideIndex < 1) {
        slideIndex = 4;
      }

      onActiveSlideItem(slideIndex);
      onChangeIndicator(slideIndex);
      onChangeVisualSectionBackground(slideIndex);
    }
  },
  start: () => {
    controls.classList.add("playing");
    controls.classList.remove("paused");

    intervalId = setInterval(() => {
      mainSlider.move("next");
    }, 2000);
  },
  pause: () => {
    controls.classList.add("paused");
    controls.classList.remove("playing");

    clearInterval(intervalId);
  },
  next: () => {
    mainSlider.pause();
    mainSlider.move("next");
  },
  prev: () => {
    mainSlider.pause();
    mainSlider.move("prev");
  },
};

const startOrPause = () => {
  if (controls.classList.contains("paused")) {
    mainSlider.start();
  } else {
    mainSlider.pause();
  }
};

playBtn.addEventListener("click", startOrPause);
nextBtn.addEventListener("click", mainSlider.next);
prevBtn.addEventListener("click", mainSlider.prev);

mainSlider.start();
