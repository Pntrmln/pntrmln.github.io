var magyar = false;

function changeText(){
    if (!magyar) {
        if ($(window).width() < 600 ) {
            $("#ct").html('<i class="fa fa-wrench"></i><br>Fejlesztés');
        } else {
            $("#ct").html('<i class="fa fa-wrench"></i> Weboldal fejlesztés alatt! <i class="fa fa-wrench"></i>');
        }
        magyar = true;
    } else {
        if ($(window).width() < 600 ) {
            $("#ct").html('<i class="fa fa-wrench"></i><br>Construction');
        } else {
            $("#ct").html('<i class="fa fa-wrench"></i> Website is under construction! <i class="fa fa-wrench"></i>');
        }
        magyar = false;
    }
    setTimeout(changeText, 2000);
}