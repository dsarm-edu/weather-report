import 'regenerator-runtime/runtime';
import axios from 'axios';

const state = {
  increaseTempControl: null,
  currentTempButton: null,
  decreaseTempControl: null,
  skySelect: null,
  sun: null,
  tree: null,
  ground: null,
  garden: null,
  sky: null,
  cloud: null,
  headerCityName: null,
  input: null,
  headerCityName: null,
  resetButton: null,
  tempValue: null,
  tempUnitToggle: null,
  temperature: 50
}

const loadControls = () => {
  state.increaseTempControl = document.getElementById('increaseTempControl');
  state.currentTempButton = document.getElementById('currentTempButton');
  state.decreaseTempControl = document.getElementById('decreaseTempControl');
  state.skySelect = document.getElementById('skySelect');
  state.sun = document.getElementsByClassName('sun');
  state.tree = document.getElementsByClassName('tree');
  state.ground = document.getElementsByClassName('ground');
  state.garden = document.getElementById('gardenContent');
  state.sky = document.getElementsByClassName('sky');
  state.cloud = document.getElementsByClassName('cloud');
  state.headerCityName = document.getElementById('headerCityName');
  state.input = document.getElementById('inputCityName');
  state.headerCityName = document.getElementById('headerCityName');
  state.resetButton = document.getElementById('resetButton');
  state.tempValue = document.getElementById('tempValue');
  state.tempUnitToggle = document.getElementById('unitToggle')
  state.temperature = 50
}

const increaseTempBtn = () => {
  state.temperature += 1;
  state.tempValue.textContent = state.temperature;
};

const decreaseTempBtn = () => {
  state.temperature -= 1;
  state.tempValue.textContent = state.temperature;
};

// const toggleTempUnits = () => {
//   if (state.tempUnitToggle.checked) {
//     const celciusTemp = Math.floor((state.temperature - 32) * 5/9)
//     console.log(state.temperature)
//     tempValue.textContent = celciusTemp
//   } else {
//     tempValue.textContent = state.temperature
//   }
// }

const displayTemp = () => {
  
}
const changeColorBasedOnTemp = () => {
  state.tempValue.classList.remove('red', 'orange', 'yellow', 'green', 'teal');

  if (state.temperature >= 80) {
    state.tempValue.classList.add('red');
  } else if (state.temperature >= 70 && state.temperature <= 79) {
    state.tempValue.classList.add('orange');
  } else if (state.temperature >= 60 && state.temperature <= 69) {
    state.tempValue.classList.add('yellow');
  } else if (state.temperature >= 50 && state.temperature <= 59) {
    state.tempValue.classList.add('green');
  } else if (state.temperature <= 49) {
    state.tempValue.classList.add('teal');
  }
  //TOGGLE LANDSCAPE
  state.tree[0].classList.toggle('show', state.temperature <= 49)
  state.garden.classList.toggle('snowy-sky', state.temperature <= 49)
  state.ground[0].classList.toggle('snowy', state.temperature <= 49);

  state.tree[2].classList.toggle('show', state.temperature >= 50 && state.temperature <= 64);
  state.ground[0].classList.toggle('cloudy', state.temperature >= 50 && state.temperature <= 64);
  state.garden.classList.toggle('cloudy-sky', state.temperature >= 50 && state.temperature <= 64);

  state.tree[1].classList.toggle('show', state.temperature >= 65 && state.temperature <= 75)

  state.tree[3].classList.toggle('show', state.temperature > 75);
  state.ground[0].classList.toggle('sunny', state.temperature > 75);
};

const changeSkyscape = () => {
  state.sky[0].textContent = '';
  // CLOUDY
  if (state.skySelect.value === 'cloudy') {
    state.sky[0].textContent = '🌾🍃🌾';
  }
  // SUNNY
  if (state.skySelect.value === 'sunny') {
    state.sky[0].textContent = '☀️😎☀️';
  }

  // SNOWY
  if (state.skySelect.value === 'snowy') {
    state.sky[0].textContent = '❄️🥶❄️'
  }

  // RAINY
  if (state.skySelect.value === 'rainy') {
    state.sky[0].textContent = '💧☔️💧'
  }

  //CLOUDY or RAINY
  state.cloud[0].classList.toggle('show', state.skySelect.value === 'cloudy' || state.skySelect.value === 'rainy');
  state.cloud[1].classList.toggle('show', state.skySelect.value === 'cloudy' || state.skySelect.value === 'rainy');
}

const changeCityName = () => {
    state.headerCityName.textContent = state.input.value;
  };

const resetCity = () => {
    state.input.value = '';
    state.headerCityName.textContent = 'Las Vegas';
  };


const getLatLon = async () => {
  const response = await axios.get('https://weather-report-proxy-msis.onrender.com/location', { params: { q: headerCityName.textContent } })
  const { lat: latitude, lon: longitude } = response.data[0];
  console.log(latitude, longitude)
  return { latitude, longitude }
}

const getRealtimeWeather = async () => {
  const { latitude, longitude } = await getLatLon()
  const response = await axios.get('https://weather-report-proxy-msis.onrender.com/weather', { params: { lat: latitude, lon: longitude } })
  const currTemp = response.data.main.temp
  state.temperature = Math.floor((currTemp - 273.15) * 9 / 5 + 32);
  state.tempValue.textContent = state.temperature;
  changeColorBasedOnTemp()
}
const registerEvents = () => {
  state.increaseTempControl.addEventListener('click', increaseTempBtn);
  state.decreaseTempControl.addEventListener('click', decreaseTempBtn);
  state.increaseTempControl.addEventListener('click', changeColorBasedOnTemp); state.decreaseTempControl.addEventListener('click', changeColorBasedOnTemp);
  state.currentTempButton.addEventListener('click', getRealtimeWeather)
  state.skySelect.addEventListener('change', changeSkyscape);
  state.input.addEventListener('input', changeCityName);
  state.resetButton.addEventListener('click', resetCity)
  // state.tempUnitToggle.addEventListener('change', toggleTempUnits)
}

const onLoad = () => {
  loadControls();
  registerEvents();
};

onLoad();

