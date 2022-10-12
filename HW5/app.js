let day="";     
let weather=""; 



function dayWeather(){  
    if(day!=="" && weather!==""){
        const text = document.querySelector(".text");
        text.innerText= weather+" "+day+"요일이에요!";

        if(weather==="하늘이 맑은"){
            document.body.style.backgroundColor = "skyblue";
        }
        else if(weather==="미세먼지가 많은"){
            document.body.style.backgroundColor = "gray";
        }
        else if(weather==="폭염주의보가 내린"){
            document.body.style.backgroundColor = "orange";
        }
    }
}


const week = document.querySelectorAll(".week");

week[0].addEventListener("click",handleMonClick); 
week[1].addEventListener("click",handleTueClick);
week[2].addEventListener("click",handleWedClick);
week[3].addEventListener("click",handleThuClick);
week[4].addEventListener("click",handleFriClick);


function handleMonClick(){  
    day = week[0].innerText;    
    dayWeather();    
}
function handleTueClick(){  
    day = week[1].innerText;
    dayWeather();
}
function handleWedClick(){  
    day = week[2].innerText;
    dayWeather();
}
function handleThuClick(){  
    day = week[3].innerText;
    dayWeather();
}
function handleFriClick(){  
    day = week[4].innerText;
    dayWeather();
}


const weat = document.querySelectorAll(".weather");

weat[0].addEventListener("click",handleSunnyClick); 
weat[1].addEventListener("click",handleCloudClick);
weat[2].addEventListener("click",handleRainClick);

function handleSunnyClick(){    
    weather = weat[0].innerText;
    dayWeather();
}

function handleCloudClick(){    
    weather = weat[1].innerText;
    dayWeather();
}

function handleRainClick(){    
    weather = weat[2].innerText;
    dayWeather();
}
