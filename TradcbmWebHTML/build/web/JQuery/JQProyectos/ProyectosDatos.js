
var datos = datos || {};
var BotonOrigen = "";

//Funcion de dato nuevo
datos.FormProyectos = function() {
    BotonOrigen = localStorage.getItem("BotonOrigen");
    console.log("BotonOrigen --> " + BotonOrigen);
    switch (BotonOrigen) {
        case "tblNuevo":
            console.log("Caso Nuevo");
            $('#idproyecto').val("");
            $('#cmbClientes').val("");
            $('#codproyecto').val("");
            $('#fecha').val("");
            $('#tipotraduccion').val("");
            $('#idiomaorigen').val("");
            $('#idiomameta').val("");
            $('#estadoproyecto').val("");
            $('#carpetaproyecto').val("");
            $('#concepto').val("");
            $('#tipotarifa').val("");
            $('#tarifaaplicada').val("");
            $('#totalunidades').val("");
            break;
        case "data_editar":
            console.log(localStorage);
            datos.consultar(); 
            break; 
        case "data_editar_desdeFacturas":
            console.log(localStorage);
            datos.consultar();
            break;
        default:
            break;
    }
};

datos.nuevo = function() {
    console.log("datos de nuevo");
    $.post('SvProyectos', {
        idproyecto: 0,
        idcliente: $('#cmbClientes').val(),
        codproyecto: $('#codproyecto').val(),
        fecha: $('#fecha').val(),
        tipotraduccion: $('#tipotraduccion').val(),
        idiomaorigen: $('#idiomaorigen').val(),
        idiomameta: $('#idiomameta').val(),
        estadoproyecto: $('#estadoproyecto').val(),
        carpetaproyecto: $('#carpetaproyecto').val(),
        concepto: $('#concepto').val(),
        tipotarifa: $('#tipotarifa').val(),
        tarifaaplicada: $('#tarifaaplicada').val(),
        totalunidades: $('#totalunidades').val(),
        opcion: "nuevo"},
            function(respuesta) {
                if (respuesta === "Existe") {
                    swal({
                        title: "Error",
                        text: "El proyecto ya existe",
                        type: "error",
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true});
                } else {
                    swal({
                        title: "¡¡Hecho!!",
                        text: "Proyecto añadida",
                        type: "success",
                        cancelButtonText: "Cancel",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true},
                            function() {
                                location.href = "ListadoProyectos.html";
                            });
                }
            });
};
//Función de modificar usuario
datos.modificar = function() {
    console.log("Funcion modificar");
    swal({
        title: "¿Seguro que deseas modificar este proyecto?",
        text: "No podrás deshacer este paso...",
        type: "success",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Modificar",
        closeOnConfirm: false},
            function() {
                $.post('SvProyectos', {
                    idproyecto: $('#idproyecto').val(),
                    idcliente: $('#cmbClientes').val(),
                    codproyecto: $('#codproyecto').val(),
                    fecha: $('#fecha').val(),
                    tipotraduccion: $('#tipotraduccion').val(),
                    idiomaorigen: $('#idiomaorigen').val(),
                    idiomameta: $('#idiomameta').val(),
                    estadoproyecto: $('#estadoproyecto').val(),
                    carpetaproyecto: $('#carpetaproyecto').val(),
                    concepto: $('#concepto').val(),
                    tipotarifa: $('#tipotarifa').val(),
                    tarifaaplicada: $('#tarifaaplicada').val(),
                    totalunidades: $('#totalunidades').val(),
                    opcion: "modificar"},
                        function() {
                            swal({
                                title: "¡¡Hecho!!",
                                text: "Proyecto Modificada",
                                type: "success",
                                cancelButtonText: "Cancel",
                                confirmButtonColor: "#3085d6",
                                confirmButtonText: "OK",
                                closeOnConfirm: false,
                                showLoaderOnConfirm: true},
                                    function() {
                                        location.href = "ListadoProyectos.html";
                                    });
                        });
            });
};

//Función para pedir mediante ajax una consulta de usuario
datos.consultar = function() {
    console.log("datos de consultar");
    console.log("BotonOrigen --> " + BotonOrigen);

    idproyectoCons = localStorage.getItem("idproyectoCons");

    $.post('SvProyectos', {
        idproyecto: idproyectoCons,
        idcliente: 0,
        totalunidades: 0,
        tarifaaplicada: 0,
        opcion: "consultar"},
            function(respuesta) {
                idproyectoCons = "";
                myJson = $.parseJSON(respuesta);
                console.log("myJson -->" + myJson);

                //rellenamos los campos
                $('#idproyecto').val(myJson.idproyecto);
                $('#codproyecto').val(myJson.codproyecto);
                $('#fecha').val(myJson.fecha);
                $('#tipotraduccion option').eq(0).val(myJson.tipotraduccion).html(myJson.tipotraduccion + "</option>");
                $('#idiomaorigen option').eq(0).val(myJson.idiomaorigen).html(myJson.idiomaorigen + "</option>");
                $('#idiomameta option').eq(0).val(myJson.idiomameta).html(myJson.idiomameta + "</option>");
                $('#estadoproyecto option').eq(0).val(myJson.estadoproyecto).html(myJson.estadoproyecto + "</option>");
                $('#carpetaproyecto').val(myJson.carpetaproyecto);
                $('#concepto').val(myJson.concepto);
                $('#tipotarifa option').eq(0).val(myJson.tipotarifa).html(myJson.tipotarifa + "</option>");
                $('#tarifaaplicada').val(myJson.tarifaaplicada);
                $('#totalunidades').val(myJson.totalunidades);
            });
};
//******************************************************************************
//  DATETABLE
//******************************************************************************

datos.listar = function() {

    $.post('SvProyectos', {
        opcion: "listar",
        method: 'post',
        idproyecto: 0,
        idcliente: 0,
        tarifaaplicada: 0,
        totalunidades: 0,
        dataType: 'json'},
            function(data) {
                myJson = $.parseJSON(data);
                console.log("Json --> " + myJson);
                console.log(data);

                table = $('#tabla').dataTable({
                    data: myJson,
                    destroy: true,
                    columns: [
                        {"defaultContent":
                                    "<button type='button'  class='editar btn btn-primary'><i class='fa fa-pencil-square-o'></i></button>\n\
                                       <button type='button'  class='eliminar btn btn-danger'><i class='fa fa-trash'></i></button>\n\
                                       <button type='submit'  class='info btn btn-info'><i class='fa fa-eye'></i></button>"

                        },
                        {'data': 'idproyecto', 'visible': false},
                        {'data': 'razonsocial', 'defaultContent': ""},
                        {'data': 'codcliente', 'defaultContent': ""},
                        {'data': 'codproyecto', 'defaultContent': ""},
                        {'data': 'fecha', 'type': 'date', 'defaultContent': ""},
                        {'data': 'tipotraduccion', 'defaultContent': ""},
                        {'data': 'idiomaorigen', 'defaultContent': ""},
                        {'data': 'idiomameta', 'defaultContent': ""},
                        {'data': 'estadoproyecto', 'defaultContent': ""},
                        {'data': 'carpetaproyecto', 'defaultContent': "", 'visible': false},
                        {'data': 'concepto', 'defaultContent': "", 'visible': false},
                        {'data': 'tipotarifa', 'defaultContent': "", 'visible': false},
                        {'data': 'tarifaaplicada', 'defaultContent': "", 'visible': false},
                        {'data': 'totalunidades', 'defaultContent': "", 'visible': false}
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

        console.log("clck en boton editar de tabla");

        BotonOrigen = "data_editar";
        idproyectoCons = dato.idproyecto;
        idclienteCons = dato.idcliente;
        razonsocialCons = dato.razonsocial;

        localStorage.setItem("BotonOrigen", BotonOrigen);
        localStorage.setItem("idproyectoCons", idproyectoCons);
        localStorage.setItem("idclienteCons", idclienteCons);
        localStorage.setItem("razonsocialCons", razonsocialCons);
 
        datos.FormProyectos();
        location.href = "Proyectos.html";
    });
};
function data_borrar() {

    $('#tabla tbody').on('click', 'button.eliminar', function() {
        var table = $('#tabla').DataTable();
        var dato = table.row($(this).parents('tr')).data();
        idproyecto = $('#idproyecto').val(dato.idproyecto);
        swal({
            title: "Borrar factura de compra de " + dato.idproyecto,
            text: "¿Seguro que quiere eliminar esta factura de compra?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Borrar",
            closeOnConfirm: true
        },
                function() {
                    console.log("clck en boton borrar de tabla");
                    $.post('SvProyectos', {
                        idproyecto: dato.idproyecto,
                        idcliente: 0,
                        totalunidades: 0,
                        tarifaaplicada: 0,
                        opcion: "eliminar"},
                            function() {
                                datos.listar();
                            });
                }
        );
    });
}
;

function data_info() {
    $('#tabla tbody').on('click', 'button.info', function(e) {
        e.preventDefault();
        $("#modal").modal();
        var table = $('#tabla').DataTable();
        var dato = table.row($(this).parents('tr')).data();

        //Rellenamos las label
        $('#Modproyecto').text('Proyecto : ' + dato.codproyecto);
        $('#Modcombcliente').text('Cliente : ' + dato.razonsocial);
        $('#Modcodproyecto').text('Código Proyecto : ' + dato.codproyecto);
        $('#Modfecha').text('Fecha : ' + dato.fecha);
        $('#Modtipotraduccion').text('Tipo Traducción : ' + dato.tipotraduccion);
        $('#Modidiomaorigen').text('Idioma Origen : ' + dato.idiomaorigen);
        $('#Modidiomameta').text('Idioma Meta : ' + dato.idiomameta);
        $('#Modestadoproyecto').text('Estado Proyecto : ' + dato.estadoproyecto);
        $('#Modcarpetaproyecto').text('Carpeta Proyecto : ' + dato.carpetaproyecto);
        $('#Modconcepto').text('Concepto : ' + dato.concepto);
        $('#Modtipotarifa').text('País : ' + dato.tipotarifa);
        $('#Modtarifaaplicada').text('Tarifa Aplicada : ' + dato.tarifaaplicada);
        $('#Modtotalunidades').text('Total Unidades : ' + dato.totalunidades);

        //Función del botón modal
        $('#ModEditar').on('click', function() {
            BotonOrigen = "data_editar";
            idproyectoCons = dato.idproyecto;

            localStorage.setItem("BotonOrigen", BotonOrigen);
            localStorage.setItem("idproyectoCons", idproyectoCons);

            datos.FormProyectos();
            location.href = "Proyectos.html";
        });
    });
};





