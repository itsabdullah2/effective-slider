const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const backButton = document.getElementById("back");
const seeMoreButton = document.querySelectorAll(".seeMore");
const carousal = document.querySelector(".carousal");
const listHTML = document.querySelector(".carousal .list");

nextButton.onclick = function () {
  showSlider("next");
};
prevButton.onclick = function () {
  showSlider("prev");
};

let unAcceptClick;
const showSlider = (type) => {
  nextButton.style.pointerEvents = "none";
  prevButton.style.pointerEvents = "none";

  carousal.classList.remove("prev", "next");
  let items = document.querySelectorAll(".item");
  if (type === "next") {
    // move first item to the last index
    listHTML.appendChild(items[0]);
    carousal.classList.add("next");
  } else {
    let positionLast = items.length - 1;
    listHTML.prepend(items[positionLast]);
    carousal.classList.add("prev");
  }

  clearTimeout(unAcceptClick);
  unAcceptClick = setTimeout(() => {
    nextButton.style.pointerEvents = "auto";
    prevButton.style.pointerEvents = "auto";
  }, 2000);
};

seeMoreButton.forEach((button) => {
  button.onclick = function () {
    carousal.classList.add("showDetail");
  };
});

backButton.onclick = function () {
  carousal.classList.remove("showDetail");
};
