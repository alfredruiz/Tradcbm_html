var validar = "";
var datos = "";
var BotonOrigen = "";

$(document).ready(function() {  
    $("#cabecera").load('../contenido/header.html'); 
    $("#footer").load('../contenido/footer.html');
 
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
        window.location.href = "ListadoClientes.html";
    });

    $('#tblNuevo').click(function() {
        console.log("clck en boton nuevo de la tabla");
        BotonOrigen = "tblNuevo";
        localStorage.setItem("BotonOrigen", BotonOrigen);
        location.href = "Clientes.html";  
    }); 

});

