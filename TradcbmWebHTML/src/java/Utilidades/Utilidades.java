/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Utilidades;

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

    public static Date strintToDate(String fecha) {
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat(
                "yyyy-MM-dd");
        Date aux = null;

        try {
            aux = formatoDelTexto.parse(fecha);
        } catch (Exception e) {
        }
        return aux;

    }

    public static String formatDate(Date fecha) {
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("yyyy/MM7dd");
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
        } catch (Exception e) {
        }
        return aux;
    }
}
