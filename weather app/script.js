// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let API_KEY = "e8392a579c6434c6cce9ef472823dc60"

getweatherdata=(city)=>{
    const URL='https://api.openweathermap.org/data/2.5/weather'

    const full_url=`${URL}?q=${city}&appid=${API_KEY}&units=imperial`
    const weatherPromise = fetch(full_url)

    return weatherPromise.then((response)=>{
        return response.json()
    })
}


function searchcity(){
    const city = document.getElementById("input").value

    getweatherdata(city)
    .then((response)=>{
        showWeatherdata(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}

showWeatherdata=(weatherData)=>{
    document.getElementById("cityname").innerText=  weatherData.name
    document.getElementById("weathertype").innerText=  weatherData.weather[0].main
    document.getElementById("temp").innerText=  weatherData.main.temp
    document.getElementById("min-temp").innerText=  weatherData.main.temp_min
    document.getElementById("max-temp").innerText=  weatherData.main.temp_max
}