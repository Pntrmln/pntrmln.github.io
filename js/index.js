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
        if (window.innerHeight > window.innerWidth) {
            $("#rc").hide();
            $("#index_for_mobile").show();
            $("#rolam-div").css("height", "100vh");
            $("#rolam-div > h5").addClass("mt-5");
            $("#index_for_mobile > #nothing-div").addClass("mt-5 mb-5");
            // MAJD EZT A 3 SORT INNEN KISZEDNI, HA VAN MEGOLDÁS!
            $("footer > a").eq(0).html('<i class="fa-solid fa-gear"></i>');
            $("footer > a").eq(1).html('<i class="fa-solid fa-lock"></i>');
            $("footer > a").eq(0).attr("onclick", "event.preventDefault()");  

        } else {
            $("#index_for_mobile").hide();
            $(".std_redir_btn").css("margin-left", "2px");
        }
        // $("main").hide();
        // $("nav").after("<main class='text-center mt-3'><p><span lang='hu'>Ez az oldal jelenleg még nem elérhető telefonos felhasználóknak.</span><span lang='en'>This website is not available yet for mobile users.</span></p></main>");
        // $("footer > h6").hide();
        // $('span[lang]').hide();
        // $('span[lang="hu"]').show();
    }
    // AMÍG A PROJEKTEK NINCSENEK A HELYÉN
    let divMagassag = $("#rolam-div").outerHeight();
    $("#nothing-div").height(divMagassag);
}