const compareBtn = document.getElementById("compare");
const form = document.querySelector(".form-wrapper");
const imperialBtn = document.querySelector(".imperial-btn");
const metricBtn = document.querySelector(".metric-btn");
const imperialHeight = document.querySelector(".imperial-height-wrapper");
const metricHeight = document.querySelector(".metric-height-wrapper");
const weightInput = document.querySelector(".weight-input");


//reload form animation
function loadForm(){
    const keyframes = [
        {
          transform: "translateY(-300px) scale(.5)",
          opacity: 0
        },
        {
            transform: "translateY(0px) scale(1)",
            opacity: 1
        }
      ];
      const options = {
          duration: 750,
          easing: 'ease-out'
      }
      form.animate(keyframes, options);
}

window.onload = loadForm;

//change form text based on imperial/metric units
imperialBtn.addEventListener("click", () => {
  metricHeight.style.display = "none";
  imperialHeight.style.display = "flex";
  weightInput.placeholder = "Your weight in lb";
});
metricBtn.addEventListener("click", () => {
  imperialHeight.style.display = "none";
  metricHeight.style.display = "flex";
  weightInput.placeholder = "Your weight in kg";
});

compareBtn.addEventListener("click", () => {});
