var magyar = true;
var oldal = location.href.split("/").slice(-1);
$(document).ready(function() {
    $('span[lang]').hide();
    console.log(localStorage.getItem('nyelv'));
    console.log(localStorage.getItem('save'));
    if (localStorage.getItem('nyelv') == 'angol') {
        $('span[lang="en"]').show();
    } else {
        $('span[lang="hu"]').show();
    }
});
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
        } else {
            document.title = "Főoldal";
        }
        magyar = true;
        if (!localStorage.getItem('save') == 'false' || localStorage.getItem('save') == null) {
            localStorage.setItem('nyelv', 'magyar');
        }
    }
}
function Settings(allapot, e){
    e.preventDefault()
    if (allapot == 'on'){
        $("footer").before('<div id="settings" class="text-center"> <h3>Beállítások</h3> <h5 class="mb-5">Szabd testre ezt az oldalt!</h5> <div id="menupont"> <p>Az oldal elemeinek elrendezése:</p> <button id="desbtn" class="btn btn-secondary" onclick="changeDesign()">Függőleges</button> <p class="desc">Megváltoztatja a "Főoldal" és a "Kapcsolatok" oldal elrendezését.</p> </div> <button class="btn btn-danger" onclick="Settings(&#39;off&#39;, event)">Kilépés</button> </div>')
        $("#settings").show();
    } else {
        $("#settings").hide();
    }
}
function checkMobileB(){
    if (navigator.userAgentData.mobile) {
        $("nav > a").eq(0).html('<i class="fa-solid fa-envelope"></i>')
        $("footer > a").eq(0).html('<i class="fa-solid fa-gear"></i>');
        $("footer > a").eq(1).html('<i class="fa-solid fa-lock"></i>');
        $("footer > a").eq(0).attr("onclick", "event.preventDefault()");  
    }
}
var d_count = 0;
function checkSettings(){
    if (oldal == "index.html") {
        checkMobile();
        timeWrite();
    }
    checkMobileB();
    console.log(localStorage.getItem('des'));
    if (localStorage.getItem('des') == 'víz') {
        d_count = 1;
        $("#menupont > #desbtn").text("Vízszintes");
        changeToHor();
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
    if (oldal == "contact.html") {
        $("#fuggo_des").hide();
        $("#viz_des").show();
    }
}