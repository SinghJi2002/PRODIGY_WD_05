const apiKey="4d6d8aa7c2d0b94bbe275b10626d3d2b"
const submit=document.getElementById('submit')
const temp=document.getElementById('temp')
const place=document.getElementById('temp-place')
const humidity_val=document.getElementById('humidity-val')
const wind_val=document.getElementById('wind-val')
const temp_img=document.getElementById('temp-img')


async function onClick(){
    let city=document.getElementById('search-bar').value
    const apiLink=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    const response=await fetch(apiLink)
    const data=await response.json()
    temp.innerText=`${data['main']['feels_like']}°C`
    place.innerText=`${city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}`
    humidity_val.innerText=`${data['main']['humidity']}%`
    wind_val.innerText=`${data['wind']['speed']}km/h`
    temp_img.src=`images/${data['weather'][0]['main'].toLowerCase()}.png`
    console.log(data)
}

submit.addEventListener('click',onClick)