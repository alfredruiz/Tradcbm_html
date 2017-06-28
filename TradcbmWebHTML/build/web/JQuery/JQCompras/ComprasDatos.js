
var datos = datos || {};
var BotonOrigen = "";

//Funcion de dato nuevo
datos.FormCompras = function() {
    BotonOrigen = localStorage.getItem("BotonOrigen");
    console.log("BotonOrigen --> " + BotonOrigen);
    switch (BotonOrigen) {
        case "tblNuevo":
            console.log("Caso Nuevo");
            $('#idcompras').val("");
            $('#cmbProveedor').val("");
            $('#numfactura').val("");
            $('#concepto').val("");
            $('#fecha').val("");
            $('#basefactura').val("");
            $('#tipoiva').val("");
            $('#amortizacion').val("");
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
    $.post('SvCompras', {
        idcompras: 0,
        idproveedor: $('#cmbProveedor').val(),
        numfactura: $('#numfactura').val(),
        concepto: $('#concepto').val(),
        fecha: $('#fecha').val(),
        basefactura: $('#basefactura').val(),
        tipoiva: $('#tipoiva').val(),
        amortizacion: $('#amortizacion').val(),
        opcion: "nuevo"},
            function(respuesta) {
                if (respuesta === "Existe") {
                    swal({
                        title: "Error",
                        text: "La factura de compra ya existe",
                        type: "error",
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true});
                } else {
                    swal({
                        title: "¡¡Hecho!!",
                        text: "Factura de compra añadida",
                        type: "success",
                        cancelButtonText: "Cancel",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true},
                            function() {
                                location.href = "ListadoCompras.html";
                            });
                }
            });
};
//Función de modificar usuario
datos.modificar = function() {
    console.log("Funcion modificar");
    swal({
        title: "¿Seguro que deseas modificar esta factura de compra?",
        text: "No podrás deshacer este paso...",
        type: "success",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Modificar",
        closeOnConfirm: false},
            function() {
                $.post('SvCompras', {
                    idcompras: $('#idcompras').val(),
                    idproveedor: $('#cmbProveedor').val(),
                    numfactura: $('#numfactura').val(),
                    concepto: $('#concepto').val(),
                    fecha: $('#fecha').val(),
                    basefactura: $('#basefactura').val(),
                    tipoiva: $('#tipoiva').val(),
                    amortizacion: $('#amortizacion').val(),
                    opcion: "modificar"},
                        function() {
                            swal({
                                title: "¡¡Hecho!!",
                                text: "Factura de compra Modificada",
                                type: "success",
                                cancelButtonText: "Cancel",
                                confirmButtonColor: "#3085d6",
                                confirmButtonText: "OK",
                                closeOnConfirm: false,
                                showLoaderOnConfirm: true},
                                    function() {
                                        location.href = "ListadoCompras.html";
                                    });
                        });
            });
};

//Función para pedir mediante ajax una consulta de usuario
datos.consultar = function() {
    console.log("datos de consultar");
    console.log("BotonOrigen --> " + BotonOrigen);

    idcomprasCons = localStorage.getItem("idcomprasCons");

    $.post('SvCompras', {
        idcompras: idcomprasCons,
        idproveedor: 0,
        basefactura: 0,
        tipoiva: 0,
        opcion: "consultar"},
            function(respuesta) {
                idcomprasCons = "";
                myJson = $.parseJSON(respuesta);
                console.log("myJson -->" + myJson);
                //rellenamos los campos
                $('#idcompras').val(myJson.IDCompras);
                $('#cmbProveedor option').eq(0).val(myJson.IDProveedor).html(myJson.IDProveedor + "</option>");
                $('#numfactura').val(myJson.NumFactura);
                $('#concepto').val(myJson.Concepto);
                $('#fecha').val(myJson.Fecha);
                $('#basefactura').val(myJson.BaseFactura);
                $('#tipoiva option').eq(0).val(myJson.TipoIVA).html(myJson.TipoIVA + "%</option>");
                $('#amortizacion option').eq(0).val(myJson.Amortizacion).html(myJson.Amortizacion + "</option>");
            });
};
//******************************************************************************
//  DATETABLE
//******************************************************************************

datos.listar = function() {

    $.post('SvCompras', {
        opcion: "listar",
        method: 'post',
        idcompras: 0,
        idproveedor: 0,
        basefactura: 0,
        tipoiva: 0,
        totaliva: 0,
        totalfactura: 0,
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
                        {'data': 'IDCompras', 'visible': true},
                        {'data': 'RazonSocial', 'defaultContent': ""},
                        {'data': 'NumFactura', 'defaultContent': ""},
                        {'data': 'Concepto', 'defaultContent': ""},
                        {'data': 'Fecha', 'defaultContent': ""},
                        {'data': 'Ejercicio', 'defaultContent': ""},
                        {'data': 'Trimestre', 'defaultContent': ""},
                        {'data': 'BaseFactura', 'defaultContent': ""},
                        {'data': 'TipoIVA', 'defaultContent': ""},
                        {'data': 'TotalIVA', 'defaultContent': ""},
                        {'data': 'TotalFactura', 'defaultContent': ""},
                        {'data': 'Amortizacion', 'defaultContent': ""}
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
        idcomprasCons = dato.IDCompras;
        idproveedorCons = dato.IDProveedor;
        razonsocialCons = dato.RazonSocial;

        localStorage.setItem("BotonOrigen", BotonOrigen);
        localStorage.setItem("idcomprasCons", idcomprasCons);
        localStorage.setItem("idproveedorCons", idproveedorCons);
        localStorage.setItem("razonsocialCons", razonsocialCons);

        datos.FormCompras();
        location.href = "Compras.html";
    });
}
;

function data_borrar() {

    $('#tabla tbody').on('click', 'button.eliminar', function() {
        var table = $('#tabla').DataTable();
        var dato = table.row($(this).parents('tr')).data();
        idcompras = $('#idcompras').val(dato.IDCompras);
        swal({
            title: "Borrar factura de compra de " + dato.IDProveedor,
            text: "¿Seguro que quiere eliminar esta factura de compra?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Borrar",
            closeOnConfirm: true
        },
                function() {
                    console.log("clck en boton borrar de tabla");
                    console.log("dato.idcompras -->" + dato.IDCompras);
                    $.post('SvCompras', {
                        idcompras: dato.IDCompras,
                        idproveedor: 0,
                        basefactura: 0,
                        tipoiva: 0,
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
        $('#Modcompra').text('Compra : ' + dato.NumFactura);
        $('#Modnumfactura').text('Número Factura : ' + dato.NumFactura);
        $('#Modconcepto').text('Concepto : ' + dato.Concepto);
        $('#Modfecha').text('Fecha : ' + dato.Fecha);
        $('#Modbasefactura').text('Base Factura : ' + dato.BaseFactura);
        $('#Modtipoiva').text('IVA : ' + dato.TipoIva);
        $('#Modtotaliva').text('Total IVA : ' + dato.TotalIva);
        $('#Modtotalfactura').text('Total Factura : ' + dato.TotalFactura);
        $('#Modamortizacion').text('Amortización : ' + dato.Amortizacion);

        //Función del botón modal
        $('#ModEditar').on('click', function() {
            BotonOrigen = "data_editar";
            idcomprasCons = dato.IDCompras;

            localStorage.setItem("BotonOrigen", BotonOrigen);
            localStorage.setItem("idcomprasCons", idcomprasCons);

            datos.FormCompras();
            location.href = "Compras.html";
        });
    });
}
;





