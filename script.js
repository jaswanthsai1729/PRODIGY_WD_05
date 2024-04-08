const apiKey="05b65960f95487461f12a40dc7d39327";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBoxEL=document.querySelector(".search input");
const searchBtnEL=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
const card = document.querySelector(".card");

async function checkWeather(city){
	const response= await fetch(apiUrl+city+`&appid=${apiKey}`);
	var data= await response.json();

	if(response.status==404 || searchBoxEL.value===""){
		document.querySelector(".error").style.display="block";
		document.querySelector(".weather").style.display="none";
		card.style.backgroundColor = "transparent";
		card.style.backgroundImage ="none";
	}
	else{
		console.log(data);
	document.querySelector(".city").innerHTML= data.name;
	document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
	document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
	document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
	
	if (data.weather[0].main=="Clouds"){
		weatherIcon.src="images/clouds.png";
	}
	else if (data.weather[0].main=="Clear"){
		weatherIcon.src="images/clear.png";
	} 
	else if (data.weather[0].main=="Rain"){
		weatherIcon.src="images/rain.png";
	} 
	else if (data.weather[0].main=="Drizzels"){
		weatherIcon.src="images/drizzel.png";
	}
	else if (data.weather[0].main=="Mist"){
		weatherIcon.src="images/mist.png";
	} 
	else if (data.weather[0].main=="Snow"){
		weatherIcon.src="images/snow.png";
	}

	document.querySelector(".weather").style.display="block";
	document.querySelector(".error").style.display="none";
	// card.style.backgroundImage = "url('images/milkyway.jpg')";
	card.style.backgroundColor="rgba(99, 190, 242, 0.5)";
	
	}

	
}

searchBtnEL.addEventListener("click",()=>{
	checkWeather(searchBoxEL.value);
})
searchBoxEL.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
	  event.preventDefault(); // Prevent form submission
	  checkWeather(searchBoxEL.value);
	}
  });