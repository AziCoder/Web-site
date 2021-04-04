
function timer() {
    let Now = new Date();
    let minutes = Now.getMinutes();
    let seconds = Now.getSeconds();
    let hours = Now.getHours();
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');
    let numeral = document.getElementById('numeral');
    hour.style.transform = `translate(-50%, -85%) rotate(${hours * 30}deg)`;
    minute.style.transform = `translate(-50%, -90%) rotate(${minutes * 6}deg)`;
    second.style.transform = `translate(-50%, -75%) rotate(${seconds * 6}deg)`;
    (hours < 10) ? hours = `0${hours}` : hours;
    (minutes < 10) ? minutes = `0${minutes}` : minutes;
    numeral.innerHTML = hours + ":" + minutes;
}
setInterval(timer, 1000);