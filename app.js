const APYKEY ='3a959f89fe1ec4eb67f3f3020922c16a';

let callApi=function(city){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APYKEY}&units=metric&lang=fr`;
    fetch(url).then(response => response.json().then((data) =>{
        console.log(data);
        document.querySelector('#city').innerHTML=data.name;
        document.querySelector('#country').innerHTML=data.sys.country;
        document.querySelector('#temp').innerHTML="<i class='fa-solid fa-temperature-half'></i>" + data.main.temp + 'deg';
        document.querySelector('#humidity').innerHTML="<i class='fa-solid fa-droplet'></i>" + data.main.humidity+ '%';
        document.querySelector('#wind').innerHTML="<i class='fa-solid fa-wind'></i>" + data.wind.speed+ 'km/h';
    })) 
};

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let ville = document.querySelector('#sitySearch').value;

  callApi(ville);
});

callApi('libreville');