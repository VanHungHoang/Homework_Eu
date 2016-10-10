function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    var color = '#' + h  + m  + s;

    var col = document.getElementById("tickyclock").innerHTML = h + ":" + m + ":" + s;
    document.getElementById("bd").style.backgroundColor = color;
    var t = setTimeout(function(){ startTime() }, 1000);
    
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
