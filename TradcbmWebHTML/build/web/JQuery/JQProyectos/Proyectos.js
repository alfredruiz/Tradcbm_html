var validar = "";
var datos = "";
var BotonOrigen = "";

$(document).ready(function() {

    $("#cabecera").load('../../contenido/header.html');
    $("#footer").load('../../contenido/footer.html');
    $("#modal").load('../Proyectos/ModalProyectos.html');
    
    datos.FormProyectos();
    
    CombProyectosClientes();
    CombIdiomas();
    CombTipoTraduccion();
    CombTipoTarifa();
    CombEstadoProy();


    $('#nuevoCli').click(function(e) {
        e.preventDefault();
        BotonOrigen = "nuevoCli";
        localStorage.setItem("BotonOrigen", BotonOrigen);
        location.href = "../Clientes/Clientes.html";
    });

    $('#nuevo').click(function() {
        console.log("clck en boton nuevo");
        if (BotonOrigen === "tblNuevo") {
            validar.validar_nuevo();
        };
        if (BotonOrigen === "data_editar") {
            validar.validar_modificar();
        };
    });

    $('#listar').click(function(e) {
        e.preventDefault();
        console.log("clck en boton listar");
        location.href = "ListadoProyectos.html";
    });

    $('#tblNuevo').click(function() {
        console.log("clck en boton nuevo de la tabla");
        BotonOrigen = "tblNuevo";
        localStorage.setItem("BotonOrigen", BotonOrigen);
        location.href = "Proyectos.html";
    });


});

