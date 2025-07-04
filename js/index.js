function Redir(site){
    if (site == 'instagram') {
        window.open("https://www.instagram.com/pinter.hun");
    } else if (site == 'spotify') {
        window.open("https://open.spotify.com/user/bwbxjzmw49w9v00p76vkauzaj");
    } else if (site == 'github') {
        window.open("https://github.com/pntrmln");
    } else if (site == 'anime') {
        window.location.href = "anime.html";
    } else {
        window.location.href = "404.html";
    }
}
function checkMobile(){
    if (navigator.userAgentData.mobile) {
        if (window.innerHeight > window.innerWidth) {
            $("#rc").hide();
            $("#index_for_mobile").show();
            $("#rolam-div").css("height", "100vh");
            $("#rolam-div > h5").addClass("mt-5");
            $("#index_for_mobile > #nothing-div").addClass("mt-5 mb-5");
            checkMobileB();
        } else {
            $("#index_for_mobile").hide();
            $(".std_redir_btn").css("margin-left", "2px");
        }
    }
    // AMÍG A PROJEKTEK NINCSENEK A HELYÉN
    let divMagassag = $("#rolam-div").outerHeight();
    $("#nothing-div").height(divMagassag);
}