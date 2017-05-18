
var datos = datos || {}; 
var BotonOrigen = "";
perfil = localStorage.getItem("perfil"); 

datos.FormUsuarios = function() {
    BotonOrigen = localStorage.getItem("BotonOrigen");
    console.log("BotonOrigen --> " + BotonOrigen);
    switch (BotonOrigen) {
        case "tblNuevo":
            console.log("Caso Nuevo"); 
            $('#idusuarios').val("");
            $('#nombre').val("");
            $('#apellidos').val("");
            $('#email').val("");
            $('#password').val("");
            $('#password2').val("");
            $('#perfil').val("");
            break;
        case "MisDatos":
            console.log("Caso MisDatos");
            localStorage.setItem("idusuarioCons", localStorage.getItem("idusuario"));
            console.log(localStorage);
            datos.consultar();
            break;
        case "data_editar":
            console.log(localStorage);
            datos.consultar();
            location.href = "Usuarios.html";
            break;
        default: 
            break;
    }

};
 
datos.nuevo = function() {
    console.log("datos de nuevo");
    $.post('SvUsuarios', {
        idusuarios: $('#idusuarios').val(),
        nombre: $('#nombre').val(),
        apellidos: $('#apellidos').val(),
        email: $('#email').val(),
        password: $('#password').val(),
        perfil: $('#perfil').val(),
        opcion: "nuevo"},
            function (respuesta) {
                if (respuesta === "Existe") {
                    swal({
                        title: "Error",
                        text: "Usuario existe",
                        type: "error",
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true});
                } else {
                    swal({
                        title: "Hecho!!!",
                        text: "Usuario añadido",
                        type: "success",
                        cancelButtonText: "Cancel",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true},
                            function () {
                                if (perfil === null) {
                                    location.href = "../index.html";
                                } else {
                                    location.href = "ListadoUsuarios.html";
                                }
                            });
                }
            });
};

//Función de modificar usuario
datos.modificar = function() {
    console.log("Funcion modificar");
    swal({
        title: "¿Seguro que deseas modificar el usuario?",
        text: "No podrás deshacer este paso...",
        type: "success",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Modificar",
        closeOnConfirm: false},
            function() {
                $.post('SvUsuarios', {
                    nombre: $('#nombre').val(),
                    apellidos: $('#apellidos').val(),
                    email: $('#email').val(),
                    password: $('#password').val(),
                    perfil: $('#perfil').val(),
                    idusuarios: $('#idusuarios').val(),
                    opcion: "modificar"},
                        function() {
                            swal({
                                title: "Hecho!!!",
                                text: "Usuario Modifica",
                                type: "success",
                                cancelButtonText: "Cancel",
                                confirmButtonColor: "#3085d6",
                                confirmButtonText: "OK",
                                closeOnConfirm: false,
                                showLoaderOnConfirm: true},
                                    function() {
                                        if (perfil === "Empleado") {
                                            location.href = "Usuarios.html";
                                        } else {
                                            location.href = "ListadoUsuarios.html";
                                        };
                                    });
                        });
            });
};

datos.borrar = function() {
    console.log("datos de borrar");
    var usuario = $('#idusuarios').val();
    swal({
        title: "Borrar usuario " + usuario,
        text: "¿Seguro que quiere eliminar este usuario?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Borrar",
        closeOnConfirm: true},
            function() {
                $.post('SvUsuarios', {
                    idusuarios: $('#idusuarios').val(),
                    opcion: "eliminar"},
                        function() {
                            datos.listar();
                        });
            }
    );
};

//Función para pedir mediante ajax una consulta de usuario
datos.consultar = function () {
    console.log("datos de consultar");
    console.log("BotonOrigen --> " + BotonOrigen);

    idusuarioCons = localStorage.getItem("idusuarioCons");
    $.post('SvUsuarios', {
        idusuarios: idusuarioCons,
        opcion: "consultar"},
            function (respuesta) {
                idusuarioCons = ""; 
                myJson = $.parseJSON(respuesta);  
                //rellenamos los campos
                $('#idusuarios').val(myJson.idusuarios);
                $('#nombre').val(myJson.nombre);
                $('#apellidos').val(myJson.apellidos);
                $('#email').val(myJson.email);
                $('#password').val(myJson.password);
                $('#password2').val(myJson.password);
                $('#perfil').val(myJson.perfil);
            });
};
//******************************************************************************
//  DATETABLE
//******************************************************************************

datos.listar = function() {
    $.post('SvUsuarios', {
        opcion: "listar",
        method: 'post',
        dataType: 'json'},
            function(data) {
                myJson = $.parseJSON(data);
                table = $('#tabla').dataTable({
                    data: myJson,
                    destroy: true,
                    columns: [
                        {"defaultContent":
                                    "<button type='button' class='editar btn btn-primary'>\n\
                                        <i class='fa fa-pencil-square-o'></i></button>"},
                        {"defaultContent":
                                    "<button type='button' class='eliminar btn btn-danger'>\n\
                                         <i class='fa fa-trash-o'></i></button>"},
                        {'data': 'idusuarios'},
                        {'data': 'nombre'},
                        {'data': 'apellidos'},
                        {'data': 'email'},
                        {'data': 'password'},
                        {'data': 'perfil'}
                    ],
                    language: Espanol,
                    lengthMenu: [[8, 10, 25, 50, -1], [8, 10, 25, 50, "All"]]
                });
                $('#tabla').removeAttr('style');
                data_editar();
                data_borrar();
            });
};
var Espanol = {
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar _MENU_ registros",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ningún dato disponible en esta tabla",
    "sInfo": "Registros del _START_ al _END_ de un total de _TOTAL_",
    "sInfoEmpty": "Registros del 0 al 0 de un total de 0",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Buscar:",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    }
};
function data_editar() {

    $('#tabla tbody').on('click', 'button.editar', function(e) {
        e.preventDefault();
        var table = $('#tabla').DataTable();
        var dato = table.row($(this).parents('tr')).data();
        console.log("clck en boton editar de tabla");

        BotonOrigen = "data_editar";
        idusuarioCons = dato.idusuarios;

        localStorage.setItem("BotonOrigen", BotonOrigen);
        localStorage.setItem("idusuarioCons", idusuarioCons);

        datos.FormUsuarios();
    });
};

function data_borrar() {

    $('#tabla tbody').on('click', 'button.eliminar', function() {
        var table = $('#tabla').DataTable();
        var dato = table.row($(this).parents('tr')).data();
        idusuarios = $('#idusuarios').val(dato.idusuarios);
        swal({
            title: "Borrar usuario " + dato.idusuarios,
            text: "¿Seguro que quiere eliminar este usuario?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Borrar",
            closeOnConfirm: true
        },
                function() {
                    console.log("clck en boton borrar de tabla");
                    $.post('SvUsuarios', {
                        idusuarios: dato.idusuarios,
                        opcion: "eliminar"},
                            function() { 
                                datos.listar();
                            });
                }
        );
    });
};





