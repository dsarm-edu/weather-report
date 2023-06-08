
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

  tree[0].classList.toggle('show', temperature <= 49)
  garden.classList.toggle('snowy-sky', temperature <= 49)
  ground[0].classList.toggle('snowy', temperature <= 49);

  tree[2].classList.toggle('show', temperature >= 50 && temperature <= 64);
  ground[0].classList.toggle('cloudy', temperature >= 50 && temperature <= 64);
  garden.classList.toggle('cloudy-sky', temperature >= 50 && temperature <= 64);

  tree[1].classList.toggle('show', temperature >= 65 && temperature <= 75)

  tree[3].classList.toggle('show', temperature > 75);
  ground[0].classList.toggle('sunny', temperature > 75);
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
  return  latitude, longitude 
}

const getRealtimeWeather = async () => {
  let lat = getLatLon()[0];
  let lon = getLatLon()[1]
  const response = await axios.get('http://127.0.0.1:5000/weather', { params: {lat: lat, lon: lon}})
  console.log(response)
}


onLoad = () => {
  loadControls();
  registerEvents();
};

onLoad();
