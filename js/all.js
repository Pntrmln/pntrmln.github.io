var magyar = true;
var oldal = location.href.split("/").slice(-1);
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
    if (oldal == 'index.html' || oldal == '') {
        checkLang();
    }
}
function Settings(allapot, e){
    e.preventDefault()
    if (allapot == 'on'){
        $("footer").before('<div id="settings" class="text-center"> <h3><span lang="hu">Beállítások</span><span lang="en">Settings</span></h3> <h5 class="mb-5"><span lang="hu">Szabd testre ezt az oldalt!</span><span lang="en">Customize this site!</span></h5> <div id="menupont"> <p><span lang="hu">Az oldal elemeinek elrendezése:</span><span lang="en">The layout of the elements:&emsp;&emsp;&#8201;</span></p> <button id="desbtn" class="btn btn-secondary" onclick="changeDesign()"><span lang="hu">Függőleges</span><span lang="en">Vertical</span></button> <p class="desc"><span lang="hu">Megváltoztatja a "Főoldal" és a "Kapcsolatok" oldal elrendezését.</span><span lang="en">Changes the layout on the "Home" and "Contacts" pages.</span></p> <br> <p><span lang="hu">Az oldal színe:</span><span lang="en">Color of site:&ensp;&#8201;</span></p> <input type="color" value="#ff0000" id="color_changer"> <p class="desc"><span lang="hu">Megváltoztatja az oldal másodlagos (alapból piros) színét.</span><span lang="en">Changes the website&#39;s secondary (originally red) color.</span></p> </div> <button class="btn btn-danger" onclick="Settings(&#39;off&#39;, event)"><span lang="hu">Kilépés</span><span lang="en">Quit</span></button> </div>') // &#39;off&#39;
        $("#settings").show();
        changeColor();
        showCorrectLang();
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
    if (oldal == "index.html" || oldal == '') {
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
    if (oldal == "contact.html") {
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
    $('<style>@keyframes link_hover { from {color: white;} to {color: ' + szin + ';}}::selection{ background-color: ' + szin + '; color: black;}:-moz-selection{ background-color:' + szin + '; color: black;} button { border: none !important;} .std_redir_btn { border: 1px solid ' + szin + ' !important;} .alert { border: none; } table, tr, td { border-color: #dee2e6 !important;} .table-group-divider { border-color: #000 !important;}</style>').appendTo("head");
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