let count = 50


const loadControls = () => {
  increaseTempControl = document.getElementById('increaseTempControl');
  currentTempButton = document.getElementById('currentTempButton');
  currentTempButton = document.getElementById('currentTempButton');
  decreaseTempControl = document.getElementById('decreaseTempControl');
  skySelect = document.getElementById('skySelect')
  sun = document.getElementsByClassName('sun');
  winterTree = document.getElementById('winter-tree')
  springTree = document.getElementsByClassName('spring-tree')
  autumnTree = document.getElementsByClassName('autumn-tree')
  summerTree = document.getElementsByClassName('summer-tree')
  ground = document.getElementsByClassName('ground')
  garden = document.getElementById('gardenContent')
  sky = document.getElementsByClassName('sky')
  bigCloud = document.getElementsByClassName('big-cloud')
  littleCloud = document.getElementsByClassName('little-cloud')

}

const increaseTempBtn = () => {
  count += 1;
  tempValue.textContent = `${count}`;
};


const decreaseTempBtn = () => {
  count -= 1;
  tempValue.textContent = `${count}`;
};

const changeSkyscape = () => {
  if (skySelect.value === 'snowy') {
    sun[0].classList.add('snowy');
    winterTree.style.visibility = 'visible';
    ground[0].classList.add('snowy');
    sky[0].textContent = '❄️ ❄️ ❄️ '
  }
  if (skySelect.value === 'rainy') {
    sun[0].classList.add('rainy');
    springTree[0].style.visibility = 'visible';
    ground[0].classList.add('rainy');
    sky[0].textContent = ''
    sky[0].textContent = '💧💧💧'
    
  }
  if (skySelect.value === 'cloudy') {
    sun[0].classList.add('cloudy');
    autumnTree[0].style.visibility = 'visible';
    ground[0].classList.add('cloudy');
    sky[0].textContent = '';
    sky[0].textContent = '🍁🍁🍁';
    bigCloud[0].style.visibility = 'visible';
    littleCloud[0].style.visibility = 'visible';
    garden.style.background = 'rgba(128,128,128, .1)'
    sun[0].textContent = o_0
  }
  if (skySelect.value === 'sunny') {
    sun[0].classList.add('sunny');
    summerTree[0].style.visibility = 'visible';
    ground[0].classList.add('sunny');
    sky[0].textContent = '';
    sky[0].textContent = '☀️☀️☀️';
    sun[0].textContent =  '-_-'
  }
  
}
const registerEvents = () => {
  increaseTempControl.addEventListener('click', increaseTempBtn);
  decreaseTempControl.addEventListener('click', decreaseTempBtn);
  skySelect.addEventListener('change', changeSkyscape);
}

onLoad = () => {
  loadControls();
  registerEvents();
};

onLoad();