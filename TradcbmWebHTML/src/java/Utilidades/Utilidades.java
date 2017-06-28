package Utilidades;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Utilidades {

    public static boolean isNumeric(String cadena) {
        try {
            Integer.parseInt(cadena);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }
    
//    function fechaCorrecta(fecha1, fecha2){
//
//    //Split de las fechas recibidas para separarlas
//    var x = fecha1.split(“-“);
//    var z = fecha2.split(“-“);
//
//    //Cambiamos el orden al formato americano, de esto dd/mm/yyyy a esto mm/dd/yyyy
//    fecha1 = x[1] + “-” + x[0] + “-” + x[2];
//    fecha2 = z[1] + “-” + z[0] + “-” + z[2];
//
//    //Comparamos las fechas
//    if (Date.parse(fecha1) > Date.parse(fecha2)){
//        return false;
//    }else{
//        return true;
//    }
//}
    public static Date stringToDate(String fecha) {
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("yyyy-MM-dd");
        Date aux = null;
        try {
            aux = formatoDelTexto.parse(fecha);
        } catch (Exception e) {
            e.getMessage();
        }
        return aux;

    }

    public static String formatDate(Date fecha) {
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("yyyy/MM/dd");
        return formatoDelTexto.format(fecha);
    }

    public static boolean objectToBoolean(Object Obj) {
        String CadBooleana = objectToString(Obj);
        Boolean booleano = new Boolean(CadBooleana);
        return booleano;
    }

    public static String objectToString(Object Obj) {
        String Str = "";
        if (Obj != null) {
            Str = Obj.toString();
        }
        return Str;
    }

    public static Double objectToDouble(Object Obj) {
        Double d = null;
        if (Obj instanceof Double) {
            d = (Double) Obj;
        }
        return d;
    }

    public static Date objectToDate(Object Obj) {
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("yyyy/MM/dd");
        Date aux = null;
        try {
            aux = formatoDelTexto.parse(objectToString(Obj));
        } catch (ParseException e) {
        }
        return aux;
    }

    //Para convertir la fecha a java.sql.Date
    public static java.sql.Date DateUtilToDateSql(java.util.Date uDate) {
        java.sql.Date sDate = new java.sql.Date(uDate.getTime());
        return sDate;
    }

//    public static String ConvertirFecha(String Fecha) {
//        java.util.Date uDate = new java.util.Date();
//        java.sql.Date sDate = DateUtilToDateSql(uDate);
//        DateFormat df = new SimpleDateFormat("dd-MM-YYY");
//        Fecha = df.parse(uDate);
//        return Fecha;
//    }
}
