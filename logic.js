function displayTime(){
    var wrapper = document.querySelector(".wrapper");
    var hours = document.querySelector("#hours");
    var minutes = document.querySelector("#minutes");
    var seconds = document.querySelector("#seconds");
    var day = document.querySelector("#day");
    var now = new Date();
        
    var h = now.getHours(),
            m = now.getMinutes(),
            s = now.getSeconds();
    var dateToday = now.getDate();

    if(dateToday<10){
        dateToday = "0"+dateToday;
    } else{
        dateToday = dateToday;
    }

            if(h<10){
                hours.textContent = "0"+h;
            } else{
                hours.textContent = h;
            }

            if(m<10){
                minutes.textContent = "0"+m;
            } else{
                minutes.textContent = m;
            }

            if(s<10){
                seconds.textContent = "0"+s; 
            } else{
                seconds.textContent = s;
            }

            var daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var month = ["January","February","March","May","June","July","August","September","October","November","December"];
            day.textContent = daysOfTheWeek[now.getDay()]+", "+dateToday+" "+month[now.getMonth()];
    }
window.setInterval(displayTime, 100);