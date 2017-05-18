
var datos = datos || {};
var BotonOrigen = "";
//Funcion de dato nuevo usuario

datos.FormClientes = function() {
    BotonOrigen = localStorage.getItem("BotonOrigen");
    console.log("BotonOrigen --> " + BotonOrigen);
    switch (BotonOrigen) {
        case "tblNuevo":
            console.log("Caso Nuevo");
            $('#idcliente').val("");
            $('#codcliente').val("");
            $('#razonsocial').val("");
            $('#personacontacto').val("");
            $('#cargo').val("");
            $('#nif').val("");
            $('#direccion').val("");
            $('#ciudad').val("");
            $('#cp').val("");
            $('#pais').val("");
            $('#telefono1').val("");
            $('#telefono2').val("");
            $('#fax').val("");
            $('#email').val("");
            $('#web').val("");
            $('#cuentapago').val("");
            $('#observaciones').val("");
            break;
        case "data_editar":
            console.log(localStorage);
            datos.consultar();
            location.href = "Clientes.html";
            break;
        default:
            break;
    }

};

datos.nuevo = function() {
    console.log("datos de nuevo");
    $.post('SvClientes', {
        idcliente: 0,
        codcliente: $('#codcliente').val(),
        razonsocial: $('#razonsocial').val(),
        personacontacto: $('#personacontacto').val(),
        cargo: $('#cargo').val(),
        nif: $('#nif').val(),
        direccion: $('#direccion').val(),
        ciudad: $('#ciudad').val(),
        cp: $('#cp').val(),
        pais: $('#pais').val(),
        telefono1: $('#telefono1').val(),
        telefono2: $('#telefono2').val(),
        fax: $('#fax').val(),
        email: $('#email').val(),
        web: $('#web').val(),
        cuentapago: $('#cuentapago').val(),
        observaciones: $('#observaciones').val(),
        opcion: "nuevo"},
            function(respuesta) {
                if (respuesta === "Existe") {
                    swal({
                        title: "Error",
                        text: "Cliente existe",
                        type: "error",
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true});
                } else {
                    swal({
                        title: "¡¡Hecho!!",
                        text: "Cliente añadido",
                        type: "success",
                        cancelButtonText: "Cancel",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true},
                            function() {
                                location.href = "ListadoClientes.html";
                            });
                }
            });
};

//Función de modificar usuario
datos.modificar = function() {
    console.log("Funcion modificar");
    swal({
        title: "¿Seguro que deseas modificar el cliente?",
        text: "No podrás deshacer este paso...",
        type: "success",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Modificar",
        closeOnConfirm: false},
            function() {
                $.post('SvClientes', {
                    codcliente: $('#codcliente').val(),
                    razonsocial: $('#razonsocial').val(),
                    personacontacto: $('#personacontacto').val(),
                    cargo: $('#cargo').val(),
                    nif: $('#nif').val(),
                    direccion: $('#direccion').val(),
                    ciudad: $('#ciudad').val(),
                    cp: $('#cp').val(),
                    pais: $('#pais').val(),
                    telefono1: $('#telefono1').val(),
                    telefono2: $('#telefono2').val(),
                    fax: $('#fax').val(),
                    email: $('#email').val(),
                    web: $('#web').val(),
                    cuentapago: $('#cuentapago').val(),
                    observaciones: $('#observaciones').val(),
                    idcliente: $('#idcliente').val(),
                    opcion: "modificar"},
                        function() {
                            swal({
                                title: "Hecho!!!",
                                text: "Cliente Modificado",
                                type: "success",
                                cancelButtonText: "Cancel",
                                confirmButtonColor: "#3085d6",
                                confirmButtonText: "OK",
                                closeOnConfirm: false,
                                showLoaderOnConfirm: true},
                                    function() {
                                        location.href = "ListadoClientes.html";
                                    });
                        });
            });
};

//Función para pedir mediante ajax una consulta de usuario
datos.consultar = function() {
    console.log("datos de consultar");
    console.log("BotonOrigen --> " + BotonOrigen);

    idclienteCons = localStorage.getItem("idclienteCons");
    $.post('SvClientes', {
        idcliente: idclienteCons,
        opcion: "consultar"},
            function(respuesta) {
                idclienteCons = "";
                myJson = $.parseJSON(respuesta);
                console.log(myJson);
                //rellenamos los campos
                $('#idcliente').val(myJson.idcliente);
                $('#codcliente').val(myJson.codcliente);
                $('#razonsocial').val(myJson.razonsocial);
                $('#personacontacto').val(myJson.personacontacto);
                $('#cargo').val(myJson.cargo);
                $('#nif').val(myJson.nif);
                $('#direccion').val(myJson.direccion);
                $('#ciudad').val(myJson.ciudad);
                $('#cp').val(myJson.cp);
                $('#pais').val(myJson.pais);
                $('#telefono1').val(myJson.telefono1);
                $('#telefono2').val(myJson.telefono2);
                $('#fax').val(myJson.fax);
                $('#email').val(myJson.email);
                $('#web').val(myJson.web);
                $('#cuentapago').val(myJson.cuentapago);
                $('#observaciones').val(myJson.observaciones);
            });
};
//******************************************************************************
//  DATETABLE
//******************************************************************************

datos.listar = function() {
    $.post('SvClientes', {
        opcion: "listar",
        method: 'post',
        idcliente: 0,
        dataType: 'json'},
            function(data) {
                myJson = $.parseJSON(data);
                table = $('#tabla').dataTable({
                    data: myJson,
                    destroy: true,
                    scrollY: 300,
                    scrollX: true,
                    columns: [
                        {'defaultContent':
                                    "<button type='button' class='editar btn btn-primary'>\n\
                                        <i class='fa fa-pencil-square-o'></i></button>"},
                        {'defaultContent':
                                    "<button type='button' class='eliminar btn btn-danger'>\n\
                                         <i class='fa fa-trash-o'></i></button>"},
                        {'data': 'idcliente', 'visible': false},
                        {'data': 'codcliente'},
                        {'data': 'razonsocial'},
                        {'data': 'personacontacto', 'defaultContent': ""},
                        {'data': 'cargo', 'defaultContent': ""},
                        {'data': 'nif'},
                        {'data': 'direccion'},
                        {'data': 'ciudad'},
                        {'data': 'cp'},
                        {'data': 'pais', 'defaultContent': ""},
                        {'data': 'telefono1', 'defaultContent': ""},
                        {'data': 'telefono2', 'defaultContent': ""},
                        {'data': 'fax', 'defaultContent': ""},
                        {'data': 'email'},
                        {'data': 'web', 'defaultContent': ""},
                        {'data': 'cuentapago', 'defaultContent': ""},
                        {'data': 'observaciones', 'defaultContent': ""}
                    ],
                    language: Espanol,
                    lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]]
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
        idclienteCons = dato.idcliente;

        localStorage.setItem("BotonOrigen", BotonOrigen);
        localStorage.setItem("idclienteCons", idclienteCons);

        datos.FormClientes();

    });
}
;

function data_borrar() {

    $('#tabla tbody').on('click', 'button.eliminar', function() {
        var table = $('#tabla').DataTable();
        var dato = table.row($(this).parents('tr')).data();
        idcliente = $('#idcliente').val(dato.idcliente);
        swal({
            title: "Borrar cliente " + dato.idcliente,
            text: "¿Seguro que quiere eliminar este cliente?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Borrar",
            closeOnConfirm: true
        },
                function() {
                    console.log("clck en boton borrar de tabla");
                    $.post('SvClientes', {
                        idcliente: dato.idcliente,
                        opcion: "eliminar"},
                            function() {
                                datos.listar();
                            });
                }
        );
    });
}
;





