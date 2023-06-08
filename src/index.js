
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

  if (count >= 80) {
    tempValue.classList.add('red');
  } else if (count >= 70 && count <= 79) {
    tempValue.classList.add('orange');
  } else if (count >= 60 && count <= 69) {
    tempValue.classList.add('yellow');
  } else if (count >= 50 && count <= 59) {
    tempValue.classList.add('green');
  } else if (count <= 49) {
    tempValue.classList.add('teal');
  }

  tree[0].classList.toggle('show', count <= 49)
  garden.classList.toggle('snowy-sky', count <= 49)
  ground[0].classList.toggle('snowy', count <= 49);

  tree[2].classList.toggle('show', count >= 50 && count <= 64);
  ground[0].classList.toggle('cloudy', count >= 50 && count <= 64);
  garden.classList.toggle('cloudy-sky', count >= 50 && count <= 64);

  tree[1].classList.toggle('show', count >= 65 && count <= 75)

  tree[3].classList.toggle('show', count > 75);
  ground[0].classList.toggle('sunny', count > 75);
};


const changeSkyscape = () => {
  sky[0].textContent = '';
  // CLOUDY
  if (skySelect.value === 'cloudy') {
    sky[0].textContent = '🌾🍃🌾';
  }
  // SUNNY
  if (skySelect.value === 'sunny') {
    sky[0].textContent = '☀️😎☀️';
  }

  // SNOWY
  if (skySelect.value === 'snowy') {
    sky[0].textContent = '❄️🥶❄️'
  }

  // RAINY
  if (skySelect.value === 'rainy') {
    sky[0].textContent = '💧☔️💧'
  }


  cloud[0].classList.toggle('show', skySelect.value === 'cloudy' || skySelect.value === 'rainy');
  cloud[1].classList.toggle('show', skySelect.value === 'cloudy' || skySelect.value === 'rainy');

}

const registerEvents = () => {
  increaseTempControl.addEventListener('click', increaseTempBtn);
  decreaseTempControl.addEventListener('click', decreaseTempBtn);
  increaseTempControl.addEventListener('click', changeColorBasedOnTemp);
  decreaseTempControl.addEventListener('click', changeColorBasedOnTemp);

  skySelect.addEventListener('change', changeSkyscape);
  currentTempButton.addEventListener('click', getRealtimeWeather)
  // currentTempButton.addEventListener('click', getLatLon)
}




const changeCityName = () => {

  const input = document.getElementById('inputCityName');
  const headerCityName = document.getElementById('headerCityName');
  input.addEventListener("input", () => {
    headerCityName.textContent = input.value;
  });

}

changeCityName();


const getLatLon = async () => {
  const response = await axios.get('http://127.0.0.1:5000/location', { params: { q: headerCityName.textContent } })
  const { lat: latitude, lon: longitude } = response.data[0];
  console.log(latitude, longitude)
  return  { latitude, longitude }
}

const getRealtimeWeather = async () => {
  const {latitude , longitude} = await getLatLon()
  const response = await axios.get('http://127.0.0.1:5000/weather', { params: {lat: latitude, lon: longitude}})
  const currTemp = response.data.main.temp
  count = Math.floor((currTemp - 273.15) * 9/5 + 32);
  tempValue.textContent = count;
  changeColorBasedOnTemp()
}

onLoad = () => {
  loadControls();
  registerEvents();
};

onLoad();
