var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=50a7aa80fa492fa92e874d23ad061374`)
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var imageValue = data['weather']['0']['icon']


  // console.log(imageValue)

  main.innerHTML = nameValue;
clouds.src = `http://openweathermap.org/img/w/${imageValue}.png`

  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = `Temp - ${tempValue}<sup>&deg;</sup>C`;
  
  input.value ="";
}).catch(err => alert("Wrong city name!"));
})
