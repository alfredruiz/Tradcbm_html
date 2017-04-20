var validar = validar ||{};
var datos= "";

//Función para validar las peticiones de nuevo
validar.validar_nuevo = function() {
    $('#Registrar').validate({
        //Reglas de validación para cada input
        rules: {
            idusuarios: {required: true, maxlength: 10},
            nombre: {required: true},
            apellidos: {required: true},
            email: {required: true, email: true},
            password: {required: true, minlength: 5},
            password2: {required: true, equalTo: "#password"},
            perfil: {selectcheck: true}
        },
        //mensajes de error de validación para cada input
        messages: {
            idusuarios: {required: "Debe escribir un nombre de usuario",
                maxlength: "Máximo diez caracteres"},
            nombre: {required: "Debe escribir un nombre"},
            apellidos: {required: "Debe escribir un apellido"},
            email: {required: "Debe escribir un email",
                email: 'Formato incorrecto. Ejemplo: u@localhost.com'},
            password: {required: "Debe escribir una contraseña",
                minlength: "Mínimo cinco caracteres"},
            password2: {required: "Deben coincidir las contraseñas",
                minlength: "Mínimo cinco caracteres"}
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
    //Función para la validación del select de perfil
    jQuery.validator.addMethod('selectcheck', function(value) {
        return (value !== "");
    }, "Seleccione un perfil de usuario");
};

//Función para la validación de modificar
validar.validar_modificar = function() {
    $('#Registrar').validate({
        //Reglas de validación para cada input
        rules: {
            idusuarios: {required: true, maxlength: 10},
            nombre: {required: true},
            apellidos: {required: true},
            email: {required: true, email: true},
            password: {required: true, minlength: 5},
            password2: {required: true, equalTo: "#password"},
            perfil: {selectcheck: true}
        },
        //mensajes de error de validación para cada input
        messages: {
            idusuarios: {required: "Debe escribir un nombre de usuario",
                maxlength: "Máximo diez caracteres"},
            nombre: {required: "Debe escribir un nombre"},
            apellidos: {required: "Debe escribir un apellido"},
            email: {required: "Debe escribir un email",
                email: 'Formato incorrecto. Ejemplo: u@localhost.com'},
            password: {required: "Debe escribir una contraseña",
                minlength: "Mínimo cinco caracteres"},
            password2: {required: "Deben coincidir las contraseñas",
                minlength: "Mínimo cinco caracteres"}
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
    //Función para la validación del select de perfil
    jQuery.validator.addMethod('selectcheck', function(value) {
        return (value !== "");
    }, "Seleccione un perfil de usuario");
};

//Función para validar las peticiones de consultar y eliminar
validar.validar_Consultar = function() {
    $('#Registrar').validate({
        //Reglas de validación para cada input
        rules: {
            idusuarios: {required: true}
        },
        //mensajes de error de validación para cada input
        messages: {
            idusuarios: {required: "Debe escribir un nombre de usuario"}
        },
        errorElement: 'span',
        //Dónde se coloca el mensaje de error
        errorPlacement: function(error, element) {
            error.html(error.text()).addClass('spanerror').insertAfter(element).hide().fadeIn();
        },
        //Funcionalidad para el botón de envío
        submitHandler: function() {
            console.log("validacion de consultar");
            datos.consultar();
        }
    });
};
//Función para validar las peticiones de consultar y eliminar
validar.validar_Borrar = function() {
    $('#Registrar').validate({
        //Reglas de validación para cada input
        rules: {
            idusuarios: {required: true}
        },
        //mensajes de error de validación para cada input
        messages: {
            idusuarios: {required: "Debe escribir un nombre de usuario"}
        },
        errorElement: 'span',
        //Dónde se coloca el mensaje de error
        errorPlacement: function(error, element) {
            error.html(error.text()).addClass('spanerror').insertAfter(element).hide().fadeIn();
        },
        //Funcionalidad para el botón de envío
        submitHandler: function() {
            console.log("validacion de borrar");
            datos.borrar();
        }
    });
};

