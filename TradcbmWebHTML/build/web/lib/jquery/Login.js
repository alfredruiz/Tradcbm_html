var login = login || {};
var myJson = "";
servlet = 'SvUsuarios';
ruta = "";
rutaCompleta = ruta + servlet;

login.Ingresar = function() {
    $.post(rutaCompleta, {
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
    localStorage.setItem("nombre", myJson.nombre);
    localStorage.setItem("perfil", myJson.perfil);
    window.location.href = "Portada.html";
};

login.logIncorrecto = function() {
    swal({
        title: "Error",
        text: "Introduzca usuario o contraseña correctos",
        type: "error",
        closeOnConfirm: false,
        showLoaderOnConfirm: true},
            function() {
                window.location.href = "index.html";
            });
};

login.perfil = function() {
    perfillog = localStorage.getItem("perfil");
    nombrelog = localStorage.getItem("nombre");
    if (perfillog === "Administrador") {
        $('#cabecera').load('contenido/header.html');
        $("#usu").append("Bienvenido: " + nombrelog);
    } else {
        $('#cabecera').load('contenido/headerempl.html');
        $("#usu").append("Bienvenido: " + nombrelog);
    }
};