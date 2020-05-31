function showtime(){
    var date = new Date() ;
    var hours = date.getHours() ;
    var minutes = date.getMinutes() ;
    var seconds = date.getSeconds() ;
    var sessions = "AM";
    if(hours>12) {
        hours = hours-12 ;
        sessions = "PM" ;
    }
    hours = hours<10 ? "0" + hours : hours;
    minutes = minutes<10 ? "0" + minutes : minutes;
    seconds = seconds<10 ? "0" + seconds : seconds;
    var time = hours + ":" + minutes + ":" + seconds + sessions
    document.getElementById("Clock").innerHTML=time ;
    setTimeout(showtime,1000)
}

showtime();

