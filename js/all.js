// Navbar betöltése
$("nav").append(' <a><i class="fa-solid fa-bars fa-2x" onclick="showMenu()" title="Menü"></i></a> <a href="index.html" id="main_a"><h3 id="n_main">Pntrmln<br> <p id="gh">.hu</p></h3></a> <a><i class="fa-solid fa-language fa-2x" onclick="languageChange()" title="English | Magyar"></i></a>')
$("nav").after(' <div class="navbar text-center" id="menupontok"> <a href="social.html"> <i class="fa-solid fa-users"> </i> <br> <p class="mpont_pc"><span lang="hu">Linkek és kapcsolat</span><span lang="en">Links and contact</span></p> </a> <a href="anime.html"> <img id="yui_image" alt=""> <br> <p class="mpont_pc"><span lang="hu">Animék</span><span lang="en">Animes</span></p> </a> <a href="osszefoglalok/index.html"> <i class="fa-solid fa-file"> </i> <br> <p class="mpont_pc"><span lang="hu">Összefoglalók</span><span lang="en">Exam PDFs</span></p> </a></div>');
// Footer betöltése
$("footer").append('<h6><span lang="hu">Készítette: Pintér Milán, 2025</span><span lang="en">Created by Milán Pintér, 2025</span></h6> <div class="navbar" id="footer_nav"> <a href="" onclick="Settings(&#39;on&#39;, event)"><i class="fa-solid fa-gear"></i></a> <a href="privacy.html"><i class="fa-solid fa-lock"></i></a> </div>')
var magyar = true;
var oldal = location.href.split("/").slice(-1);
var oldalak = ["anime.html", "contact.html", "privacy.html", "tortenelem", "magyar", "social.html", "index.html", ""];
console.log(oldal);
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

function showCorrectLang(){
    $(document).ready(function() {
        $('span[lang]').hide();
        if (localStorage.getItem('nyelv') == 'angol') {
            $('span[lang="en"]').show();
        } else {
            $('span[lang="hu"]').show();
        }
    });
}
function languageChange(){
    $('span[lang]').hide();
    if (magyar) {
        $('span[lang="en"]').show();
        if (oldal == 'anime.html') {
            document.title = "Animes I watched";
        } else if (oldal == 'contact.html') {
            document.title = "Contacts";
        } else if (oldal == 'privacy.html'){
            document.title = "Privacy";
        } else if (oldal == 'japanese.html') {
            document.title = "Learning Japanese";
        } else if (oldal == 'tortenelem') {
            document.title = "History";
        } else if (oldal == 'magyar') {
            document.title = "Hungarian";
        } else if (oldal == 'social.html') {
            document.title = "Links and social";
        } else {
            document.title = "Home";
        }
        magyar = false;
        if (!localStorage.getItem('save') == 'false' || localStorage.getItem('save') == null) {
            localStorage.setItem('nyelv', 'angol');
        }
    } else {
        $('span[lang="hu"]').show();
        if (oldal == 'anime.html') {
            document.title = "Animék amiket megnéztem";
        } else if (oldal == 'contact.html') {
            document.title = "Kapcsolat";
        } else if (oldal == 'privacy.html'){
            document.title = "Adatvédelem";
        } else if (oldal == 'japanese.html'){
            document.title = "Japán tanulás";
        } else if (oldal == 'tortenelem') {
            document.title = "Történelem";
        } else if (oldal == 'magyar') {
            document.title = "Magyar";
        } else if (oldal == 'social.html') {
            document.title = "Linkek és kapcsolat";
        } else {
            document.title = "Főoldal";
        }
        magyar = true;
        if (!localStorage.getItem('save') == 'false' || localStorage.getItem('save') == null) {
            localStorage.setItem('nyelv', 'magyar');
        }
    }
    if (oldal == 'index.html' || oldal == '') {
        checkLang();
    }
}
function Settings(allapot, e){
    e.preventDefault()
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
    if (allapot == 'on'){
        $("footer").before('<div id="settings" class="text-center"> <h3><span lang="hu">Beállítások</span><span lang="en">Settings</span></h3> <h5 class="mb-5"><span lang="hu">Szabd testre ezt az oldalt!</span><span lang="en">Customize this site!</span></h5> <div id="menupont"> <p><span lang="hu">Az oldal elemeinek elrendezése:</span><span lang="en">The layout of the elements:&emsp;&emsp;&#8201;</span></p> <button id="desbtn" class="btn btn-secondary" onclick="changeDesign()"><span lang="hu">' + gombszoveg + '</span><span lang="en">' + gombszoveg_en + '</span></button> <p class="desc"><span lang="hu">Megváltoztatja több oldal elrendezését.&emsp;&emsp;</span><span lang="en">Changes the layout of multiple pages.&emsp;&emsp;&emsp;</span></p><br> <p><span lang="hu">Az oldal színe:</span><span lang="en">Color of site:&ensp;&#8201;</span></p> <input type="color" value="#ff0000" id="color_changer"> <p class="desc"><span lang="hu">Megváltoztatja az oldal másodlagos (alapból piros) színét.</span><span lang="en">Changes the website&#39;s secondary (originally red) color.</span></p> </div> <button class="btn btn-danger" onclick="Settings(&#39;off&#39;, event)"><span lang="hu">Kilépés</span><span lang="en">Quit</span></button> </div>'); // &#39;off&#39;
        $("#settings").show();
        if (mobil()){
            $("#settings > h5").removeClass("mb-5");
            $("#menupont > p").eq(0).remove();
            $("#menupont > p").eq(0).remove();
            $("#menupont > button").remove();
            $("#menupont > br").remove();
            $("#settings").css("height", "350px");
        }
        changeColor();
        showCorrectLang();
    } else {
        $("#settings").hide();
    }
}
function checkMobileB(){
    if (mobil()) {
        $('<style>#footer_nav{padding: 0 !important; margin-top: 10px}footer h6{width:100%}</style>').appendTo("head");
        $(".mpont_pc").css("display", "none");
        if (oldal == "anime.html") {
            $("#tablazaton_kivul").css("margin", "0");
            $("#tablazaton_kivul").css("margin-left", "50px");
            $("#tablazaton_kivul").css("margin-right", "50px");
            $("#mh2").css("margin-top", "120px");
        }
        if (oldal == "contact.html" || oldal == "social.html") {
            $("main").css("margin-top", "0");
        }
        if (oldal == "tortenelem" || oldal == "magyar") {
            $("#mh1").css("margin-top", "15vh")
        }
    }
}
var d_count = 0;
var fooldal = false;
function checkSettings(){
    if (oldal == "index.html" || oldal == '') {
        fooldal = true;
        try {
            checkMobile();
            timeWrite();
            checkLang();
        } catch (error) {
            console.log('Ez nem a főoldal!');
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
    if (localStorage.getItem('csik_szin') != null) {
        changeColor();
    }
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
    if (oldal == "index.html") {
        $("#rc").hide();
        $("#index_for_mobile").show();
        $("#index_for_mobile > #nothing-div").addClass("mt-5");
    }
    if (oldal == "contact.html" || oldal == "social.html") {
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
    console.log(oldal);
    if (oldalak.includes(oldal[0]) || oldalak.includes(oldal)){
        $('<style>::selection{background-color: ' + szin + '; color: black;}:-moz-selection{ background-color:' + szin + '; color: black;} button { border: none !important;} .alert { border: none; } table, tr, td { border-color: #dee2e6 !important;} .table-group-divider { border-color: #000 !important;}</style>').appendTo("head");
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
        } else {
            $("#langalert").css("margin-top", $("#menupontok").outerHeight()-15 + "px");
        }
    } else {
        $("#menupontok").css("display", "none");
        if (!mobil()){
            $("#langalert").css("margin-top", "-15px");
        } else {
            $("#langalert").css("margin-top", "0");
        }
    }
}

$("#yui_image").attr("src", "media/yui-btn.png");
