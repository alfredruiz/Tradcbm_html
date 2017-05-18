var validar = validar || {};
var datos = "";

//Función para validar las peticiones de nuevo
validar.validar_nuevo = function() {
    $('#Registrar').validate({
        //Reglas de validación para cada input
        rules: {
            idproveedor: {required: true},
            concepto: {required: true},
            fecha: {required: true},
            basefactura: {required: true},
            tipoiva: {required: true},
            amortizacion: {required: true}
        },
        //mensajes de error de validación para cada input
        messages: {
            idproveedor: {required: "Debe seleccionar un proveedor"},
            concepto: {required: "Debe escribir un concepto"},
            fecha: {required: "Debe especificar una fecha"},
            basefactura: {required: "Debe especificar la base de la factura"},
            tipoiva: {required: "Debe seleccionar un tipo de IVA"},
            amortizacion: {required: "Deben especificar los años de amortizacion"}
        },
        //Formato del mensaje de error
        errorElement: 'span',
        //Dónde se coloca el mensaje de error
        errorPlacement: function(error, element) {
            error.html(error.text()).addClass('spanerror').insertAfter(element).hide().fadeIn();
        },
        //Funcionalidad para el botón de envío
        submitHandler: function() {
            console.log("validacion de nuevo");
            datos.nuevo();
        }
    });

};

//Función para la validación de modificar
validar.validar_modificar = function() {
    $('#Registrar').validate({
        //Reglas de validación para cada input
       rules: {
            idproveedor: {selectcheck: true},
            concepto: {required: true},
            fecha: {required: true},
            basefactura: {required: true},
            tipoiva: {selectcheck: true},
            amortizacion: {selectcheck: true}
        },
        //mensajes de error de validación para cada input
        messages: {
            idproveedor: {selectcheck: "Debe seleccionar un proveedor"},
            concepto: {required: "Debe escribir un concepto"},
            fecha: {required: "Debe especificar una fecha"},
            basefactura: {required: "Debe especificar la base de la factura"},
            tipoiva: {selectcheck: "Debe seleccionar un tipo de IVA"},
            amortizacion: {selectcheck: "Deben especificar los años de amortizacion"}
        },
        //Formato del mensaje de error
        errorElement: 'span',
        //Dónde se coloca el mensaje de error
        errorPlacement: function(error, element) {
            error.html(error.text()).addClass('spanerror').insertAfter(element).hide().fadeIn();
        },
        //Funcionalidad para el botón de envío
        submitHandler: function() {
            console.log("validacion de modificar");
            datos.modificar();
        }
    });
};


