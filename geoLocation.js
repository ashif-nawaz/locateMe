let long = document.querySelector("#one");
let latt = document.querySelector("#two");


setTimeout(() => {
    if(window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition(showLocation, errorLocation);
   }else{
       alert("Geolocation is not supported.");
   }
}, 10000);



function showLocation(position){
    latt.innerHTML += position.coords.latitude;
    long.innerHTML += position.coords.longitude;  
}

function errorLocation(error){
    switch(error.code){
        case error.PERMISSION_DENIED: alert("Permission was denied form user");
                                       break;
        case error.TIMEOUT: alert("Timeout");
                                  break;
        case error.POSITION_UNAVAILABLE: alert("User position not available");
                                     break;
        case error.UNKNOWN_ERROE: alert("An unknown error occured");
                                   break;
    }
}