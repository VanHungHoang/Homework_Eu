var keylist="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*" 

function generatepass(plength){
    var tmp = "";
    for(i = 0; i < plength; i++){
        tmp += keylist.charAt(Math.floor(Math.random()*keylist.length));
    }
    return tmp;
}
        
function populateform(enterlength){
    document.formpassGen.txtpass.value = generatepass(enterlength);
}