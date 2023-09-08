// let btn=document.querySelector(".submit");
// let inputField=document.querySelector(".input_text");
// let name=document.querySelector(".name");
// let temp=document.querySelector(".temp");
// let desc=document.querySelector(".desc");
// let url=""


// btn.addEventListener("click",function(){
//     fetch(url)
//     .then(response => response.json())
//     .then(data=>{
//         var nameValue = data['name'];
//         var tempValue = data['main']['temp'];
//         var descValue = nameValue;
//         name.innerHTML = nameValue;
//         temp.innerHTML = tempValue;
//         desc.innerHTML = descValue;
//     })
// })



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc8603873bmsha405251dd6b5d07p17f01cjsn59a0f34e3541',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



const getWheather = (city) => {

    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad',options)
      .then(response => response.json())
      .then(response => {
        console.log(response) 
        temp.innerHTML = response.temp
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
    
      })
      
      .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWheather(city.value)
})

getWheather("Delhi");