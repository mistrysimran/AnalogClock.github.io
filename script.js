const hour = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')

function displayTime()
{
    let date =  new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hRotation = 30*h + m/2;
    let mRotation = 6*m;
    let sRotation = 6*s;

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime,1000)
displayTime()