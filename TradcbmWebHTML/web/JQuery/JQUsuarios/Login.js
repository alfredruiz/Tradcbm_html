var login = login || {};
var myJson = "";

login.Ingresar = function() {
    $.post('SvUsuarios', {
        idusuarios: $('#idusuarios').val(),
        password: $('#password').val(),
        perfil: "",
        opcion: "ingresar"},
            function(respuesta) {
                myJson = $.parseJSON(respuesta);
                switch (myJson) {
                    case null:
                    {
                        login.logIncorrecto();
                        break;
                    }
                    default:
                    {
                        login.logCorrecto();
                        break;
                    }
                }
            });
};
 
login.logCorrecto = function() {
    perfil = myJson.perfil;
    password = myJson.password;
    localStorage.setItem("idusuario", myJson.idusuarios);
    localStorage.setItem("nombre", myJson.nombre);
    localStorage.setItem("perfil", myJson.perfil);
    window.location.href = "HTML/Portada/Portada.html"; 
};

login.logIncorrecto = function() {
    swal({
        title: "Error",
        text: "Introduzca usuario o contraseña correctos",
        type: "error",
        closeOnConfirm: false,
        showLoaderOnConfirm: true},
            function() {
               location.href = "index.html";
            });
}; 

login.perfil = function(){ 
    perfillog = localStorage.getItem("perfil");
    nombrelog = localStorage.getItem("nombre");
    if (perfillog === "Administrador") {
        $("#cabecera").load('../../contenido/header.html'); 
        $("#footer").load('../../contenido/footer.html');
        $("#usu").append("Bienvenido: " + nombrelog);
    }
    if (perfillog === "Empleado") {
        $("#cabecera").load('../../contenido/headerempl.html'); 
        $("#footer").load('../../contenido/footer.html');
        $("#usu").append("Bienvenido: " + nombrelog);
    } 
    if (perfillog === null) {
     $("#footer").load('../../contenido/footer.html');
     } 
};