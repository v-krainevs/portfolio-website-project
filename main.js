const sausage = document.getElementById("sausage");
const rightArrow = document.getElementById("right_arrow");
const leftArrow = document.getElementById("left_arrow");

let distance = 0;

// Will change sausage's right property, therefore moving it left or right
function moveSausage() {
  sausage.style.right = `${distance}px`;
}

// Will reduce distance, subsequently moving sausage to the right if it's is not already 0
function reduceDistance() {
  if (distance !== 0) {
    distance -= 1000;
    moveSausage();
  }
}

// Will increase distance, subsequently moving sausage to the left if it's not already 3000
function increaseDistance() {
  if (distance < 3000) {
    distance += 1000;
    leftArrow.style.opacity = "1";
    moveSausage();
  }
}

// Changes the opacity of right/left arrows
function changeOpacity(e) {
  if (distance === 2000 && e.target.id === "right_arrow") {
    rightArrow.style.opacity = "0.2";
  } else if (distance === 1000 && e.target.id === "left_arrow") {
    leftArrow.style.opacity = "0.2";
  } else if (distance !== 0 && e.target.id === "left_arrow") {
    rightArrow.style.opacity = "1";
  }
}

leftArrow.addEventListener("click", changeOpacity);
leftArrow.addEventListener("click", reduceDistance);
rightArrow.addEventListener("click", changeOpacity);
rightArrow.addEventListener("click", increaseDistance);
