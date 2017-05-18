var login = "";
var validar = "";
var datos = "";
var BotonOrigen = "";

$(document).ready(function() {

    $('[title]').tooltip({
        content: function() {
            var element = $(this);
            return element.attr('title');
        }
    });
    $('tootip4900170').css("color", "red");


    $("#cabecera").load('../contenido/header.html');
    $("#footer").load('../contenido/footer.html');

    $('#nuevo').click(function() {
        console.log("clck en boton nuevo");
        if (BotonOrigen === "tblNuevo") {
//            validar.validar_nuevo();
            datos.nuevo();
        }
        ;
        if (BotonOrigen === "data_editar") {
//            validar.validar_modificar();
            datos.modificar();
        }
        ;
    });

    $('#listar').click(function(e) {
        e.preventDefault();
        console.log("clck en boton listar");
        window.location.href = "ListadoCompras.html";
    });

    $('#tblNuevo').click(function() {
        console.log("clck en boton nuevo de la tabla");
        BotonOrigen = "tblNuevo";
        localStorage.setItem("BotonOrigen", BotonOrigen);
        location.href = "Compras.html";
    });

});

