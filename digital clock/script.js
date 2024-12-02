
let ampm = document.getElementById("ampm")
let dateSpan = document.getElementById("date")
let monthSpan = document.getElementById("month")
let weekSpan = document.getElementById("week");

function displayTime(){
    let dateTime = new Date()
    let hr = dateTime.getHours()
    let min = padzero(dateTime.getMinutes())
    let sec = padzero(dateTime.getSeconds())
    let date = dateTime.getDate()
    dateSpan.innerHTML=padzero(date)
    let month = dateTime.toLocaleString("default",{month:"long"});
    monthSpan.innerHTML=month
    let week = Math.ceil(dateTime.getDate() / 7);
    let ordinalWeek = getOrdinal(week);
    weekSpan.innerHTML = `${ordinalWeek} week`;
    if(hr>12){
        hr=hr-12
        ampm.innerHTML='PM'
    }
    else{
        ampm.innerHTML='AM'
    }
    document.getElementById("hours").innerHTML=padzero(hr)
    document.getElementById("minutes").innerHTML=min
    document.getElementById("seconds").innerHTML=sec
}
function padzero(num){
    return num<10?"0"+num:num
}
function getOrdinal(n) {
    if (n > 3 && n < 21) return `${n}th`; // Handle 11th-13th
    switch (n % 10) {
        case 1: return `${n}st`;
        case 2: return `${n}nd`;
        case 3: return `${n}rd`;
        default: return `${n}th`;
    }
}

setInterval(displayTime,1000)