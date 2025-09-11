var magyar = false;

function changeText(){
    if (!magyar) {
        if ($(window).width() < 600 ) {
            $("#ct").html('Fejlesztés');
        } else {
            $("#ct").html('Weboldal fejlesztés alatt!');
        }
        magyar = true;
    } else {
        if ($(window).width() < 600 ) {
            $("#ct").html('Construction');
        } else {
            $("#ct").html('Website is under construction!');
        }
        magyar = false;
    }
    setTimeout(changeText, 2000);
}