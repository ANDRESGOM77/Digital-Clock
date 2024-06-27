setInterval(() => {
  //getting all the id from the html
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let amPm = document.getElementById("ampm");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");
  //getting the current time
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();

  // the time pf the day will change depending if hour is bigger than 12
  let am = hour >= 12 ? "PM" : "AM";

  // dots from the clock
  let hr_dot = document.getElementById('hr_dot');
  let min_dot = document.getElementById('min_dot');
  let sec_dot = document.getElementById('sec_dot');
  //converting 24h to 12h clock
  hour = hour > 12 ? hour - 12 : hour;

  //adding 0 before the minute and second if they are less than 10
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  // putting the hour, minute , second on the html
  hours.innerHTML = hour + '<br><span>hours</span>';
  minutes.innerHTML = minute + '<br><span>minutes</span>';
  seconds.innerHTML = second + '<br><span>seconds</span>';
  amPm.innerHTML = am;

  hh.style.strokeDashoffset = 440 - (440 * hour) / 12;
  mm.style.strokeDashoffset = 440 - (440 * minute) / 60;
  ss.style.strokeDashoffset = 440 - (440 * second) / 60;

  hr_dot.style.transform = `rotate(${hour * 30}deg)`;
  min_dot.style.transform = `rotate(${minute * 6}deg)`;
  sec_dot.style.transform = `rotate(${second * 6}deg)`;
});
