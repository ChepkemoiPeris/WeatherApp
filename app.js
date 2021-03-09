let long;
let lat;
let temparatureDescription = document.querySelector(".description");
let temperatureDegree = document.querySelector(".degree");
let locationTimezone = document.querySelector(".timezone");
let icon= document.querySelector(".icon")

window.addEventListener('load',async ()=>{

await updateWeather()
setInterval(async function(){ 
await updateWeather()   
}, 
3000);

});

updateWeather= async ()=>{
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.weatherapi.com/v1/current.json?key=c8a976ad2a524e90b1f180650210503&q=0.5117561,35.1991714`;
            fetch(api).then(response =>{
                return response.json()
            })
            .then(data =>{
                console.log(data);
                temperatureDegree.innerHTML=data.current.temp_c;
                temparatureDescription.innerHTML=data.current.condition.text;
                locationTimezone.innerHTML=data.location.name +","+data.location.country ;
               icon.innerHTML=`<img src="${data.current.condition.icon}" alt="Icon"/>`
            })
        });
        
        }else{
            h1.textContent="Hey this is not working check and try again"
        }
}