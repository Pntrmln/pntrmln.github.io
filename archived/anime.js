function checkMobileB() {
    if (navigator.userAgentData.mobile) {
        $("footer > h6").hide();
        $("#for_pc").hide();
        if (window.innerHeight > window.innerWidth) {
            $("#for_mobile").show();
        } else {
            $("#for_pc").show();
            $(".alert").show();
        }
    }
}