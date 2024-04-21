const input=document.getElementById('input')
const button=document.getElementById('search')
const country=document.getElementById('country')
const time=document.getElementById('time')
const city=document.getElementById('city')
const state=document.getElementById('state')
const cloud=document.getElementById('cloud')
const pressure=document.getElementById('pressure')
const visibility=document.getElementById('visibility')
const uv=document.getElementById('uv')
const wind=document.getElementById('wind')
const text=document.getElementById('text')
const temp=document.getElementById('temp')
const icon=document.getElementById('text-icon');

async function findWeather(city)
{
        try{
            const response=await fetch(`http://api.weatherapi.com/v1/current.json?key=ce7051ff107c4605a7371506240404&q=${city}&aqi=yes`)

            const data= await response.json()
            return data
        }
        catch(err){
                console.log(alert("You are not connected to internet"))
         }
}

button.addEventListener('click',async (e)=>{
        const cityName=input.value
        const result=await findWeather(cityName)
        const {current,location}=result;
        console.log(current)
        // location
        country.textContent=location.country
        state.textContent=location.region
        city.textContent=location.name
        time.textContent=location.localtime

        // current
        humidity.innerHTML=`${current.humidity} %`   
        wind.innerHTML=` '${current.wind_dir}' ${current.wind_kph} KM/H`    
        text.innerHTML=`${current.condition.text} <img src=${current.condition.icon} alt='weather icon'>`
        temp.innerHTML=`${current.temp_c}  °C`     
        pressure.innerHTML=`${current.pressure_mb} mBar`
        visibility.innerHTML=`${current.vis_km} km`
        uv.innerHTML=`${current.uv} `
})