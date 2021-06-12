// --------- Navbar --------- //
let menuBtn = document.getElementById("menuBtn");
let linkNav = document.getElementById("linkNav");

menuBtn.addEventListener("click",function(){
    linkNav.classList.toggle("d-flex");
});



// box1
let deg1 = document.getElementById("deg1");
let icon1Img = document.getElementById("icon1Img");
let weatherStatus = document.getElementById("weatherStatus");
let windIcn = document.getElementById("windIcn");
let umberellaIcn = document.getElementById("umberellaIcn");
// box2
let icon2Img = document.getElementById("icon2Img");
let deg2 = document.getElementById("deg2");
let deg2Small = document.getElementById("deg2-s");
let weatherStatus2 = document.getElementById("weatherStatus2");
let windIcn2 = document.getElementById("windIcn2");
let umberellaIcn2 = document.getElementById("umberellaIcn2");
// box3
let icon3Img = document.getElementById("icon3Img");
let deg3 = document.getElementById("deg3");
let deg3Small = document.getElementById("deg3-s");
let weatherStatus3 = document.getElementById("weatherStatus3");
let windIcn3 = document.getElementById("windIcn3");
let umberellaIcn3 = document.getElementById("umberellaIcn3");



// --------- Get API's --------- //
async function getApi(city){
    // get API
    let apiDATA = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d8853f7e6f244cf49c4153840210305&q=${city}&days=7`);
    let weatherApi = await apiDATA.json();

    // Box 1
    deg1.innerHTML = weatherApi.current.temp_c + " oC" ;
    icon1Img.setAttribute("src",`${weatherApi.current.condition.icon}`) ;    
    weatherStatus.innerHTML = weatherApi.current.condition.text ;
    windIcn.innerHTML = weatherApi.current.wind_degree + " %" ;
    umberellaIcn.innerHTML = weatherApi.current.wind_kph + " km/h" ;
    
    // Box 2
    deg2.innerHTML = weatherApi.forecast.forecastday[1].day.maxtemp_c + " oC" ;
    weatherStatus2.innerHTML = weatherApi.forecast.forecastday[1].day.condition.text ;
    deg2Small.innerHTML = weatherApi.forecast.forecastday[1].day.mintemp_c ;
    icon2Img.setAttribute("src",`${weatherApi.forecast.forecastday[1].day.condition.icon}`);
    windIcn2.innerHTML = weatherApi.forecast.forecastday[1].day.maxwind_mph + " %" ;
    umberellaIcn2.innerHTML = weatherApi.forecast.forecastday[1].day.maxwind_kph + " km/h" ;

    // Box 3
    deg3.innerHTML = weatherApi.forecast.forecastday[2].day.maxtemp_c + " oC" ;
    weatherStatus3.innerHTML = weatherApi.forecast.forecastday[2].day.condition.text;
    deg3Small.innerHTML = weatherApi.forecast.forecastday[2].day.mintemp_c;
    icon3Img.setAttribute("src",`${weatherApi.forecast.forecastday[2].day.condition.icon}`);
    windIcn3.innerHTML = weatherApi.forecast.forecastday[2].day.maxwind_mph + " %" ;
    umberellaIcn3.innerHTML = weatherApi.forecast.forecastday[2].day.maxwind_kph + " km/h" ;
};


// --------- defualtCity "self-invoke" --------- //
let cityName = document.getElementById("cityName");

(function defualtCity(){
    let defualtCity = "cairo"
    getApi(defualtCity)
    cityName.innerHTML = defualtCity 
})();


// --------- Home --------- //
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

// **** searchInput **** //
searchInput.addEventListener("keyup",function(){
    let searchValue = `${searchInput.value}`;
    getApi(searchValue)
    cityName.innerHTML = searchInput.value
});

// **** searchBtn **** //
searchBtn.addEventListener("click",function(){
    let searchValue = `${searchInput.value}`;
    getApi(searchValue)
    cityName.innerHTML = searchInput.value
});

// --------- get Date INFO--------- //
let daysName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthsName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let currentDate = new Date();
let month = monthsName[currentDate.getMonth()];
let todayName = daysName[currentDate.getDay()];
let hour = currentDate.getHours();
let todayDate = currentDate.getDate();

// --------- weatherScreen --------- //
// the head of box 1,2,3
let currentday1 = document.getElementById("currentday1");
let currentday2 = document.getElementById("currentday2");
let currentday3 = document.getElementById("currentday3");
let currentdate1 = document.getElementById("currentdate1");
// ----------------
// box 1 
currentday1.innerHTML = todayName ;
currentdate1.innerHTML = todayDate + month ;

// box 2
(function getTomorrow(){
    if(currentDate.getDay() < 6){
        let theDay = currentDate.getDay()        
        currentday2.innerHTML = daysName[theDay + 1]

    } else{
        currentday2.innerHTML = daysName[0]
    }    
})();

// box 3
(function getAfterTomorrow(){
    if(currentDate.getDay() < 6){
        let theDay = currentDate.getDay()        
        currentday3.innerHTML = daysName[theDay + 2]

    } else{
        currentday3.innerHTML = daysName[1]
    }
})();