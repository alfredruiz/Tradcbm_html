
var datos = datos || {};
var BotonOrigen = ""; 

//Función dato nuevo
datos.FormProveedores = function() {
    BotonOrigen = localStorage.getItem("BotonOrigen");
    console.log("BotonOrigen --> " + BotonOrigen);
    switch (BotonOrigen) {
        case "tblNuevo":
            console.log("Caso Nuevo");
            $('#idproveedor').val("");
            $('#razonsocial').val("");
            $('#codproveedor').val("");
            $('#nif').val("");
            $('#personacontacto').val("");
            $('#direccion').val("");
            $('#ciudad').val("");
            $('#cp').val("");
            $('#pais').val("");
            $('#telefono1').val("");
            $('#telefono2').val("");
            $('#fax').val("");
            $('#email').val("");
            $('#web').val("");
            $('#descripcion').val("");
            break;
        case "data_editar":
            console.log(localStorage);
            datos.consultar(); 
            break;
        default:
            break;
    }
};

datos.nuevo = function() {
    console.log("datos de nuevo");
    $.post('SvProveedores', {
        idproveedor: 0,
        razonsocial: $('#razonsocial').val(),
        codproveedor: $('#codproveedor').val(),
        nif: $('#nif').val(),
        personacontacto: $('#personacontacto').val(),
        direccion: $('#direccion').val(),
        ciudad: $('#ciudad').val(),
        cp: $('#cp').val(),
        pais: $('#pais').val(),
        telefono1: $('#telefono1').val(),
        telefono2: $('#telefono2').val(),
        fax: $('#fax').val(),
        email: $('#email').val(),
        web: $('#web').val(),
        descripcion: $('#descripcion').val(),
        opcion: "nuevo"},
            function(respuesta) {
                if (respuesta === "Existe") {
                    swal({
                        title: "Error",
                        text: "Proveedor existe",
                        type: "error",
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true});
                } else {
                    swal({
                        title: "¡¡Hecho!!",
                        text: "Proveedor añadido",
                        type: "success",
                        cancelButtonText: "Cancel",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true},
                            function() {
                                if (BotonOrigen === "nuevoProv") {
                                    location.href = "../Compras/Compras.html"; 
                                } else {
                                    location.href = "ListadoProveedores.html";
                                }
                            });
                }
            });
};

//Función de modificar usuario
datos.modificar = function() {
    console.log("Funcion modificar");
    swal({
        title: "¿Seguro que deseas modificar el proveedor?",
        text: "No podrás deshacer este paso...",
        type: "success",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Modificar",
        closeOnConfirm: false},
            function() {
                $.post('SvProveedores', {
                    razonsocial: $('#razonsocial').val(),
                    codproveedor: $('#codproveedor').val(),
                    nif: $('#nif').val(),
                    personacontacto: $('#personacontacto').val(),
                    direccion: $('#direccion').val(),
                    ciudad: $('#ciudad').val(),
                    cp: $('#cp').val(),
                    pais: $('#pais').val(),
                    telefono1: $('#telefono1').val(),
                    telefono2: $('#telefono2').val(),
                    fax: $('#fax').val(),
                    email: $('#email').val(),
                    web: $('#web').val(),
                    descripcion: $('#descripcion').val(),
                    idproveedor: $('#idproveedor').val(),
                    opcion: "modificar"},
                        function() {
                            swal({
                                title: "Hecho!!!",
                                text: "Proveedor Modificado",
                                type: "success",
                                cancelButtonText: "Cancel",
                                confirmButtonColor: "#3085d6",
                                confirmButtonText: "OK",
                                closeOnConfirm: false,
                                showLoaderOnConfirm: true},
                                    function() {
                                        location.href = "ListadoProveedores.html";
                                    });
                        });
            });
};

//Función para pedir mediante ajax una consulta de usuario
datos.consultar = function() {

    console.log("datos de consultar");
    console.log("BotonOrigen --> " + BotonOrigen);

    idproveedorCons = localStorage.getItem("idproveedorCons");

    $.post('SvProveedores', {
        idproveedor: idproveedorCons,
        opcion: "consultar"},
            function(respuesta) {
                idproveedorCons = "";
                myJson = $.parseJSON(respuesta);
                console.log(myJson);
                //rellenamos los campos
                $('#idproveedor').val(myJson.idproveedor);
                $('#razonsocial').val(myJson.razonsocial);
                $('#codproveedor').val(myJson.codproveedor);
                $('#nif').val(myJson.nif);
                $('#personacontacto').val(myJson.personacontacto);
                $('#direccion').val(myJson.direccion);
                $('#ciudad').val(myJson.ciudad);
                $('#cp').val(myJson.cp);
                $('#pais').val(myJson.pais);
                $('#telefono1').val(myJson.telefono1);
                $('#telefono2').val(myJson.telefono2);
                $('#fax').val(myJson.fax);
                $('#email').val(myJson.email);
                $('#web').val(myJson.web);
                $('#descripcion').val(myJson.descripcion);
            });
};
//******************************************************************************
//  DATETABLE
//******************************************************************************

datos.listar = function() {
    $.post('SvProveedores', {
        opcion: "listar",
        method: 'post',
        idproveedor: 0,
        dataType: 'json'},
            function(data) {
                myJson = $.parseJSON(data);  
                table = $('#tabla').dataTable({
                    data: myJson,
                    destroy: true,
                    columns: [
                        {"defaultContent":
                                    "<button type='button'  class='editar btn btn-primary'><i class='fa fa-pencil-square-o'></i></button>\n\
                                     <button type='button'  class='eliminar btn btn-danger'><i class='fa fa-trash'></i></button>\n\
                                     <button type='submit'  class='info btn btn-info'><i class='fa fa-eye'></i></button>"

                        },
                        {'data': 'idproveedor', 'visible': false},
                        {'data': 'razonsocial', 'defaultContent': ""},
                        {'data': 'codproveedor', 'defaultContent': ""},
                        {'data': 'nif', 'defaultContent': ""},
                        {'data': 'personacontacto', 'defaultContent': ""},
                        {'data': 'direccion', 'defaultContent': ""},
                        {'data': 'ciudad', 'defaultContent': ""},
                        {'data': 'cp', 'defaultContent': ""},
                        {'data': 'pais', 'defaultContent': ""},
                        {'data': 'telefono1', 'defaultContent': ""},
                        {'data': 'telefono2', 'defaultContent': ""},
                        {'data': 'fax', 'defaultContent': "", 'visible': false},
                        {'data': 'email', 'defaultContent': "", 'visible': false},
                        {'data': 'web', 'defaultContent': "", 'visible': false},
                        {'data': 'descripcion', 'defaultContent': "", 'visible': false}
                    ],
                    language: Espanol,
                    lengthMenu: [[8, 10, 25, 50, -1], [8, 10, 25, 50, "All"]]
                });
                $('#tabla').removeAttr('style');
                data_editar();
                data_borrar();
                data_info();
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
        console.log("click en boton editar de tabla");

        BotonOrigen = "data_editar";
        idproveedorCons = dato.idproveedor;

        localStorage.setItem("BotonOrigen", BotonOrigen);
        localStorage.setItem("idproveedorCons", idproveedorCons);

        datos.FormProveedores();
        location.href = "Proveedores.html"; 

    });
};

function data_borrar() {

    $('#tabla tbody').on('click', 'button.eliminar', function() {
        var table = $('#tabla').DataTable();
        var dato = table.row($(this).parents('tr')).data();
        idproveedor = $('#idproveedor').val(dato.idproveedor);
        codproveedor = $('#codproveedor').val(dato.codproveedor);
        swal({
            title: "Borrar proveedor " + dato.codproveedor,
            text: "¿Seguro que quiere eliminar este proveedor?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Borrar",
            closeOnConfirm: true
        },
                function() {
                    console.log("clck en boton borrar de tabla");
                    $.post('SvProveedores', {
                        idproveedor: dato.idproveedor,
                        opcion: "eliminar"},
                            function() {
                                datos.listar();
                            });
                }
        );
    });
};

function data_info() {
    $('#tabla tbody').on('click', 'button.info', function(e) {
        e.preventDefault();
        $("#modal").modal();
        var table = $('#tabla').DataTable();
        var dato = table.row($(this).parents('tr')).data(); 
        
        //Rellenamos las label
        $('#Modproveedor').text('Proveedor : ' + dato.codproveedor);
        $('#Modrazonsocial').text('Razón Social : ' + dato.razonsocial);
        $('#Modcodproveedor').text('Código Proveedor : ' + dato.codproveedor);
        $('#Modnif').text('NIF : ' + dato.nif);
        $('#Modpersonacontacto').text('Persona Contacto : ' + dato.personacontacto);
        $('#Modciudad').text('Ciudad : ' + dato.ciudad);
        $('#Modcp').text('C.P : ' + dato.cp);
        $('#Modpais').text('País : ' + dato.pais);
        $('#Modtelefono').text('Teléfono : ' + dato.telefono1);
        $('#Modmovil').text('Móvil : ' + dato.telefono2);
        $('#Modfax').text('Fax : ' + dato.fax);
        $('#Modemail').text('Email : ' + dato.email);
        $('#Modweb').text('Web : ' + dato.web);
        $('#Moddescripcion').text('Descripción : ' + dato.descripcion);
        
        //Función del botón modal
        $('#ModEditar').on('click', function() {
            BotonOrigen = "data_editar";
            idproveedorCons = dato.idproveedor;

            localStorage.setItem("BotonOrigen", BotonOrigen);
            localStorage.setItem("idproveedorCons", idproveedorCons);

            datos.FormProveedores();
            location.href = "Proveedores.html"; 
        });
    });
};






