const compareBtn = document.getElementById("compare");
const resetBtn = document.querySelector(".new-form")

const form = document.querySelector(".form-wrapper");
const formIntro = document.querySelector(".intro-wrapper");
const grid = document.querySelector(".grid-wrapper");

const imperialBtn = document.querySelector(".imperial-btn");
const metricBtn = document.querySelector(".metric-btn");

const imperialHeight = document.querySelector(".imperial-height-wrapper");
const heightFeetInput = document.querySelector(".heightFeetInput");
const heightInchInput = document.querySelector(".heightInchInput");

const metricHeight = document.querySelector(".metric-height-wrapper");
const heightCmInput = document.querySelector(".heightCmInput");

const weightInput = document.querySelector(".weight-input");
const nameInput = document.querySelector(".name-input");
const dietInput = document.getElementById("diet");

let human;

const Spinosaurus = {
    name: 'Spinosaurus',
    imgSrc: "./images/dinos/spino.svg",
    diet: "Carnivore",
    height: 700,
    weight: 7000,
    avgLifespan: 59
}
const TRex = {
    name: 'TRex',
    imgSrc: "./images/dinos/trex.svg",
    diet: "Carnivore",
    height: 610,
    weight: 14000,
    avgLifespan: 30
}
const Parasaurolophus = {
    name: 'Parasaurolophus',
    imgSrc: "./images/dinos/para.svg",
    diet: "Herbivore",
    height: 490,
    weight: 3600,
    avgLifespan: 38
}
const Brachiosaurus = {
    name: 'Brachiosaurus',
    imgSrc: "./images/dinos/brachio.svg",
    diet: "Herbivore",
    height: 3000,
    weight: 40000,
    avgLifespan: 100
}
const Stegosaurus = {
    name: 'Stegosaurus',
    imgSrc: "./images/dinos/stego.svg",
    diet: "Herbivore",
    height: 400,
    weight: 5000,
    avgLifespan: 45
}
const Elasmosaurus = {
    name: 'Elasmosaurus',
    imgSrc: "./images/dinos/elasmo.svg",
    diet: "Carnivore",
    height: 1400,
    weight: 2200,
    avgLifespan: 66
}
const Velociraptor = {
    name: 'Velociraptor',
    imgSrc: "./images/dinos/veloc.svg",
    diet: "Carnivore",
    height: 200,
    weight: 45,
    avgLifespan: 70
}

const Pigeon = {
    imgSrc: "",
    fact: "All birds are living  dinosaurs"
}

class Human {
    constructor(name, diet, height, weight){
        this.name = name;
        this.diet = diet;
        this.height = height;
        this.weight = weight;
        this.avgLifespan = 80;
        this.imgSrc = ""
    }
}


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
    nameInput.value = ""
    weightInput.style.border = "none"
    weightInput.value = ""
    heightFeetInput.style.border = "none"
    heightFeetInput.value = ""
    heightInchInput.style.border = "none"
    heightInchInput.value = ""
    heightCmInput.style.border = "none"
    heightCmInput.value = ""
}


// convert from imperial to metric height if needed
function convertUnits(){
    if (imperialBtn.checked){
        const inches = parseInt(heightFeetInput.value * 12) + parseInt(heightInchInput.value);
        console.log(inches)
        const weight = weightInput.value
        return {
            height: inches * 2.54,
            weight: weight * 0.455
        }
    }
    else {
        return {
            height: heightCmInput.value,
            weight: weightInput.value
        }
    }
}


function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


// functional mixin for creating dinos
const createDino = function(obj){
    return Object.assign({}, obj, {
        getDietFact: function () {
            if (this.diet === human.diet){
                return `You are a ${human.diet} and ${this.name} is too!`
            }
            else {
                return `${this.name} is a ${this.diet}!`
            }
        },
        getWeightFact: function(){
            if (this.weight > human.weight){
                return `${this.name} weighed ${Math.round(this.weight/human.weight)} times what you do!`
            }
            else return `You weigh ${Math.round(human.weight/this.weight)} times what ${this.name} weighed!`
        },
        getHeightFact: function(){
            return `${this.name} was ${Math.round((this.height/human.height) * 10) / 10} times taller than you!`
        },
        getLifeSpanFact: function(){
            if (human.avgLifespan > this.avgLifespan){
                return `You live an average of ${human.avgLifespan - this.avgLifespan} years longer than ${this.name}.`
            }
            else {
                return `${this.name} lives an average of ${this.avgLifespan - human.avgLifespan} years longer than a human.`
            }
        }
        
    })
}

function createAllDinos(){
    return [createDino(Spinosaurus), createDino(TRex), createDino(Parasaurolophus), createDino(Brachiosaurus), createDino(Stegosaurus), createDino(Elasmosaurus), createDino(Velociraptor)]
}

function createGrid(dinos){
    const gridItems = document.querySelectorAll(".grid-item")
    let gridIndex = 0;
    let dinoIndex = 0

    while (dinoIndex < dinos.length || gridIndex <= 8){
        let name = document.createElement("p");
        let fact = document.createElement("p")

        // create human  
        if (gridIndex === 4){
            name.innerHTML = `${human.name}`
            fact.innerHTML = ''
            let img = '<img src="./images/human.svg" alt="" class="human" style="position: absolute; left: 0; height: 100%;"/>'
            gridItems[gridIndex].innerHTML = img
        }

        // create bird
        else if (gridIndex === 8){
            let img = `<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center"><img src="./images/bird.svg" alt='Image of bird' style="height: 125px;"/></div>`
            gridItems[gridIndex].innerHTML = img

            name.innerHTML = `Pigeon`
            fact.innerHTML = 'All birds are living dinosaurs!'
        }

        // create dino
        else {
            let img = `<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center"><img src='${dinos[dinoIndex].imgSrc}' alt='Image of ${dinos[dinoIndex].name}' style="height: 125px;"/></div>`
            gridItems[gridIndex].innerHTML = img

            name.innerHTML = `${dinos[dinoIndex].name}`

            let factInnerHtml;
            switch (randomIntFromInterval(1,4)){
                case 1:
                    factInnerHtml = dinos[dinoIndex].getDietFact();
                    break;
                case 2:
                    factInnerHtml = dinos[dinoIndex].getWeightFact();
                    break;
                case 3:
                    factInnerHtml = dinos[dinoIndex].getHeightFact();
                    break;
                case 4:
                    factInnerHtml = dinos[dinoIndex].getLifeSpanFact();
                    break;
            }
            fact.innerHTML = factInnerHtml;
            dinoIndex++
        }

        name.style.position = "absolute"
        name.style.top = "10px"
        name.style.width = "100%"
        name.style.textAlign = "center"
        name.style.fontFamily = "sans-serif"
        name.style.fontSize = "20px"
        name.style.fontWeight = "600"

        fact.style.position = "absolute"
        fact.style.bottom = "10px"
        fact.style.width = "90%"
        fact.style.left = "5%"
        fact.style.textAlign = "center"
        fact.style.fontFamily = "sans-serif"
        fact.style.fontSize = "18px"
        fact.style.fontWeight = "400"

        gridItems[gridIndex].appendChild(name)
        gridItems[gridIndex].appendChild(fact)

        gridIndex++
    }
}



compareBtn.addEventListener("click", () => {
    if (formCheck()){
        let humanUnits = convertUnits();
        console.log(humanUnits)
        human = new Human(nameInput.value, dietInput.value, humanUnits.height, humanUnits.weight);
        closeForm();
        grid.style.display = "flex"
        const dinos = createAllDinos();
        createGrid(dinos);
    }
});

// reset the grid, go back to form screen
resetBtn.addEventListener("click", () => {
    const gridItems = document.querySelectorAll(".grid-item")
    for (let block of gridItems){
        block.innerHTML = '';
    }
    grid.style.display = "none";
    resetForm();
    formIntro.style.display = "flex"
})