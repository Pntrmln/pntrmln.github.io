$("nav").append('<a><i class="fa-solid fa-bars fa-2x" onclick="showMenu()" title="Menü"></i></a> <a href="index.html" id="main_a"><h3 id="n_main">Pntrmln<br> <p id="gh">.hu</p></h3></a> <a><i class="fa-solid fa-language fa-2x" onclick="languageChange()" title="English | Magyar"></i></a></div>')
$("nav").after(' <div class="navbar text-center" id="menupontok"> <a href="social.html"> <i class="fa-solid fa-users"> </i> <p class="mpont_pc"><span lang="hu">Linkek és kapcsolat</span><span lang="en">Links and contact</span></p> </a> <a href="japanese.html"> <i class="fa-solid fa-torii-gate"></i>  <p class="mpont_pc"><span lang="hu">Japán tanulás</span><span lang="en">Learning Japanese</span></p> </a> <a href="osszefoglalok/index.html"> <i class="fa-solid fa-file"> </i>  <p class="mpont_pc"><span lang="hu">Összefoglalók</span><span lang="en">Exam PDFs</span></p> </a>');
$("footer").append('<h6><span lang="hu">Készítette: Pintér Milán, 2026</span><span lang="en">Created by Milán Pintér, 2026</span></h6><div class="navbar" id="footer_nav"><a href="" onclick="Settings(event)"><i class="fa-solid fa-gear"></i></a><a href="privacy.html"><i class="fa-solid fa-lock"></i></a></div>')
var magyar;
var oldal = location.href.split("/").slice(-1).toString();
var fxd = "";
if (oldal.includes("?")){
    for (i of oldal){
        if (i == "?"){
            oldal = fxd;
            break;
        } else {
            fxd += i;
        }
    }
}
if (oldal.endsWith("html")){
    oldal = oldal.slice(0, -5);
}
console.log(oldal);
var oldalak = ["japanese", "contact", "privacy", "tortenelem", "magyar", "social", "index", ""];
window.mobil = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
if (localStorage.getItem('csik_szin') == null) {
    localStorage.setItem('csik_szin', "#ff0000");
}
console.log(localStorage.getItem('nyelv'));
console.log(localStorage.getItem('save'));
console.log(localStorage.getItem("dyn_des"));

function showCorrectLang(){
    $(document).ready(function() {
        $('span[lang]').hide();
        if (localStorage.getItem('nyelv') == 'angol') {
            $('span[lang="en"]').show();
            magyar = false;
        } else {
            $('span[lang="hu"]').show();
            magyar = true;
        }
    });
}
function languageChange(){
    $('span[lang]').hide();
    if (magyar) {
        $('span[lang="en"]').show();
        if (oldal == 'contact') {
            document.title = "Contacts";
        } else if (oldal == 'privacy'){
            document.title = "Privacy";
        } else if (oldal == 'japanese') {
            document.title = "Learning Japanese";
        } else if (oldal == 'tortenelem') {
            document.title = "History";
        } else if (oldal == 'magyar') {
            document.title = "Hungarian";
        } else if (oldal == 'social') {
            document.title = "Links and social";
        } else {
            let linkList = location.href.split("/");
            if (linkList[linkList.length - 2] == "osszefoglalok"){
                document.title = "Exam PDFs";
            } else {
                document.title = "Home";
            }
        }
        magyar = false;
        if (!localStorage.getItem('save') == 'false' || localStorage.getItem('save') == null) {
            localStorage.setItem('nyelv', 'angol');
        }
    } else {
        $('span[lang="hu"]').show();
        if (oldal == 'contact') {
            document.title = "Kapcsolat";
        } else if (oldal == 'privacy'){
            document.title = "Adatvédelem";
        } else if (oldal == 'japanese'){
            document.title = "Japán tanulás";
        } else if (oldal == 'tortenelem') {
            document.title = "Történelem";
        } else if (oldal == 'magyar') {
            document.title = "Magyar";
        } else if (oldal == 'social') {
            document.title = "Linkek és kapcsolat";
        } else {
            let linkList = location.href.split("/");
            if (linkList[linkList.length - 2] == "osszefoglalok"){
                document.title = "Összefoglalók";
            } else {
                document.title = "Főoldal";
            }        
        }
        magyar = true;
        if (!localStorage.getItem('save') == 'false' || localStorage.getItem('save') == null) {
            localStorage.setItem('nyelv', 'magyar');
        }
    }
}
var sdb = 0;
function Settings(e){
    e.preventDefault()
    sdb++;
    console.log(sdb);
    let irany = localStorage.getItem('des');
    var gombszoveg;
    var gombszoveg_en;
    if (irany == "víz"){
        gombszoveg = "Vízszintes";
        gombszoveg_en = "Horizontal";
    } else {
        gombszoveg = "Függőleges";
        gombszoveg_en = "Vertical";
    }
    let chckd = "";
    if (localStorage.getItem("dyn_des") == "true") chckd += "checked";
    if (sdb % 2 != 0){
        $("footer").before('<div id="settings" class="text-center"><h3><span lang="hu">Beállítások</span><span lang="en">Settings</span></h3><h5 class="mb-5"><span lang="hu">Szabd testre ezt az oldalt!</span><span lang="en">Customize this site!</span></h5><div id="menupont"><div class="row"><div class="col-5"><p><span lang="hu">Az oldal elemeinek elrendezése:</span><span lang="en">The layout of the elements:</span></p></div><div class="col-2"><button id="desbtn" class="btn btn-secondary" onclick="changeDesign()"><span lang="hu">' + gombszoveg + '</span><span lang="en">' + gombszoveg_en + '</span></button></div><div class="col-5"><p class="desc"><span lang="hu">Megváltoztatja több oldal elrendezését.</span><span lang="en">Changes the layout of multiple pages.</span></p></div></div><div class="row"><div class="col-5"><p><span lang="hu">Az oldal színe:</span><span lang="en">Color of site:</span></p></div><div class="col-2"><input type="color" value="#ff0000" id="color_changer"></div><div class="col-5"><p class="desc"><span lang="hu">Megváltoztatja a csíkok, körvonalak, stb. színét.</span><span lang="en">Changes the color of borders, lines, etc.</span></p></div></div><div class="row"><div class="col-5"><p><span lang="hu">Témaváltoztatás:</span><span lang="en">Theme change:</span></p></div><div class="col-2"><input type="checkbox" onchange="setDynamicDesign()" ' + chckd + '></div><div class="col-5"><p class="desc"><span lang="hu">Az oldal témája dinamikusan változik.</span><span lang="en">The website&#39;s theme is dinamically changing.</span></p></div></div></div><button id="kilepes_btn" class="btn btn-danger" onclick="Settings(event)"><span lang="hu">Kilépés</span><span lang="en">Quit</span></button></div>'); // &#39;off&#39;
        $("#settings").show();
        if (mobil()){
            $("#menupont > div").eq(0).remove();
            $("#menupont > div").removeClass("row").addClass("col");
            $("#menupont > div > div").removeClass("col-2").removeClass("col-5").addClass("row");
        }
        changeColor();
        showCorrectLang();
    } else {
        $("#settings").remove();
    }
}
function checkMobileB(){
    if (mobil()) {
        $('<style>#footer_nav{padding: 0 !important; margin-top: 10px}footer h6{width:100%}</style>').appendTo("head");
        $(".mpont_pc").css("display", "none");
        if (oldal == "contact" || oldal == "social") {
            $("main").css("margin-top", "0");
        }
        if (oldal == "tortenelem" || oldal == "magyar") {
            $("#mh1").css("margin-top", "15vh")
        }
        $(".alert").css("height", "110px");
    }
}
var d_count = 0;
var osszefoglalok_fooldal = false;
function checkSettings(){
    if (oldal == "index" || oldal == '') {
        try {
            checkMobile();
            timeWrite();
            checkLang();
        } catch (error) {
            console.log('Ez nem a főoldal!');
            osszefoglalok_fooldal = true;
        }
    }
    checkMobileB();
    showCorrectLang();
    console.log(localStorage.getItem('des'));
    if (localStorage.getItem('des') == 'víz') {
        d_count = 1;
        $("#menupont > #desbtn").text("Vízszintes");
        changeToHor();
    }
    console.log(localStorage.getItem('csik_szin'));
    changeColor();
    oldN();
    if (localStorage.getItem("dyn_des") == null){
        localStorage.setItem("dyn_des", "true");
    }
    changeDynamicDesign();
}
function changeDesign(){
    if (d_count % 2 == 0) {
        if (localStorage.getItem('save') != 'false') {
            localStorage.setItem('des', 'víz');
        }
        $("#menupont > #desbtn").text("Vízszintes");
        d_count += 1;
        window.location.reload();
    } else {
        if (localStorage.getItem('save') != 'false') {
            localStorage.setItem('des', 'függő');
        }
        $("#menupont > #desbtn").text("Függőleges");
        d_count += 1;
        window.location.reload();
    }
}
function changeToHor(){
    if (oldal == "index" || oldal == "osszefoglalok/index") {
        $('<style>#ket_div{flex-direction:column;align-items:center;text-align:center;}main{overflow-x:hidden;}</style>').appendTo("head");
    }
    if (oldal == "contact" || oldal == "social") {
        $("#fuggo_des").hide();
        $("#viz_des").show();
    }
}
var customcss_set = false;
function changeColor(){
    let szin = localStorage.getItem('csik_szin');
    $("body *").css("border-color", szin);
    if (customcss_set) { // LAG ELLEN -> NE LEGYEN KURVA SOK STYLE ELEMENT
        $("head > style").eq(-1).remove();
    }
    if (oldalak.includes(oldal[0]) || oldalak.includes(oldal)){
        $('<style>::selection{background-color: ' + szin + '; color: black;}:-moz-selection{ background-color:' + szin + '; color: black;} .alert { border: none; } table, tr, td { border-color: #dee2e6 !important;} .table-group-divider { border-color: #000 !important;}</style>').appendTo("head");
    }
    $("body").get(0).style.setProperty("--beallitott_szin", szin);
    if (!customcss_set) {
        customcss_set = true;
    }
    $("#color_changer").val(szin);
}
$(document).on("input", "#color_changer", function() {
    let szin = this.value;
    if (localStorage.getItem('save') != 'false') {
        localStorage.setItem('csik_szin', szin);
    }
    changeColor();
});
var menu_count = 0;
function showMenu(){
    menu_count += 1;
    if (menu_count % 2 != 0) {
        $("#menupontok").css("display", "flex");
        if (mobil()){
            $("#langalert").css("margin-top", $("#menupontok").outerHeight() + "px");
            $("#jsalert").css("margin-top", $("#menupontok").outerHeight() + "px");
        } else {
            $("#langalert").css("margin-top", $("#menupontok").outerHeight() + 15 + "px");
            $("#jsalert").css("margin-top", $("#menupontok").outerHeight() + 15 + "px");
        }
    } else {
        $("#menupontok").css("display", "none");
        if (!mobil()){
            $("#langalert").css("margin-top", "15px");
            $("#jsalert").css("margin-top", "15px");

        } else {
            $("#langalert").css("margin-top", "0px");
            $("#jsalert").css("margin-top", "0px");
        }
    }
}
function managePopup(event){
    $("#popup").show();
    if (event == "discord"){
        $("#popup > h4").html("DISCORD");
        $("#popup > p").html('<span lang="hu">A Discord nevem:</span><span lang="en">My Discord name is:</span><br><b>pntrmln</b><br><br><span lang="hu">Ha nem tudod, hogyan adj hozzá barátként, akkor kattints <u onclick="window.open(&#39;https://support.discord.com/hc/en-us/articles/218344397-How-do-I-add-friends-on-Discord&#39;)">ide</u>.</span><span lang="en">If you do not know how to add friends on Discord, click <u onclick="window.open(&#39;https://support.discord.com/hc/en-us/articles/218344397-How-do-I-add-friends-on-Discord&#39;)">here</u>.</span>')
    } else if (event == "hide"){
        $("#popup").hide();
    } else {
        throw new Error("Ismeretlen esemeny megadva! [fn: createPopup]")
    }
    showCorrectLang();
}
function changeDynamicDesign(){
    let datum = new Date();
    let unnep_nev;
    if (datum.getMonth() == 5){
        unnep_nev = "pride";
    } else if (datum.getMonth() == 9 && datum.getDate() == 31){
        unnep_nev = "halloween";
    } else if (datum.getMonth() == 11 && datum.getDate() == 31 || datum.getMonth() == 0 && datum.getDate() == 1){
        unnep_nev = "newyear";
    } else if (datum.getMonth() == 2 && datum.getDate() == 15){
        unnep_nev = "march15";
    } else if (datum.getMonth() == 7 && datum.getDate() == 20){
        unnep_nev = "august20";
    } else if (datum.getMonth() == 9 && datum.getDate() == 23){
        unnep_nev = "october23";
    } else if (datum.getMonth() == 11 && datum.getDate() >= 24 && datum.getDate() <= 26) {
        unnep_nev = "christmas";
    } else {
        unnep_nev = null;
    }
    if (localStorage.getItem("dyn_des") == "true"){
        $("footer").before('<section id="dyn_imgs"></section>');
        if (osszefoglalok_fooldal || oldal == "tortenelem" || oldal == "magyar"){
            $("<link rel='stylesheet' href='../css/" + unnep_nev + ".css'>").appendTo("head");
            $("<img src='../media/" + unnep_nev + ".png' id='dyn_kep'>").appendTo("#dyn_imgs").on("error", function() {$(this).remove();});
            $("<img src='../media/" + unnep_nev + "2.png' id='dyn_kep2'>").appendTo("#dyn_imgs").on("error", function() {$(this).remove();});
        } else {
            $("<link rel='stylesheet' href='css/" + unnep_nev + ".css'>").appendTo("head");
            $("<img src='media/" + unnep_nev + ".png' id='dyn_kep'>").appendTo("#dyn_imgs").on("error", function() {$(this).remove();});
            $("<img src='media/" + unnep_nev + "2.png' id='dyn_kep2'>").appendTo("#dyn_imgs").on("error", function() {$(this).remove();});
        }
    }
}
function setDynamicDesign(){
    if (localStorage.getItem("dyn_des") == "false"){
        localStorage.setItem("dyn_des", "true");
        changeDynamicDesign();
    } else {
        localStorage.setItem("dyn_des", "false");
        $("head > link").eq(-1).remove();
        $("#dyn_imgs").remove();
    }
}
var nyilOldalak = ["social.html", "index.html", "japanese.html", "osszefoglalok/index.html"];
var oldNum;
function oldN(){
    if (localStorage.getItem("oldNum") == null || oldal == "index" && !osszefoglalok_fooldal || oldal == "" && !osszefoglalok_fooldal){
        oldNum = 1;
    } else if (oldal == "social"){
        oldNum = 0;
    } else if (oldal == "japanese"){
        oldNum = 2;
    } else {
        oldNum = 3;
    }
    console.log(oldNum);
}
window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) return;
    switch (event.key) {
        case "l":
            languageChange();
            break;
        case "m":
            showMenu();
            console.log(oldal != "tortenelem");
            break;
        case "s":
            Settings(event);
            break;
        case "ArrowRight":
            if (oldal != "tortenelem" && oldal != "magyar") oldalRedir("jobb");
            break;
        case "ArrowLeft":
            if (oldal != "tortenelem" && oldal != "magyar") oldalRedir("bal");
            break;
        default: return
    }
  event.preventDefault();
});
var kezdet = 0;
var veg = 0;
addEventListener("touchstart", (event) => { 
    kezdet = event.touches[0].clientX;
});
addEventListener("touchend", (event) => { 
    veg = event.changedTouches[0].clientX;
    if (veg - kezdet > 200 && oldal != "tortenelem" && oldal != "magyar") oldalRedir("bal");
    if (veg - kezdet < -200 && oldal != "tortenelem" && oldal != "magyar") oldalRedir("jobb");
});
function oldalRedir(irany){
    switch (irany){
        case "jobb":
            oldNum++;
            if (oldNum > 3) oldNum = 0;
            localStorage.setItem("oldNum", oldNum);
            if (oldal == "index" && osszefoglalok_fooldal) window.location.href = "../" + nyilOldalak[oldNum];
            else window.location.href = nyilOldalak[oldNum];
            break;
        case "bal":
            oldNum--;
            if (oldNum < 0) oldNum = 3;
            localStorage.setItem("oldNum", oldNum);
            if (oldal == "index" && osszefoglalok_fooldal) window.location.href = "../" + nyilOldalak[oldNum];
            else window.location.href = nyilOldalak[oldNum];
            break;
        default: return
    }
}
$("#yui_image").attr("src", "media/yui-btn.png");
$("#jsalert").css("display", "none");
$('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rizmyabdulla/fontawesome-pro@main/releases/v7.2.0/css/fontawesome.css" /><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rizmyabdulla/fontawesome-pro@main/releases/v7.2.0/css/solid.css" /><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rizmyabdulla/fontawesome-pro@main/releases/v7.2.0/css/brands.css"/>').appendTo("head");