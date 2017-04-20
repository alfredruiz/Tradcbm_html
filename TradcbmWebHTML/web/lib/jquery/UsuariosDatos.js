var datos = datos || {};

//Funcion de dato nuevo usuario
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
            function(respuesta) {
                if (respuesta === "Existe") {
                    swal({
                        title: "Error",
                        text: "Usuario existe",
                        type: "error",
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true});
                } else {
                    $('#listado').show();
                    $('#Registrar').hide();
                    datos.listar();
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
                            swal("¡Hecho!",
                                    "Usuario Modificado",
                                    "success");
                            $('#listado').show();
                            $('#Registrar').hide();
                            datos.listar();
                        });
            });
};

datos.borrar = function() {
    console.log("datos de borrar");
    var usuario = $('#idusuarios').val();
    swal({
        title: "Borrar usaurio " + usuario,
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
                            $('#listado').show();
                            $('#Registrar').hide();
                            datos.listar();
                        });
            }
    );
};


//Función para pedir mediante ajax una consulta de usuario
datos.consultar = function() {
    console.log("datos de consultar");
    $.post('SvUsuarios', {
        idusuarios: $('#idusuarios').val(),
        opcion: "consultar"},
            function(respuesta) {
                myJson = $.parseJSON(respuesta);
                if (myJson === null) {
                    //quitamos la clase valid, añadimos la clase error y añadimos detrás un span de error
                    $('#idusuarios').removeClass("valid").addClass("error")
                            .after('<span for="idusuarios" id="spanerror" class="error spanerror">Usuario no existe</span>');
                } else {
                    $('#idusuarios').val(myJson.idusuarios);
                    $('#nombre').val(myJson.nombre);
                    $('#apellidos').val(myJson.apellidos);
                    $('#email').val(myJson.email);
                    $('#password').val(myJson.password);
                    $('#password2').val(myJson.password);
                    $('#perfil').val(myJson.perfil);
                }
            });
};



//****************************
//  DATETABLE
//****************************

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
                    language: Espanol
                });
                $('#tabla').removeAttr('style');
                data_editar();
                data_borrar();
            });
};
var Espanol = {
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar MENU registros",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ningún dato disponible en esta tabla",
    "sInfo": "Registros del START al END de un total de TOTAL",
    "sInfoEmpty": "Registros del 0 al 0 de un total de 0",
    "sInfoFiltered": "(filtrado de un total de MAX registros)",
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
        idusuarios = $('#idusuarios').val(dato.idusuarios);
        nombre = $('#nombre').val(dato.nombre);
        apellidos = $('#apellidos').val(dato.apellidos);
        email = $('#email').val(dato.email);
        password = $('#password').val(dato.password);
        password2 = $('#password2').val(dato.password);
        perfil = $('#perfil').val(dato.perfil);
        $('#idusuarios').prop('disabled', true);
        $('#Registrar').show();
        $('#listado').hide();
        console.log("clck en boton editar de tabla");
    });
}
;


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
                                $('#listado').show();
                                $('#Registrar').hide();
                                datos.listar();
                            });
                }
        );
    });
}
;