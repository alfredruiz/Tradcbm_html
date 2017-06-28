var validar = "";
var datos = "";
var BotonOrigen = "";

$(document).ready(function() {

// select all desired input fields and attach tooltips to them
    $("#Registrar :input").tooltip({
        position: "center right",
        offset: [-2, 10],
        effect: "fade",
        opacity: 0.7

    });

    console.log(localStorage);

    $("#cabecera").load('../../contenido/header.html');
    $("#footer").load('../../contenido/footer.html');
    $("#modal").load('../Facturas/ModalFacturas.html');

    datos.FormCompras();

    // Llamada a combos
    CombProveedoresCompras();
    CombIVA();
    CombAmortizacion();

    $('#nuevoProv').click(function(e) {
        e.preventDefault();
        BotonOrigen = "nuevoProv";
        localStorage.setItem("BotonOrigen", BotonOrigen);
        location.href = "../Proveedores/Proveedores.html";
    });

    $('#nuevo').click(function() {
        console.log("clck en boton nuevo");
        if (BotonOrigen === "tblNuevo") {
            validar.validar_nuevo();
        }
        ;
        if (BotonOrigen === "data_editar") {
            validar.validar_modificar();
        }
        ;
    });

    $('#listar').click(function(e) {
        e.preventDefault();
        console.log("clck en boton listar");
        location.href = "ListadoCompras.html";
    });

    $('#tblNuevo').click(function() {
        console.log("clck en boton nuevo de la tabla");
        BotonOrigen = "tblNuevo";
        localStorage.setItem("BotonOrigen", BotonOrigen);
        location.href = "Compras.html";
    });


});

