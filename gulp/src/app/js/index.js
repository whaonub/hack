$(function() {

    function getVal(ele) {
        return $('#' + ele).val()
    }
    $("#btn").click(function() {
        window.location.href = "./signLogin.html"
    });

    $(document).keydown(function(event) {
        if (event.keyCode == 13) {
            $("#btn").click();
        }
    })
});