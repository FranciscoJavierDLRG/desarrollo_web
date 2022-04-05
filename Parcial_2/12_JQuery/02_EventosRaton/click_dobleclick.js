$(document).ready(function () {

    $(".parrafo").click(function () {
        alert("Se hizo click en un parrafo");
    });

    $(".parrafo").hover(function () {
        $(this).css('cursor', 'pointer');
    });

    $("#tabla1 .parrafo").click(function () {
        alert("Se presiono un parrafo de la segunda tabla");
    });


    $("#parrafo6").dblclick(function () {
        alert('Se presiono el parrafo del recuadro');
        $("#recuadro").hide();
    });

});