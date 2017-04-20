package clases;

import datos.DatosUsuario;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Conexion {

    Connection con;

    public Conexion() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            String db = "jdbc:mysql://localhost/tradcbm?autoReconnect=true&useSSL=false";
            con = DriverManager.getConnection(db, "root", "admin");

        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DatosUsuario.class.getName()).log(Level.SEVERE, null, ex);
        }

    }
    //Cerrar base datos
    public void CerrarConexion() {
        try {
            con.close();
        } catch (SQLException ex) {
            Logger.getLogger(DatosUsuario.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
