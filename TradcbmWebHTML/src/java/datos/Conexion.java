package datos; 
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Conexion {

    private final String db = "tradcbm?autoReconnect=true&useSSL=false";
    private final String login = "root";
    private final String password = "admin";
    private final String url = "jdbc:mysql://localhost/" + db;
    private Connection con = null;

    public Conexion() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            this.con = DriverManager.getConnection(url, login, password);
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DatosUsuario.class.getName()).log(Level.SEVERE, null, ex);
        } 
    }
    //Conectar  
    public Connection Conectar() {
        return this.con;
    } 
    //Cerrar base datos
    public void CerrarConexion() {
        this.con = null;
    }
}
