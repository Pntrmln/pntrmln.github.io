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
// AMÍG A TELEFONOS UI NINCS KÉSZ
function checkMobile(){
    if (navigator.userAgentData.mobile) {
        $("main").hide();
        $("nav").after("<main class='text-center mt-3'><p><span lang='hu'>Ez az oldal jelenleg még nem elérhető telefonos felhasználóknak.</span><span lang='en'>This website is not available yet for mobile users.</span></p></main>");
        $("footer > h6").hide();
        $('span[lang]').hide();
        $('span[lang="hu"]').show();
    }
    // AMÍG A PROJEKTEK NINCSENEK A HELYÉN
    let divMagassag = $("#rolam-div").outerHeight();
    $("#nothing-div").height(divMagassag);
}