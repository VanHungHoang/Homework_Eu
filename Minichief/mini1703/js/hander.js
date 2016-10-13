function countChar(val){
    var len = val.value.length;
    if (len >= 100) {
        val.value = val.value.substring(0, 100);
        alert("NumberCharater > 100");
    } else {
        $('#charNum').text(100 - len);
    }
};

