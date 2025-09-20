// TÖRI DOWNLOAD LINKEK
var tlink = {
    "A nemzetállamok kora":["https://drive.google.com/uc?export=download&id=11UbLwLDbA_-Qg8vyG-C_dgVGg-0NxKf6"],
    "Az 1848-49-es forradalom és szabadságharc":["https://drive.google.com/uc?export=download&id=1RPh9aSWky03D2u8YkSAkUCjEf_PQKv3o"],
    "Magyarország a Habsburg Birodalomban":["https://drive.google.com/uc?export=download&id=1Dna4IA5zl7duqIOM-JgimjrBJ5sS5lTH"],
    "A forradalmak kora":["https://drive.google.com/uc?export=download&id=16lSOP44Z2L2kpe2pn-nk62wHRX3io_bc"],
    "A felvilágosodás kora":["https://drive.google.com/uc?export=download&id=1oMpx0PSSjHlX9b2rd6XzugqFZXq8lDt3"],
    "A török hódoltság kora":["https://drive.google.com/uc?export=download&id=1IoIrKz5CG4XB8NONe1rYiTuESfs2tEMn"],
    "A magyar királyság fénykora":["https://drive.google.com/uc?export=download&id=1Vjx7ckXXY_cTIBVBeOYf4Mxlrzkqx4ah"],
    "A korai újkor":["https://drive.google.com/uc?export=download&id=1CIUCVSCYzQKMXwvqcfIt8V0acgDIsVI4"],
    "Árpád-ház":["https://drive.google.com/uc?export=download&id=1dG4ZYfO5ELLppTjlRZA-xdFZsalmmUU4"],
    "Honfoglalás":["https://drive.google.com/uc?export=download&id=1gGvcl3PyTI2RJqVtHbLkvraNZ1TAbHvs"],
    "A középkor":["https://drive.google.com/uc?export=download&id=1Jy_RtCEHepLczYP6EskhovINdPlyBX_6"],
    "Az ókori Róma":["https://drive.google.com/uc?export=download&id=1PRG9IxN9b0JA-KqdBm6R7oAVou9OklIm"],
    // 2025/26
    "A dualizmus kora":["https://drive.google.com/uc?export=download&id=1gldhgGZ997nCquT98BcFNIi9a7Ngrpq5"]
};
// MAGYAR DOWNLOAD LINKEK
var mlink = {
    "Magyar költők és műveik":["https://drive.google.com/uc?export=download&id=1WUrW-pO5k34E9-9BZpSDMlPnMPdZ41BS"],
    "A szöveg":["https://drive.google.com/uc?export=download&id=15Prp--ESpPQBSCjAvJQMVYfSAnDF-Jac"],
    "A romantika kora":["https://drive.google.com/uc?export=download&id=1Nb6RnCpxmBEWxpCl5NOa2pg211M6tmE7"],
    "A felvilágosodás kora":["https://drive.google.com/uc?export=download&id=1h6ZNqAvhZsDm-7mG-mFXLnbhRTPtBkez"],
    "Csokonai költészete":["https://drive.google.com/uc?export=download&id=1cIgaR2ZWg7NEzTCblmravW81uMQsBZKe"]
}
// Változók a Fájlkezelő kezeléséhez
var oldal = location.href.split("/").slice(-1);
var utolso = '';
var bezarva = true;
var auto_close = false;
oldal = oldal.toString().slice(0, -5); // .html levágása
function createFileExplorer(lecke){
    if (navigator.userAgentData.mobile) {
        window.open(oldal + "/" + lecke.innerHTML + ".pdf");
    }
    else {
        if (bezarva) {
            let html_code = "";
            html_code += '<div id="fajlkezelo"> <h3>Fájlkezelő <i class="fa-solid fa-xmark" onclick="closeFileExplorer()"></i></h3> <div class="row"> <div class="column text-center"> <iframe src=';
            html_code += '"' + oldal + "/"; // tortenelem vagy magyar
            html_code += lecke.innerHTML + '.pdf"'; // A lecke neve -> ez alapján megtalálja a fájlt
            html_code += 'height="100%" width="100%" frameBorder="0" scrolling="auto"></iframe> <h5>Előnézet</h5> </div> <div class="column text-center">';
            html_code += '<h4>Témazáró címe:<br>' + lecke.innerHTML + "</h4>";
            html_code += '<button class="btn btn-primary" onclick="window.open(&#39;' + oldal + "/" + lecke.innerHTML + '.pdf&#39;)"><i class="fa-solid fa-file-pdf"></i> Megnyitás</button>';
            html_code += '<button class="btn btn-success"><i class="fa-solid fa-arrow-down-to-line"></i><a href=';
            if (oldal == 'tortenelem') { // download link megszerzése
                html_code += tlink[lecke.innerHTML];
            } else {
                html_code += mlink[lecke.innerHTML];
            }
            html_code += '> Letöltés</a></button>';
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
    oldal = location.href.split("/").slice(-1);
    oldal = oldal.toString().slice(0, -5);
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
        $("#jtnh4").html('Jelenlegi tanév:<i class="fa-solid fa-caret-down"></i>');
        $("#jtn_content").css("display", "none");
        $("#jtnsect").css("overflow-y", "hidden");
    } else {
        $("#jtnh4").html('Jelenlegi tanév:<i class="fa-solid fa-caret-up"></i>');
        $("#jtn_content").css("display", "block");
    }
    if (opencount[1] % 2 != 0) {
        $("#ktnh4").html('Korábbi tanévek:<i class="fa-solid fa-caret-down"></i>');
        $("#ktn_content").css("display", "none");
        $("#ktnsect").css("overflow-y", "hidden");
    } else {
        $("#ktnh4").html('Korábbi tanévek:<i class="fa-solid fa-caret-up"></i>');
        $("#ktn_content").css("display", "block");
    }
    if ($(".dropdown-content h5").length > 9) {
        $("#" + tanev + "sect").css("overflow-y", "scroll");
        $("#" + tanev + "sect").css("overflow-x", "hidden");
        $("#" + tanev + "sect").css("height", "310px");
    }
}
if (navigator.userAgentData.mobile) {
    $("<style>.dropdown-content h5 {padding-left: 5px;}</style>").appendTo("head");
}
