BotonOrigen = "";

CombAmbito = function() {
    var ambito = ['España', 'Unión Europea', 'Extracomunitario'];
    var option = "";
    for (var i = 0; i < ambito.length; i++) {
        option += '<option value="' + ambito[i] + '">' + ambito[i] + '</option>';
    }
    $('#ambito').append(option);
};

CombDivisas = function() {
    var divisas = ['Dolar', 'Libras', 'Euros'];
    var option = "";
    for (var i = 0; i < divisas.length; i++) {
        option += '<option value="' + divisas[i] + '">' + divisas[i] + '</option>';
    }
    $('#divisafactura').append(option);
};

CombIRPF = function() {
    var irpf = ['15'];
    var option = "";
    for (var i = 0; i < irpf.length; i++) {
        option += '<option value="' + irpf[i] + '">' + irpf[i] + '</option>';
    }
    $('#irpf').append(option);
};

CombTipoTraduccion = function() {
    var tipotrad = ['Jurídica', 'Médica', 'Técnica', 'Jurada'];
    var option = "";
    for (var i = 0; i < tipotrad.length; i++) {
        option += '<option value="' + tipotrad[i] + '">' + tipotrad[i] + '</option>';
    }
    $('#tipotraduccion').append(option);
};

CombEstadoProy = function() {
    var estadoproy = ['Pendiente', 'Aceptado'];
    var option = "";
    for (var i = 0; i < estadoproy.length; i++) {
        option += '<option value="' + estadoproy[i] + '">' + estadoproy[i] + '</option>';
    }
    $('#estadoproyecto').append(option);
};

CombTipoTarifa = function() {
    var tarifa = ['Palabras', 'Lineas', 'Mínima', 'Horas'];
    var option = "";
    for (var i = 0; i < tarifa.length; i++) {
        option += '<option value="' + tarifa[i] + '">' + tarifa[i] + '</option>';
    }
    $('#tipotarifa').append(option);
};

// DESDE ARCHIVO JSON

CombIVA = function() {
    $.getJSON("../../Json/JsonIva.json", function(myObj) {
        var option = "";
        for (i = 0; i < myObj.tipo.length; i++) {
            option += '<option value="' + myObj.tipo[i].iva + '">' + myObj.tipo[i].iva + myObj.tipo[i].titulo + '</option>';
        }
        $('#tipoiva').append(option);
    });
};

CombAmortizacion = function() {
    $.getJSON("../../Json/JsonAmortizacion.json", function(myObj) {
        var option = "";
        for (i = 0; i < myObj.amortizacion.length; i++) {
            option += '<option value="' + myObj.amortizacion[i].años + '">' +
                    myObj.amortizacion[i].años + '&nbsp;' + myObj.amortizacion[i].titulo + '</option>';
        }
        $('#amortizacion').append(option);
    });
};

CombIdiomas = function() {
    $.getJSON("../../Json/JsonIdiomas.json", function(myObj) {
        var option = "";
        for (i = 0; i < myObj.idiomas.length; i++) {
            option += '<option value="' + myObj.idiomas[i].cod + '">' +
                    myObj.idiomas[i].cod + ' -- ' + myObj.idiomas[i].nombre + '</option>';
        }
        $('#idiomafactura').append(option);
        $('#idiomaorigen').append(option);
        $('#idiomameta').append(option);
    });
};

// DESDE SERVLET

CombProyectos = function() {
    $.getJSON('../Proyectos/SvProyectos', {
        opcion: "listar",
        idproyecto: 0,
        idcliente: 0,
        tarifaaplicada: 0,
        totalunidades: 0,
        dataType: 'json'},
            function(data) {
                $('#cmbProyectos').append('<option value="">Elija un proyecto</option>');
                $('#cmbProyectos').append('<option value="">------------------</option>');
                $.each(data, function(index) {
                    $('#cmbProyectos').append('<option value="' + data[index].idproyecto + '">' + data[index].razonsocial + " -- " + data[index].fecha + '</option>');
                });
            });
};


CombProveedoresCompras = function() {
    $.getJSON('../Proveedores/SvProveedores', {
        opcion: "listar",
        idproveedor: 0,
        dataType: 'json'},
            function(data) { 
                var idproveedorCons = localStorage.getItem("idproveedorCons");
                var razonsocialCons = localStorage.getItem("razonsocialCons");
                if (BotonOrigen === "data_editar") {
                    $('#cmbProveedor').append('<option value="' + idproveedorCons + '">' + razonsocialCons + '</option>');
                    $('#cmbProveedor').append('<option value="">------------------</option>');
                } else {
                    $('#cmbProveedor').append('<option value="">Elija un proveedor</option>');
                    $('#cmbProveedor').append('<option value="">------------------</option>');
                }
                $.each(data, function(index) {
                    $('#cmbProveedor').append('<option value="' + data[index].idproveedor + '">' + data[index].razonsocial + '</option>');
                });
            });
};

CombProyectosClientes = function() {
    $.getJSON('../Clientes/SvClientes', {
        opcion: "listar",
        idcliente: 0,
        dataType: 'json'},
            function(data) {
                var idclienteCons = localStorage.getItem("idclienteCons");
                var razonsocialCons = localStorage.getItem("razonsocialCons");
                //si el BotonOrigen viene del datatable de proyectos o si viene del datatable de proyecos en el formulario de facturas
                if (BotonOrigen === "data_editar" || BotonOrigen === "data_editar_desdeFacturas") {
                    $('#cmbClientes').append('<option value="' + idclienteCons + '">' + razonsocialCons + '</option>');
                    $('#cmbClientes').append('<option value="">------------------</option>');
                } else {
                    $('#cmbClientes').append('<option value="">Elija un cliente</option>');
                    $('#cmbClientes').append('<option value="">------------------</option>');
                }
                $.each(data, function(index) {
                    $('#cmbClientes').append('<option value="' + data[index].idcliente + '">' + data[index].razonsocial + '</option>');
                });
            });
};

//CombFacturas = function() {
//    $.getJSON('../Facturas/SvFacturas', {
//        opcion: "listar",
//        idfactura: 0,
//        tipoiva: 0,
//        irpf: 0,
//        descuentos: 0,
//        dataType: 'json'},
//            function(data) {
//                console.log("data -->" + data);
//                $('#cmbFacturas').append('<option value="">Elija una factura</option>');
//                $('#cmbFacturas').append('<option value="">------------------</option>');
//                $.each(data, function(index) {
//                    $('#cmbFacturas').append('<option value="' + data[index].idfactura + '">' + data[index].codfactura + " ---- " + data[index].fecha + '</option>');
//                });
//            });
//};
