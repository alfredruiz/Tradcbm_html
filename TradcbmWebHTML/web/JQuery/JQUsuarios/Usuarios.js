var login = "";
var validar = "";
var datos = "";
var BotonOrigen = "";

$(document).ready(function() { 
    //Carga de componentes 
    $("#usuindex").append("Bienvenido a TRADCBM");

    //Animacion de index
    $('#target2').animate({
        width: "700px"
    }, 1000, "linear");
    //Animación de portada
    $('#target').animate({
        width: "700px"
    }, 600, "swing", function() {
        $('#target').animate({
            height: "200px"
        }, 600, "linear");
    });
    
     //Ocultar botones formulario
    perfil = localStorage.getItem("perfil");
    if (perfil === null || perfil === "Empleado") {
        $('#listar').hide();
        $('#limpiar').hide();
        $('#nuevo').removeClass("col-md-4 col-sm-4 col-xs-4").addClass("col-md-12 col-sm-12 col-xs-12");
    }

    //Ocultar botones formulario
    perfil = localStorage.getItem("perfil"); 
    login.perfil();
    console.log(localStorage);


    //Funciones de botones
    $('#ingresar').click(function(e) {
        e.preventDefault();
        login.Ingresar();
    });

    $('#registrarse').click(function(e) { 
        e.preventDefault(); 
        location.href = "Usuarios/Usuarios.html";  
    });
 
    $('#MisDatos').on("click", (function() {
        BotonOrigen = "MisDatos";
        localStorage.removeItem("BotonOrigen");
        localStorage.setItem("BotonOrigen", BotonOrigen);
        datos.FormUsuarios();

    }));

    $('#nuevo').click(function() {
        console.log("clck en boton nuevo");  
        if (perfil === null || BotonOrigen === "tblNuevo") { 
              validar.validar_nuevo(); 
        };
        if (BotonOrigen === "data_editar" || BotonOrigen === "MisDatos") {
            validar.validar_modificar();
        };
    });

    $('#listar').click(function(e) {
        e.preventDefault();
        console.log("clck en boton listar");
        location.href = "ListadoUsuarios.html";
    });

    $('#tblNuevo').click(function() {
        console.log("clck en boton nuevo de la tabla");
        BotonOrigen = "tblNuevo";
        localStorage.setItem("BotonOrigen", BotonOrigen);
        location.href = "Usuarios.html";  
    }); 
});

