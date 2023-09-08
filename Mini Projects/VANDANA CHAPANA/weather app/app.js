var input=document.querySelector('.input_text');
var main=document.querySelector('#name');
var temp=document.querySelector('.temp');
var desc=document.querySelector('.desc');
var clouds=document.querySelector('.clouds');
var button=document.querySelector('.submit');

button.addEventListener('click',function(){
    fetch()
    .then(response => response.json())
    .then(data => {
        var tempValue =data['main']['temp'];
        var nameValue =data['name'];
        var descValue = data['weather'][0]['description'];
        var imageValue =data['weather']['0']['icon']

        // console.log(imageVale)
        main.innerHTML =nameValue;
        temp.innerHTML=`Temp -${tempValue}<sup>&deg;</sup>c`;
    // temp.style.display="inline"
    input.value="";
    }).catch(err => alert("wrong city name!"));
})

