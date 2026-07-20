// Változók a Fájlkezelő kezeléséhez
var oldal = location.href.split("/").slice(-1).toString();
var utolso = '';
var bezarva = true;
var auto_close = false;
if (oldal.endsWith("html")){
    oldal = oldal.slice(0, -5); // .html levágása
}

async function PDFLetoltes(link, lecke) {
    let valasz = await fetch(link);
    let blob = await valasz.blob();
    let blobURL = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = blobURL;
    a.download = lecke;

    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(blobURL);
}

function createFileExplorer(lecke){
    let link = `/osszefoglalok/${oldal}/${lecke.innerHTML}.pdf`;
    if (mobil()) {
        PDFLetoltes(link, lecke.innerHTML);
    }
    else {
        if (bezarva) {
            let html_code = "";
            html_code += '<div id="fajlkezelo"> <h3>Fájlkezelő <i class="fa-solid fa-xmark" onclick="closeFileExplorer()"></i></h3> <div class="row"> <div class="column text-center"> <iframe src=';
            html_code += '"' + oldal + "/"; // tortenelem vagy magyar
            html_code += lecke.innerHTML + '.pdf"'; // A lecke neve -> ez alapján megtalálja a fájlt
            html_code += 'height="100%" width="100%" frameBorder="0" scrolling="auto"></iframe> <h5>Előnézet</h5> </div> <div class="column text-center">';
            html_code += '<h4>Összefoglaló címe:<br>' + lecke.innerHTML + "</h4>";
            html_code += '<button class="btn btn-primary" onclick="window.open(&#39;' + oldal + "/" + lecke.innerHTML + '.pdf&#39;)"><i class="fa-solid fa-file"></i> Megnyitás</button>';
            html_code += `<button class="btn btn-success" onclick="PDFLetoltes('${link}','${lecke.innerHTML}')"><i class="fa-solid fa-arrow-down-to-line"></i>`;
            html_code += 'Letöltés</a></button>';
            html_code += '<p><span id="figyelem">FIGYELEM!</span> <br>A témazáró napjáig több, újabb verzió jelenhet meg, <br>így nem ajánlott semelyik fájl letöltése.</p>'
            html_code += '</div></div></div>'
            $("footer").before(html_code);
            // Egyéb:
            bezarva = false;
        } else {
            utolso = lecke;
            auto_close = true;
            closeFileExplorer();
        }
    }
}
function closeFileExplorer(){
    $("#fajlkezelo").remove();
    bezarva = true;
    if (auto_close) {
        createFileExplorer(utolso);
        auto_close = false;
    }
}
var opencount = [1, 1];
function showDropdown(tanev){
    if (tanev == 'jtn') {
        opencount[0] += 1;
    } else {
        opencount[1] += 1;
    }
    if (opencount[0] % 2 != 0) {
        $("#jtnh4 > i").removeClass("fa-caret-up").addClass("fa-caret-down");
        $("#jtn_content").hide();
    } else {
        $("#jtnh4 > i").removeClass("fa-caret-down").addClass("fa-caret-up");
        $("#jtn_content").show();
    }
    if (opencount[1] % 2 != 0) {
        $("#ktnh4 > i").removeClass("fa-caret-up").addClass("fa-caret-down");
        $("#ktn_content").hide();
    } else {
        $("#ktnh4 > i").removeClass("fa-caret-down").addClass("fa-caret-up");
        $("#ktn_content").show();
    }
}
if (mobil()) {
    $("<style>.dropdown-content h5 {padding-left: 5px;}</style>").appendTo("head");
    $(".dropdown-content").css("padding-right", "0");
    $("#fsect").css("margin-bottom", "20px");
    $(".dropdown > h4").css("padding-left", "25px");
    $(".dropdown-content > h5").css("padding", "20px 0");
    $(".dropdown-content > h5").css("margin", "0 20px");
    $(".dropdown-content").css("max-height", "250px");
    $("footer").css("margin-top", "20px");
    $(".dropdown-content").each(function() {
        var $h5s = $(this).children("h5");
        $h5s.css({
            "padding": "20px 10px",
            "border-bottom": "1px solid red",
            "box-sizing": "border-box",
            "display": "block"
        });
        if ($h5s.length > 1) {
            $h5s.last().css("border-bottom", "none");
        }
        if ($h5s.length === 1) {
            $h5s.css("border-bottom", "none");
        }
    });
}
$("#yui_image").attr("src", "../media/yui-btn.png");
$("h5").attr("onclick", "createFileExplorer(this)");