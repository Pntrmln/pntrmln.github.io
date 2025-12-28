var magyar = false;
var ap = document.getElementById("ap");
ap.volume = 0.3;


function changeText(){
    if (!magyar) {
        if ($(window).width() < 750 ) {
            $("#ct").html('Fejlesztés');
            $("#apdiv > .column.left > p").html("【初音ミク】 ヒビカセ")
        } else {
            $("#ct").html('Weboldal fejlesztés alatt!');
            $("#apdiv > .column.left > p").html("Lejátszva: 【初音ミク】 ヒビカセ (részlet, ism.)")
        }
        magyar = true;
    } else {
        if ($(window).width() < 750 ) {
            $("#ct").html('Construction');
            $("#apdiv > .column.left > p").html("【初音ミク】 ヒビカセ")
        } else {
            $("#ct").html('Website is under construction!');
            $("#apdiv > .column.left > p").html("Playing: 【初音ミク】 ヒビカセ (clip, loop)")

        }
        magyar = false;
    }
    setTimeout(changeText, 2000);
}

function showPlaying(b){
    if (b){
        $(".fa-play").css("display", "none");
        $("#nbr").remove();
        $("#apdiv").css("display", "block");
        $("#apdiv > .column.right").html('<i onclick="showPlaying(false)" class="fa-regular fa-pause fa-2x"></i>')
        ap.play();
    } else {
        ap.pause();
        $(".fa-pause").remove();
        $("#apdiv > .column.right").html('<i onclick="showPlaying(true)" class="fa-regular fa-play fa-2x"></i>')
    }
}