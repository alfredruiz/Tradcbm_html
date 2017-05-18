var validar = validar ||{};
var datos= "";

//Función para validar las peticiones de nuevo
validar.validar_nuevo = function() {
    $('#Registrar').validate({
        //Reglas de validación para cada input
        rules: {
            codcliente: {required: true, maxlength: 15},
            razonsocial: {required: true},
            nif: {required: true, maxlength: 10},
            cp: {required: true, maxlength: 10},
            direccion: {required: true},
            ciudad: {required: true},
            email: {required: true, email: true}, 
            cuentapago: {required: true}  
        },
        //mensajes de error de validación para cada input
        messages: {
            codcliente: {required: "Campo obligatorio",
                maxlength: "Máximo quince caracteres"},
            razonsocial: {required: "Campo obligatorio"},
            nif: {required:"Campo obligatorio", maxlength: "Máximo diez caracteres"},
            cp: {required: "Campo obligatorio", maxlength: "Máximo diez caracteres"},
            direccion: {required: "Campo obligatorio"},
            ciudad: {required: "Campo obligatorio"},
            email: {email: 'Formato incorrecto. Ejemplo: u@localhost.com'},
            cuentapago: {required: "Campo obligatorio"}  
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
            codcliente: {required: true, maxlength: 15},
            razonsocial: {required: true},
            nif: {required: true, maxlength: 10},
            cp: {required: true, maxlength: 10},
            direccion: {required: true},
            ciudad: {required: true},
            email: {email: true}, 
            cuentapago: {required: true}  
        },
        //mensajes de error de validación para cada input
       messages: {
            codcliente: {required: "Campo obligatorio",
                maxlength: "Máximo quince caracteres"},
            razonsocial: {required: "Campo obligatorio"},
            nif: {required:"Campo obligatorio", maxlength: "Máximo diez caracteres"},
            cp: {required: "Campo obligatorio", maxlength: "Máximo diez caracteres"},
            direccion: {required: "Campo obligatorio"},
            ciudad: {required: "Campo obligatorio"},
            email: {email: 'Formato incorrecto. Ejemplo: u@localhost.com'},
            cuentapago: {required: "Campo obligatorio"}  
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
 
 

