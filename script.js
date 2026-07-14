"use strict";

// Selecting elements
const clockApp = document.querySelector(".app");
const displayClock = document.querySelector(".clock");
const greetingMsg = document.querySelector(".greeting");
const displayDate = document.querySelector(".date");

// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const updateClock = function () {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const day = now.getDay();

  const formattedHours = hours < 10 ? `0${hours}` : hours;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  displayClock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  displayDate.textContent = `${days[day]}, ${date} ${months[month]} ${year}`;

  if (hours < 12) {
    greetingMsg.textContent = `Good Morning, 🌄 `;
  } else if (hours >= 12 && hours < 17) {
    greetingMsg.textContent = `Good Afternoon, ☀️ `;
  } else if (hours >= 17) {
    greetingMsg.textContent = `Good Evening, 🌙 `;
  }
};

updateClock();
setInterval(updateClock, 1000);
