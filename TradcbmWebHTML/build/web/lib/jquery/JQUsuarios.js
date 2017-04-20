var login = "";
var validar = "";
var datos = "";

$(document).ready(function() {
    //Carga de componentes
    $("body").css("background-image", "url('lib/img/intro.jpg')");
    $('#footer').load('contenido/footer.html');

    //Animación de entrada
    $('#target').animate({
        width: "700px"
    }, 600, "swing", function() {
        $('#target').animate({
            height: "200px"
        }, 600, "linear");

    });

    login.perfil();

    $('#ingresar').click(function(e) {
        e.preventDefault();
        login.Ingresar();
    });

    $('#nuevo').click(function() {
        console.log("clck en boton nuevo");
        validar.validar_nuevo();
    });

    $('#listar').click(function(e) {
        e.preventDefault();
        console.log("clck en boton listar");
        $('#listado').show();
        $('#Registrar').hide();
        datos.listar();
    });

    $('#tblNuevo').click(function() {
        console.log("clck en boton nuevo de la tabla");
        location.reload();
        $('#listado').hide();
        $('#Registrar').show();
        $('#idusuarios').val("");
        $('#nombre').val("");
        $('#apellidos').val("");
        $('#email').val("");
        $('#password').val("");
        $('#password2').val("");
        $('#perfil').val("");
    });

    $('#modificar').click(function() {
        console.log("clck en boton modificar");
        validar.validar_modificar();
    });

    $('#borrar').click(function() {
        console.log("clck en boton borrar");
        validar.validar_Borrar();
    });

    //Función de consultar usuario + validacón
    $('#consultar').click(function() {
        console.log("clck en boton consultar");
        validar.validar_Consultar();
    });

});

