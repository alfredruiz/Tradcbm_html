var validar = "";
var datos = "";
var BotonOrigen = "";

$(document).ready(function() {

    $("#cabecera").load('../../contenido/header.html');
    $("#footer").load('../../contenido/footer.html');
    $("#modal").load('../Facturas/ModalFacturas.html');

    datos.FormFacturas();
  
    CombProyectosClientes();
    CombProyectos();
    CombIdiomas();
    CombAmbito();
    CombDivisas();
    CombIVA();
    CombIRPF();

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
        location.href = "ListadoFacturas.html";
    });

    $('#tblNuevo').click(function() {
        console.log("clck en boton nuevo de la tabla");
        BotonOrigen = "tblNuevo";
        localStorage.setItem("BotonOrigen", BotonOrigen);
        location.href = "Facturas.html";
    });

    $('#AgregarProy').click(function(e) {
        e.preventDefault();
        datos.AgregarProyecto();
        $("#listado2").show();
        idfacturaCons = $('#idfactura').val();
        console.log("idfactura -->" + idfacturaCons);
        localStorage.setItem("idfacturaCons", idfacturaCons);
    });

});

