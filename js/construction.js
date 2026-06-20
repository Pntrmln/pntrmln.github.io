var magyar = false;
$("#ap")[0].volume = 0.3;

function changeText(){
    if (!magyar) {
        if ($(window).width() < 750 ) {
            $("#ct").html('Fejlesztés');
            $("#apdiv > .column.left > p").html("---")
        } else {
            $("#ct").html('Weboldal fejlesztés alatt!');
            $("#apdiv > .column.left > p").html("Lejátszva: ---")
        }
        magyar = true;
    } else {
        if ($(window).width() < 750 ) {
            $("#ct").html('Construction');
            $("#apdiv > .column.left > p").html("---")
        } else {
            $("#ct").html('Website is under construction!');
            $("#apdiv > .column.left > p").html("Playing: ---")

        }
        magyar = false;
    }
    setTimeout(changeText, 2000);
}

function showPlaying(b){
    if (b){
        $(".fa-play").removeClass("fa-play").addClass("fa-pause").attr("onclick", "showPlaying(false)");
        $("#nbr").remove();
        $("#apdiv").css("display", "block");
        $("#ap")[0].play();
    } else {
        $("#ap")[0].pause();
        $(".fa-pause").removeClass("fa-pause").addClass("fa-play").attr("onclick", "showPlaying(true)");
    }
}

function setVolumeChangerLocation(){
    let x = $(".fa-volume").position().left;
    let y = $(".fa-volume").position().top;
    $("#hangeroChanger").css({
        left: x - 40 + "px",
        top: y - 80 + "px"
    });
}

var latszik = false;
function showVolume(){
    if (!latszik){
        $("#hangeroChanger").show();
        setVolumeChangerLocation();
    } else {
        $("#hangeroChanger").hide();
    }
    latszik = !latszik;
}

$(window).on("resize", function() {
    setVolumeChangerLocation();
});

$(".left").each(function(){
    let mar = $(this);
    let indent = mar.width();
    mar.marquee = function() {
        indent--;
        mar.css('text-indent',indent);
        if (indent < -1500) {
            indent = mar.width();
        }
    };
    mar.data('interval',setInterval(mar.marquee,1000/60));
});

$('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rizmyabdulla/fontawesome-pro@main/releases/v7.2.0/css/fontawesome.css" /><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rizmyabdulla/fontawesome-pro@main/releases/v7.2.0/css/solid.css" /><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rizmyabdulla/fontawesome-pro@main/releases/v7.2.0/css/brands.css"/>').appendTo("head");