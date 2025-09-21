function checkMobile(){
    if (mobil()) {
        if (window.innerHeight > window.innerWidth) {
            $("#rc").hide();
            $("#index_for_mobile").show();
            $("#rolam-div").css("height", "100vh");
            $("#rolam-div > h5").addClass("mt-5");
            $("#index_for_mobile > #nothing-div").addClass("mt-5 mb-5");
            $("*").css("overflow-x", "hidden");
            $("i").css("overflow-y", "hidden");
            $("main").removeClass("mt-3");
            $("#langalert").css("margin-top", "0px");
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
function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
function timeWrite(){
    const jelenlegi_datum = new Date();
    const jelenlegi_ev = jelenlegi_datum.getFullYear();
    var g_honap = monthDiff(new Date("2024-09-01"), jelenlegi_datum);
    var j_honap = g_honap - 4;
    if (g_honap >= 12) {
        let g_evek = Math.floor(g_honap / 12);
        g_honap -= g_evek * 12;
        if (g_honap != 0) {
            $("#gido_hu").text("(" + g_evek + " éve és " + g_honap + " hónapja)");
            $("#gido_en").text("(Since " + g_evek + " years and " + g_honap + " months)");
        } else {
            $("#gido_hu").text("(" + g_evek + " éve)");
            $("#gido_en").text("(Since " + g_evek + " years)");
        }
    } else {
        $("#gido_hu").text("(" + g_honap + " hónapja)");
        $("#gido_en").text("(Since " + g_honap + " months)");
    }
    if (j_honap >= 12) {
        let j_evek = Math.floor(j_honap / 12);
        j_honap -= j_evek * 12;
        if (j_honap != 0) {
            $("#jido_hu").text("(" + j_evek + " éve és " + j_honap + " hónapja)");
            $("#jido_en").text("(Since " + j_evek + " years and " + j_honap + " months)");
        } else {
            $("#jido_hu").text("(" + j_evek + " éve)");
            $("#jido_en").text("(Since " + j_evek + " years)");
        }
    } else {
        $("#jido_hu").text("(" + j_honap + " hónapja)");
        $("#jido_en").text("(Since " + j_honap + " months)");
    }
    $(".ekor").text(jelenlegi_ev - 2008);
}
function checkLang(){
    let nyelvek = navigator.languages;
    if (!nyelvek.includes('hu') && !nyelvek.includes('hu-HU')){
        if (localStorage.getItem('nyelv') == 'magyar') {
            $("#langalert").show();
        } else {
            $("#langalert").hide();
        }
    }
}