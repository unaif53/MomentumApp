const time = document.querySelector("div #time");
const day = document.querySelector("div #date");

function getClock(){
    const date = new Date();
    const years = String(date.getFullYear());
    const months = String(date.getMonth()+1);
    const days = String(date.getDate());
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    day.innerText = `${years} / ${months} / ${days}`;
    time.innerText = `${hours} : ${minutes} : ${seconds}`;
}
getClock();
setInterval(getClock, 1000);