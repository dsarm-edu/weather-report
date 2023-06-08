
let count = 50;

const loadControls = () => {
  increaseTempControl = document.getElementById('increaseTempControl');
  currentTempButton = document.getElementById('currentTempButton');
  decreaseTempControl = document.getElementById('decreaseTempControl');
  skySelect = document.getElementById('skySelect')
  sun = document.getElementsByClassName('sun');
  tree = document.getElementsByClassName('tree')
  ground = document.getElementsByClassName('ground')
  garden = document.getElementById('gardenContent')
  sky = document.getElementsByClassName('sky')
  cloud = document.getElementsByClassName('cloud')
}

const increaseTempBtn = () => {
  count += 1;
  tempValue.textContent = `${count}`;
};

const decreaseTempBtn = () => {
  count -= 1;
  tempValue.textContent = `${count}`;
};

const changeColorBasedOnTemp = () => {
  if (count >= 90) {
    tempValue.style.color = 'red';
  } else if (count >= 70 && count >= 79) {
    tempValue.style.color = 'orange';
  } else if (count >= 60 && count >= 69) {
    tempValue.style.color = 'yellow';
  } else if (count >= 50 && count >= 59) {
    tempValue.style.color = 'green'
  } else if (count <= 49) {
    tempValue.style.color = 'teal';
  }
}


const changeSkyscape = () => { 
  // CLOUDY
    tree[2].classList.toggle('show', skySelect.value === 'cloudy');
    ground[0].classList.toggle('cloudy', skySelect.value === 'cloudy');
    garden.classList.toggle('cloudy-sky', skySelect.value === 'cloudy' || skySelect.value === 'rainy');
    // sky[0].textContent = '';
    // sky[0].textContent = '🍁🍁🍁';

  // SUNNY
    tree[3].classList.toggle('show', skySelect.value === 'sunny');
    ground[0].classList.toggle('sunny', skySelect.value === 'sunny');
    
    // SNOWY
    tree[0].classList.toggle('show', skySelect.value === 'snowy')
    garden.classList.toggle('snowy-sky', skySelect.value === 'snowy')
    ground[0].classList.toggle('snowy', skySelect.value === 'snowy');


  // RAINY
    tree[1].classList.toggle('show', skySelect.value === 'rainy')


    cloud[0].classList.toggle('show', skySelect.value === 'cloudy' || skySelect.value === 'rainy');
    cloud[1].classList.toggle('show', skySelect.value === 'cloudy' || skySelect.value === 'rainy');

  //   sky[0].textContent = ''
  //   sky[0].textContent = '💧💧💧'


  //   sky[0].textContent = '';
  //   sky[0].textContent = '☀️☀️☀️';
  //   sun[0].textContent = '-_-'
  // }

}
const registerEvents = () => {
  increaseTempControl.addEventListener('click', increaseTempBtn);
  decreaseTempControl.addEventListener('click', decreaseTempBtn);
  increaseTempControl.addEventListener('click', changeColorBasedOnTemp);
  decreaseTempControl.addEventListener('click', changeColorBasedOnTemp);

  skySelect.addEventListener('change', changeSkyscape);
}

onLoad = () => {
  loadControls();
  registerEvents();
};

onLoad();