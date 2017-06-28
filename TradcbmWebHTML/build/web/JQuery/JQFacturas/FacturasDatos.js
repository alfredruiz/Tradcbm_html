var datos = datos || {};
var BotonOrigen = "";

//Funcion de factura nueva
datos.FormFacturas = function() {
    BotonOrigen = localStorage.getItem("BotonOrigen");
    console.log("BotonOrigen --> " + BotonOrigen);
    switch (BotonOrigen) {
        case "tblNuevo":
            console.log("Caso Nuevo");
            $('#idfactura').val("");
            $('#codfactura').val("");
            $('#idiomafactura').val("");
            $('#ambito').val("");
            $('#fecha').val("");
            $('#tipoiva').val("");
            $('#irpf').val("");
            $('#descuentos').val("");
            $('#vencimientos').val("");
            $('#divisafactura').val("");
            $('#cmbClientes').val("");
            $('#AgregarProy').attr('disabled', true);
            $('#cmbProyectos').attr('disabled', true);
            $("#listado2").css('display', 'none');
            break;
        case "data_editar":
            console.log(localStorage);
            datos.consultar();
            $('#AgregarProy').attr('disabled', false);
            $('#cmbProyectos').attr('disabled', false);
            datos.listarFacProy(); 
            break;
        case "UltimaFactura": 
            $('#AgregarProy').attr('disabled', false);
            $('#cmbProyectos').attr('disabled', false); 
            $("#listado2").hide();
            datos.listarLastFac(); 
            default:
            break;
    }
};

datos.nuevo = function() {
    console.log("datos de nuevo");
    $.post('SvFacturas', {
        idfactura: 0,
        codfactura: $('#codfactura').val(),
        idiomafactura: $('#idiomafactura').val(),
        ambito: $('#ambito').val(),
        fecha: $('#fecha').val(),
        tipoiva: $('#tipoiva').val(),
        irpf: $('#irpf').val(),
        descuentos: $('#descuentos').val(),
        vencimientos: $('#vencimientos').val(),
        divisafactura: $('#divisafactura').val(),
        idcliente: $('#cmbClientes').val(),
        opcion: "nuevo"},
            function(respuesta) {
                if (respuesta === "Existe") {
                    swal({
                        title: "Error",
                        text: "La factura ya existe",
                        type: "error",
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true});
                } else {
                    swal({
                        title: "¡¡Hecho!!",
                        text: "Factura añadida",
                        type: "success",
                        cancelButtonText: "Cancel",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                        closeOnConfirm: true},
                            function() {
                                $('#cmbProyectos').attr('disabled', false);
                                $('#AgregarProy').attr('disabled', false);
                                var BotonOrigen = "UltimaFactura";
                                localStorage.setItem("BotonOrigen", BotonOrigen);
                                location.href = "Facturas.html"; 
                            });
                }
            });
};

//Función de modificar factura
datos.modificar = function() {
    console.log("Funcion modificar");
    swal({
        title: "¿Seguro que deseas modificar esta factura?",
        text: "No podrás deshacer este paso...",
        type: "success",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Modificar",
        closeOnConfirm: false},
            function() {
                $.post('SvFacturas', {
                    idfactura: $('#idfactura').val(),
                    codfactura: $('#codfactura').val(),
                    idiomafactura: $('#idiomafactura').val(),
                    ambito: $('#ambito').val(),
                    fecha: $('#fecha').val(),
                    tipoiva: $('#tipoiva').val(),
                    irpf: $('#irpf').val(),
                    descuentos: $('#descuentos').val(),
                    vencimientos: $('#vencimientos').val(),
                    divisafactura: $('#divisafactura').val(),
                    idcliente: $('#cmbClientes').val(),
                    opcion: "modificar"},
                        function() {
                            swal({
                                title: "¡¡Hecho!!",
                                text: "Factura Modificada",
                                type: "success",
                                cancelButtonText: "Cancel",
                                confirmButtonColor: "#3085d6",
                                confirmButtonText: "OK",
                                closeOnConfirm: false,
                                showLoaderOnConfirm: true},
                                    function() {
                                        location.href = "ListadoFacturas.html";
                                    });
                        });
            });
};

//Función para pedir mediante ajax una consulta
datos.consultar = function() {
    console.log("datos de consultar");
    console.log("BotonOrigen --> " + BotonOrigen);

    idfacturaCons = localStorage.getItem("idfacturaCons");

    $.post('SvFacturas', {
        idfactura: idfacturaCons,
        tipoiva: 0,
        irpf: 0,
        descuentos: 0,
        idcliente: 0,
        opcion: "consultar"},
            function(respuesta) {
                idfacturaCons = "";
                myJson = $.parseJSON(respuesta);
                console.log("myJson -->" + myJson);
                //rellenamos los campos
                $('#idfactura').val(myJson.idfactura);
                $('#codfactura').val(myJson.codfactura);
                $('#cmbClientes option').eq(0).val(myJson.idcliente).html(myJson.idcliente + "</option>");
                $('#idiomafactura option').eq(0).val(myJson.idiomafactura).html(myJson.idiomafactura + "</option>");
                $('#ambito option').eq(0).val(myJson.ambito).html(myJson.ambito + "</option>");
                $('#fecha').val(myJson.fecha);
                $('#tipoiva option').eq(0).val(myJson.tipoiva).html(myJson.tipoiva + "</option>");
                $('#irpf option').eq(0).val(myJson.irpf).html(myJson.irpf + "</option>");
                $('#descuentos').val(myJson.descuentos);
                $('#vencimientos').val(myJson.vencimientos);
                $('#divisafactura option').eq(0).val(myJson.divisafactura).html(myJson.divisafactura + "</option>");
            });
};

//Función para consultar la última factura creada
datos.listarLastFac = function() {
    console.log("datos de Listar ultima factura");
    console.log("BotonOrigen --> " + BotonOrigen);
  
    $.post('SvFacturas', {
        opcion: "listarLast", 
        idfactura: 0,
        tipoiva: 0,
        irpf: 0,
        descuentos: 0,
        idcliente: 0
    },
            function(data) {
                myJson = $.parseJSON(data);
                idfacturaCons = "";

                console.log("myJson -->" + myJson); 
                //rellenamos los campos
                $('#idfactura').val(myJson[0].idfactura);
                $('#codfactura').val(myJson[0].codfactura);
                $('#cmbClientes option').eq(0).val(myJson[0].idcliente).html(myJson[0].idcliente + "</option>");
                $('#idiomafactura option').eq(0).val(myJson[0].idiomafactura).html(myJson[0].idiomafactura + "</option>");
                $('#ambito option').eq(0).val(myJson[0].ambito).html(myJson[0].ambito + "</option>");
                $('#fecha').val(myJson[0].fecha);
                $('#tipoiva option').eq(0).val(myJson[0].tipoiva).html(myJson[0].tipoiva + "</option>");
                $('#irpf option').eq(0).val(myJson[0].irpf).html(myJson[0].irpf + "</option>");
                $('#descuentos').val(myJson[0].descuentos);
                $('#vencimientos').val(myJson[0].vencimientos);
                $('#divisafactura option').eq(0).val(myJson[0].divisafactura).html(myJson[0].divisafactura + "</option>"); 
            }); 
};

//******************************************************************************
//  DATETABLE
//******************************************************************************

datos.listar = function() {

    $.post('SvFacturas', {
        opcion: "listar",
        method: 'post',
        idfactura: 0,
        tipoiva: 0,
        irpf: 0,
        descuentos: 0,
        idcliente: 0,
        dataType: 'json'},
            function(data) {
                myJson = $.parseJSON(data);
                console.log("Json --> " + myJson);
                table = $('#tabla').dataTable({
                    data: myJson,
                    destroy: true,
                    columns: [
                        {"defaultContent":
                                    "<button type='button'  class='editar btn btn-primary'><i class='fa fa-pencil-square-o'></i></button>\n\
                                     <button type='button'  class='eliminar btn btn-danger'><i class='fa fa-trash'></i></button>\n\
                                     <button type='submit'  class='info btn btn-info'><i class='fa fa-eye'></i></button>"

                        },
                        {'data': 'idfactura', 'visible': false},
                        {'data': 'codfactura', 'defaultContent': ""},
                        {'data': 'razonsocial', 'defaultContent': ""},
                        {'data': 'idiomafactura', 'defaultContent': ""},
                        {'data': 'ambito', 'defaultContent': ""},
                        {'data': 'fecha', 'defaultContent': ""},
                        {'data': 'tipoiva', 'defaultContent': ""},
                        {'data': 'irpf', 'defaultContent': ""},
                        {'data': 'descuentos', 'defaultContent': ""},
                        {'data': 'vencimientos', 'defaultContent': ""},
                        {'data': 'divisafactura', 'defaultContent': ""},
                        {'data': 'idcliente', 'visible': false}
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
        idfacturaCons = dato.idfactura; 
        idclienteCons = dato.idcliente;
        razonsocialCons = dato.razonsocial;

        localStorage.setItem("BotonOrigen", BotonOrigen);
        localStorage.setItem("idfacturaCons", idfacturaCons);
        localStorage.setItem("idclienteCons", idclienteCons);
        localStorage.setItem("razonsocialCons", razonsocialCons); 

        datos.FormFacturas();
        location.href = "Facturas.html";
    });
};
function data_borrar() {

    $('#tabla tbody').on('click', 'button.eliminar', function() {
        var table = $('#tabla').DataTable();
        var dato = table.row($(this).parents('tr')).data();
        idfactura = $('#idfactura').val(dato.idfactura);
        codfactura = $('#codfactura').val(dato.codfactura);
        swal({
            title: "Borrar factura de compra de " + dato.codfactura,
            text: "¿Seguro que quiere eliminar esta factura?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Borrar",
            closeOnConfirm: true
        },
                function() {
                    console.log("clck en boton borrar de tabla");
                    $.post('SvFacturas', {
                        idfactura: dato.idfactura,
                        tipoiva: 0,
                        irpf: 0,
                        descuentos: 0,
                        idcliente: 0,
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
        $('#Modfactura').text('Factura : ' + dato.codfactura);
        $('#Modcodfactura').text('Código Factura : ' + dato.codfactura);
        $('#Modidiomafactura').text('Idioma Factura : ' + dato.idiomafactura);
        $('#Modambito').text('Ambito : ' + dato.ambito);
        $('#Modfecha').text('Fecha : ' + dato.fecha);
        $('#Modtipoiva').text('Tipo IVA : ' + dato.tipoiva);
        $('#Modirpf').text('IRPF : ' + dato.irpf);
        $('#Moddescuentos').text('Descuentos : ' + dato.descuentos);
        $('#Modvencimientos').text('Vencimientos : ' + dato.vencimientos);
        $('#Moddivisafactura').text('Divisa Factura : ' + dato.divisafactura);
 
        //Función del botón modal
        $('#ModEditar').on('click', function() {
            BotonOrigen = "data_editar";
            idfacturaCons = dato.idfactura;
            idclienteCons = dato.idcliente;
            razonsocialCons = dato.razonsocial;

            localStorage.setItem("BotonOrigen", BotonOrigen);
            localStorage.setItem("idfacturaCons", idfacturaCons);
            localStorage.setItem("idclienteCons", idclienteCons);
            localStorage.setItem("razonsocialCons", razonsocialCons);

            datos.FormFacturas();
            location.href = "Facturas.html"; 
        });
    });
};

//******************************************************************************
//  DATOS DE LA TABLE FACTURAS_PROYECTOS
//******************************************************************************

datos.listarFacProy = function() {
    idfacturaCons = localStorage.getItem("idfacturaCons");
    $.post('SvFacturas_Proyectos', {
        opcion: "listar",
        method: 'post',
        idfacturas_proyectos: 0,
        idfactura: idfacturaCons,
        idproyecto: 0,
        dataType: 'json'},
            function(data) {
                myJson = $.parseJSON(data);
                console.log("Json --> " + myJson);
                console.log(data);
                $('tabla2_filter').addClass('BuscarListProyFac');

                table = $('#tabla2').dataTable({
                    data: myJson,
                    destroy: true,
                    columns: [
                        {"defaultContent":
                                    "<button type='button'  class='editarProy btn btn-primary'><i class='fa fa-pencil'></i></button>\n\
                                     <button type='button'  class='eliminarProy btn btn-danger'><i class='fa fa-trash'></i></button>"
                        },
                        {'data': 'IDFacturas_Proyectos', 'visible':false},
                        {'data': 'IDFactura', 'visible': false},
                        {'data': 'IDProyecto', 'visible': false},
                        {'data': 'codfactura', 'visible': false},
                        {'data': 'codproyecto', 'defaultContent': ""},
                        {'data': 'razonsocial', 'defaultContent': ""},
                        {'data': 'fecha', 'defaultContent': ""}
                    ],
                    language: Espanol,
                    lengthMenu: [[8, 10, 25, 50, -1], [8, 10, 25, 50, "All"]]
                });
                $('#tabla2').removeAttr('style');
                //mostrar un texto en el datatable para que seleccione un proyecto
                $('#tabla2 .odd .dataTables_empty').text("No hay proyectos seleccionados");
                data_EditarProy();
                data_EliminarProy(); 
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

function data_EditarProy() {

    $('#tabla2 tbody').on('click', 'button.editarProy', function(e) {
        e.preventDefault();
        var table = $('#tabla2').DataTable();
        var dato = table.row($(this).parents('tr')).data();
        console.log("clck en boton editar proyecto de formulario facturas");

        BotonOrigen = "data_editar_desdeFacturas";
        idproyectoCons = dato.IDProyecto;
        idclienteCons = dato.idcliente;
        razonsocialCons = dato.razonsocial;

        localStorage.setItem("BotonOrigen", BotonOrigen);
        localStorage.setItem("idproyectoCons", idproyectoCons);
        localStorage.setItem("idclienteCons", idclienteCons);
        localStorage.setItem("razonsocialCons", razonsocialCons);

        location.href = "../Proyectos/Proyectos.html";

    });
};

function data_EliminarProy() {

    $('#tabla2 tbody').on('click', 'button.eliminarProy', function() {
        var table = $('#tabla2').DataTable();
        var dato = table.row($(this).parents('tr')).data();
        idfacturas_proyectos = $('#IDFacturas_Proyectos').val(dato.IDFacturas_Proyectos);
        idproyecto = $('#IDProyecto').val(dato.IDProyecto);
        swal({
            title: "Borrar proyecto de la factura " + dato.IDProyecto,
            text: "¿Seguro que quiere eliminar este proyecto?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Borrar",
            closeOnConfirm: true
        },
                function() {
                    console.log("clck en boton borrar de tabla");
                    $.post('SvFacturas_Proyectos', {
                        idfacturas_proyectos: dato.IDFacturas_Proyectos,
                        idfactura: 0,
                        idproyecto: 0, 
                        opcion: "eliminar"},
                            function() {
                                datos.listarFacProy(); 
                            });
                }
        );
    });
};

datos.AgregarProyecto = function() {
    console.log("datos de agregar proyecto");

    $.post('SvFacturas_Proyectos', {
        idfacturas_proyectos: 0,
        idfactura: $('#idfactura').val(),
        idproyecto: $('#cmbProyectos').val(),
        opcion: "nuevo"},
            function() {
                datos.listarFacProy();
            });
};



