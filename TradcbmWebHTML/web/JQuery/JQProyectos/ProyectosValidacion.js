var validar = validar || {};
var datos = "";

//Función para validar las peticiones de nuevo
validar.validar_nuevo = function() {
    $('#Registrar').validate({
        //Reglas de validación para cada input
          rules: {
            cmbClientes: {required: true}, 
            codproyecto: {required: true},
            fecha: {required: true},
            tipotraduccion: {required: true},
            idiomaorigen: {required: true},
            idiomameta: {required: true},
            estadoproyecto: {required: true},
            concepto: {required: true},
            tipotarifa: {required: true},
            tarifaaplicada: {required: true},
            totalunidades: {required: true} 
        },
        //mensajes de error de validación para cada input
        messages: {
            cmbClientes: {required: "Debe seleccionar un cliente"}, 
            codproyecto: {required: "Debe indicar el código"},
            fecha: {required: "Debe indicar una fecha"},
            tipotraduccion: {required:"Debe indicar el tipo de traducción"},
            idiomaorigen: {required:"Debe indicar el idioma de origen"},
            idiomameta: {required:"Debe indicar el idoma de meta"},
            estadoproyecto: {required:"Debe indicar el estado del proyecto"},
            concepto: {required:"Debe indicar el concepto"},
            tipotarifa: {required:"Debe indicar el tipo tarifa"},
            tarifaaplicada: {required:"Debe indicar la tarifa aplicada"},
            totalunidades: {required:"Debe indicar el total de unidades"}
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
            cmbClientes: {required: true}, 
            codproyectos: {required: true},
            fecha: {required: true},
            tipotraduccion: {required: true},
            idiomaorigen: {required: true},
            idiomameta: {required: true},
            estadoproyecto: {required: true},
            concepto: {required: true},
            tipotarifa: {required: true},
            tarifaaplicada: {required: true},
            totalunidades: {required: true} 
        },
        //mensajes de error de validación para cada input
        messages: {
            cmbClientes: {required: "Debe seleccionar un cliente"}, 
            codproyectos: {required: "Debe indicar el código"},
            fecha: {required: "Debe indicar una fecha"},
            tipotraduccion: {required:"Debe indicar el tipo de traducción"},
            idiomaorigen: {required:"Debe indicar el idioma de origen"},
            idiomameta: {required:"Debe indicar el idoma de meta"},
            estadoproyecto: {required:"Debe indicar el estado del proyecto"},
            concepto: {required:"Debe indicar el concepto"},
            tipotarifa: {required:"Debe indicar el tipo tarifa"},
            tarifaaplicada: {required:"Debe indicar la tarifa aplicada"},
            totalunidades: {required:"Debe indicar el total de unidades"}
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


