var validar = validar ||{};
var datos= "";

//Función para validar las peticiones de nuevo
validar.validar_nuevo = function() {
    $('#Registrar').validate({
        //Reglas de validación para cada input
         rules: { 
            razonsocial: {required: true},
            codproveedor: {required: true},
            nif: {required: true, maxlength: 10},
            cp: {required: true, maxlength: 10},
            direccion: {required: true},
            ciudad: {required: true},
            email: {required: true, email: true}  
        },
        //mensajes de error de validación para cada input
        messages: {
            razonsocial: {required: "Campo obligatorio"},
            codproveedor: {required: "Campo obligatorio"}, 
            nif: {required:"Campo obligatorio", maxlength: "Máximo diez caracteres"},
            cp: {required: "Campo obligatorio", maxlength: "Máximo diez caracteres"},
            direccion: {required: "Campo obligatorio"},
            ciudad: {required: "Campo obligatorio"},
            email: {email: 'Formato incorrecto. Ejemplo: u@localhost.com'} 
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
            razonsocial: {required: true},
            codproveedor: {required: true},
            nif: {required: true, maxlength: 10},
            cp: {required: true, maxlength: 10},
            direccion: {required: true},
            ciudad: {required: true},
            email: {required: true, email: true}  
        },
        //mensajes de error de validación para cada input
        messages: {
            razonsocial: {required: "Campo obligatorio"},
            codproveedor: {required: "Campo obligatorio"}, 
            nif: {required:"Campo obligatorio", maxlength: "Máximo diez caracteres"},
            cp: {required: "Campo obligatorio", maxlength: "Máximo diez caracteres"},
            direccion: {required: "Campo obligatorio"},
            ciudad: {required: "Campo obligatorio"},
            email: {email: 'Formato incorrecto. Ejemplo: u@localhost.com'} 
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
 
 

