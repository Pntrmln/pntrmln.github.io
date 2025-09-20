function Redir(site){
    console.log("asd");
    if (site == 'instagram') {
        window.open("https://www.instagram.com/pinter.hun");
    } else if (site == 'spotify') {
        window.open("https://open.spotify.com/user/bwbxjzmw49w9v00p76vkauzaj");
    } else if (site == 'github') {
        window.open("https://github.com/pntrmln");
    } else if (site == 'discord') {
        window.open('https://discord.com/channels/@me');
    } else if (site == 'steam') {
        window.open('https://steamcommunity.com/id/pntrmln/');
    } else if (site == 'bunpro') {
        window.open('https://bunpro.jp/share/Pntrmln');
    } else {
        window.location.href = "404.html";
    }
}