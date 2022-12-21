const sausage = document.getElementById("sausage");
const rightArrow = document.getElementById("right_arrow");
const leftArrow = document.getElementById("left_arrow");
const burgerIcon = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

let distance = 0;

// Will change sausage's right property, therefore moving it left or right
function moveSausage() {
  sausage.style.right = `${distance}%`;
}

// Will reduce distance, subsequently moving sausage to the right if it's is not already 0
function reduceDistance() {
  if (distance !== 0) {
    distance -= 100;
    moveSausage();
  }
}

// Will increase distance, subsequently moving sausage to the left if it's not already 3000
function increaseDistance() {
  if (distance < 300) {
    distance += 100;
    leftArrow.style.opacity = "1";
    moveSausage();
  }
}

// Changes the opacity of right/left arrows
function changeOpacity(e) {
  if (distance === 200 && e.target.id === "right_arrow") {
    rightArrow.style.opacity = "0.2";
  } else if (distance === 100 && e.target.id === "left_arrow") {
    leftArrow.style.opacity = "0.2";
  } else if (distance !== 0 && e.target.id === "left_arrow") {
    rightArrow.style.opacity = "1";
  }
}

leftArrow.addEventListener("click", changeOpacity);
leftArrow.addEventListener("click", reduceDistance);
rightArrow.addEventListener("click", changeOpacity);
rightArrow.addEventListener("click", increaseDistance);

function openMenu() {
  navMenu.classList.toggle("open");
  burgerIcon.classList.toggle("active");
}

burgerIcon.addEventListener("click", openMenu);
document.querySelectorAll(".nav-link").forEach((element) => {
  element.addEventListener("click", () => {
    navMenu.classList.remove("open");
    burgerIcon.classList.remove("active");
  });
});
