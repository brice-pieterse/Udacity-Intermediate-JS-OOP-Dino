const compareBtn = document.getElementById("compare");
const form = document.querySelector(".form-wrapper");
const formIntro = document.querySelector(".intro-wrapper");

const imperialBtn = document.querySelector(".imperial-btn");
const metricBtn = document.querySelector(".metric-btn");

const imperialHeight = document.querySelector(".imperial-height-wrapper");
const heightFeetInput = document.querySelector(".heightFeetInput");
const heightInchInput = document.querySelector(".heightInchInput");

const metricHeight = document.querySelector(".metric-height-wrapper");
const heightCmInput = document.querySelector(".heightCmInput");

const weightInput = document.querySelector(".weight-input");
const nameInput = document.querySelector(".name-input");
const dietInput = document.querySelector(".diet-input");



//form-in animation
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



// form-out animation
function closeForm(){
    setTimeout(() => {
        formIntro.style.display = "none"
    }, 250)

    const keyframes = [
        {
          opacity: 1
        },
        {
            opacity: 0
        }
      ];
      const options = {
          duration: 250,
          easing: 'ease-out',
      }
      formIntro.animate(keyframes, options);
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



// makes sure all form values are filled out
function formCheck(){
    let validForm = true;
    if (!nameInput.value){
        validForm = false;
        nameInput.style.border = "1px solid rgb(204, 95, 95)"
    }

    if (!weightInput.value){
        validForm = false;
        weightInput.style.border = "1px solid rgb(204, 95, 95)"
    }
    //checks for valid entries for imperial units
    if (imperialBtn.checked){
        if (!heightFeetInput.value){
            validForm = false;
            heightFeetInput.style.border = "1px solid rgb(204, 95, 95)"
        }
        if (!heightInchInput.value){
            validForm = false;
            heightInchInput.style.border = "1px solid rgb(204, 95, 95)"
        }
    }
    //checks for valid entries for metric units
    if (metricBtn.checked){
        console.log(true)
        if (!heightCmInput.value){
            validForm = false;
            heightCmInput.style.border = "1px solid rgb(204, 95, 95)"
        }
    }
    return validForm;
}


// reset the form for re-use after successful submit
function resetForm(){
    nameInput.style.border = "none"
    weightInput.style.border = "none"
    heightFeetInput.style.border = "none"
    heightInchInput.style.border = "none"
    heightCmInput.style.border = "none"
}


compareBtn.addEventListener("click", () => {
    if (formCheck()){
        closeForm();
    }
});