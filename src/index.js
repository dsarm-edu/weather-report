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
  


  if(count >= 90) {
    tempValue.style.color = 'red';
  } else if(temperature >= 70 && temperature >= 79) {
    tempValue.style.color = 'orange';
  } else if(temperature >= 60 && temperature >= 69) {
    tempValue.style.color = 'yellow';
  } else if(temperature >= 50 && temperature >= 59) {
    tempValue.style.color = 'green'
  } else if(count <= 49) {
    tempValue.style.color = 'teal';
  }
};

// add the color classes here


// changeColorBasedOnTemp();
// document.getElementById('tempValue').style.color = "red";
increaseTempControl.addEventListener('click', changeColorBasedOnTemp);
decreaseTempControl.addEventListener('click', changeColorBasedOnTemp);