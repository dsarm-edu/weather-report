
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
  const temperature = tempValue.textContent;

  tempValue.classList.remove('red', 'orange', 'yellow', 'green', 'teal');

  if (temperature >= 80) {
    tempValue.classList.add('red');
  } else if (temperature >= 70 && temperature <= 79) {
    tempValue.classList.add('orange');
  } else if (temperature >= 60 && temperature <= 69) {
    tempValue.classList.add('yellow');
  } else if (temperature >= 50 && temperature <= 59) {
    tempValue.classList.add('green');
  } else if (temperature <= 49) {
    tempValue.classList.add('teal');
  }
};


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