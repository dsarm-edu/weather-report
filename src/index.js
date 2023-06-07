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