const btnGetWeather = document.getElementById('btnGetWeather')
const citySearch = document.getElementById('city')
let cityFound = {}

btnGetWeather.addEventListener('click', () => {
    console.log('@@@ city => ', citySearch)
    if(citySearch.value.trim().length > 0){
        getWeather(citySearch.value)
    } else {
        alert('Ciudad vacia')
        citySearch.focus()
    }
})


const newData = () => {
    const city = document.getElementById('newCity')
    city.textContent = cityFound.city

    const hora = document.getElementById('hora')
    hora.textContent = cityFound.last_update

    const temp = document.getElementById('temperatura')
    temp.textContent = cityFound.temp + '°C'

    const current_weather = document.getElementById('climaActual')
    current_weather.textContent = cityFound.current_weather

    const wind = document.getElementById('wind')
    wind.textContent = cityFound.wind

    const humidity = document.getElementById('humidity')
    humidity.textContent = cityFound.humidity
    
    const expected_temp = document.getElementById('expected_temp')
    expected_temp.textContent = cityFound.expected_temp
}