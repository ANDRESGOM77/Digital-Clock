setInterval(()=>{
    //getting all the id from the html
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let amPm = document.getElementById("ampm");
    
    //getting the current time
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    
    // the time pf the day will change depending if hour is bigger than 12
    let am = hour >= 12 ? "PM" : "AM";
    
    //converting 24h to 12h clock
    hour = hour > 12 ? hour - 12 : hour;
    
    //adding 0 before the minute and second if they are less than 10
    hour = hour< 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    
    // putting the hour, minute , second on the html
    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;
    amPm.innerHTML = am;
})

