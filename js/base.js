const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  //get the degree for each second - add 90 to offset the 90 degree rotate which was included in the css
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes/60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;


  const hours = now.getHours();
  const hourDegrees = ((hours/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;


}

//Call the setDate() every second
setInterval(setDate, 1000);
