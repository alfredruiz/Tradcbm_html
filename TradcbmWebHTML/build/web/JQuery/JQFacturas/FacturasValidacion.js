var validar = validar || {};
var datos = "";

//Función para validar las peticiones de nuevo
validar.validar_nuevo = function() {
    $('#Registrar').validate({
        //Reglas de validación para cada input
        rules: {
            codfactura: {required: true, maxlength: 15},
            cmbClientes:{required: true},
            idiomafactura: {required: true},
            ambito: {required: true},
            fecha: {required: true , date: true},
            tipoiva: {required: true},
            irpf: {required: true},
            descuentos: {required: true},
            vencimientos: {required: true, date: true},
            divisafactura: {required: true} 
        },
        //mensajes de error de validación para cada input
        messages: {
            codfactura: {required: "Obligatorio",
                maxlength: "Máximo quince caracteres"},
            cmbClientes:{required: "Introduzca un cliente"},
            idiomafactura: {required: "Campo obligatorio"},
            ambito: {required: "Campo obligatorio"},
            fecha: {required: "Campo obligatorio"},
            tipoiva: {required: "Campo obligatorio"},
            irpf: {required: "Campo obligatorio"},
            descuentos: {required: "Campo obligatorio"},
            vencimientos: {required: "Campo obligatorio"},
            divisafactura: {required: "Campo obligatorio"} 
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
            codfactura: {required: true, maxlength: 15},
            cmbClientes:{required: true},
            idiomafactura: {required: true},
            ambito: {required: true},
            fecha: {required: true , date: true},
            tipoiva: {required: true},
            irpf: {required: true},
            descuentos: {required: true},
            vencimientos: {required: true, date: true},
            divisafactura: {required: true} 
        },
        //mensajes de error de validación para cada input
        messages: {
            codfactura: {required: "Campo obligatorio",
                maxlength: "Máximo quince caracteres"},
            cmbClientes:{required: "Introduzca un cliente"},
            idiomafactura: {required: "Campo obligatorio"},
            ambito: {required: "Campo obligatorio"},
            fecha: {required: "Campo obligatorio"},
            tipoiva: {required: "Campo obligatorio"},
            irpf: {required: "Campo obligatorio"},
            descuentos: {required: "Campo obligatorio"},
            vencimientos: {required: "Campo obligatorio"},
            divisafactura: {required: "Campo obligatorio"}           
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



