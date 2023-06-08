let count = 50

const increaseTempBtn = () => {
  const increaseTempControl = document.getElementById('increaseTempControl');
  const currentTempButton = document.getElementById('currentTempButton');
  count += 1;
  tempValue.textContent = `${count}`;
};

increaseTempControl.addEventListener('click', increaseTempBtn);

const decreaseTempBtn = () => {
  const decreaseTempControl = document.getElementById('decreaseTempControl');
  const currentTempButton = document.getElementById('currentTempButton');
  count -= 1;
  tempValue.textContent = `${count}`;
};

decreaseTempControl.addEventListener('click', decreaseTempBtn);

const changeColorBasedOnTemp = () => {
  const tempValue = document.getElementById('tempValue');
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


increaseTempControl.addEventListener('click', changeColorBasedOnTemp);
decreaseTempControl.addEventListener('click', changeColorBasedOnTemp);


const changeCityName = () => {
  
  const input = document.getElementById('inputCityName');
  const headerCityName = document.getElementById('headerCityName');
  input.addEventListener("input", () => {
    headerCityName.textContent = input.value;
  });
  
}

changeCityName();

