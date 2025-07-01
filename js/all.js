var magyar = true;
$(document).ready(function() {
    $('span[lang]').hide();
    if (localStorage.getItem('nyelv') == 'angol') {
        $('span[lang="en"]').show();
    } else {
        $('span[lang="hu"]').show();
    }
});
function languageChange(){
    $('span[lang]').hide();
    var oldal = location.href.split("/").slice(-1);
    if (magyar) {
        $('span[lang="en"]').show();
        if (oldal == 'anime.html') {
            document.title = "Animes I watched";
        } else if (oldal == 'contact.html') {
            document.title = "Contacts";
        } else if (oldal == 'privacy.html'){
            document.title = "Privacy";
        } else {
            document.title = "Home";
        }
        magyar = false;
        localStorage.setItem('nyelv', 'angol');
    } else {
        $('span[lang="hu"]').show();
        if (oldal == 'anime.html') {
            document.title = "Animék amiket megnéztem";
        } else if (oldal == 'contact.html') {
            document.title = "Kapcsolat";
        } else if (oldal == 'privacy.html'){
            document.title = "Adatvédelem";
        } else {
            document.title = "Főoldal";
        }
        magyar = true;
        localStorage.setItem('nyelv', 'magyar');
    }
}
function Settings(allapot, e){
    e.preventDefault()
    if (allapot == 'on'){
        $("#settings").show();
    } else {
        $("#settings").hide();
    }
}
function checkMobile(){
    if (navigator.userAgentData.mobile) {
        $("footer > h6").hide();
    }
}