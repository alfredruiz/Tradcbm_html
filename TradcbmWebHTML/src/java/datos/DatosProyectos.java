package datos;

 
import Utilidades.Utilidades;
 
import clases.Proyectos; 
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DatosProyectos {

    //Conectar a la base de datos
    private final Conexion conex = new Conexion();
    private final Connection con = conex.Conectar();
    private String mysql = "";
    private ResultSet rs;
    private PreparedStatement pst;
    private Proyectos proy; 
 

    public Proyectos getProyectos(int IDProyecto) {
        proy = null;
        try {
            mysql = "select * from proyectos where IDProyecto= ? ";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, IDProyecto);
            rs = pst.executeQuery();
            if (rs.next()) {
                proy = new Proyectos(
                        rs.getInt("IDProyecto"),
                        rs.getInt("IDCliente"), 
                        rs.getString("CodProiectos"), 
                        rs.getDate("Fecha"),
                        rs.getString("TipoTraduccion"),
                        rs.getString("IdiomaOrigen"),
                        rs.getString("IdiomaMeta"),
                        rs.getString("EstadoProyecto"),
                        rs.getString("CarpetaProyecto"),
                        rs.getString("Concepto"),
                        rs.getString("TipoTarifa"),
                        rs.getDouble("TarifaAplicada"), 
                        rs.getInt("TotalUnidades"));
            }
            return proy;
        } catch (SQLException e) {
            Logger.getLogger(DatosProyectos.class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    }

    public boolean nuevoProyectos(Proyectos proy) {
        try {
            mysql = "Insert into proyectos(IDCliente,CodProiectos,"
                    + "Fecha,TipoTraduccion,IdiomaOrigen,IdiomaMeta,EstadoProyecto,CarpetaProyecto,"
                    + "Concepto,TipoTarifa,TarifaAplicada,TotalUnidades)"
                    + "values(?,?,?,?,?,?,?,?,?,?,?,?)";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, proy.getIdcliente());
            pst.setString(2, proy.getCodproyecto()); 
            pst.setDate(3, Utilidades.DateUtilToDateSql(proy.getFecha()));
            pst.setString(4,  proy.getTipotraduccion());
            pst.setString(5,  proy.getIdiomaorigen());
            pst.setString(6,  proy.getIdiomameta());
            pst.setString(7,  proy.getEstadoproyecto());
            pst.setString(8,  proy.getCarpetaproyecto());
            pst.setString(9, proy.getConcepto());
            pst.setString(10, proy.getTipotarifa());
            pst.setDouble(11, proy.getTarifaaplicada());
            pst.setInt(12, proy.getTotalunidades());
            int proye = pst.executeUpdate();
            return proye != 0;
        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosProyectos.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public boolean modificarProyectos(Proyectos proy) {
        try {
            mysql = "UPDATE proyectos SET UPDATE IDCliente=?,"
                  + "CodProiectos= ?, Fecha=? , TipoTraduccion= ?, IdiomaOrigen= ?, IdiomaMeta= ?,"
                  + "EstadoProyecto= ?, CarpetaProyecto= ? , Concepto= ?, TipoTarifa= ?,"
                  + "TarifaAplicada= ?, TotalUnidades= ? Where IDProyecto= ?";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, proy.getIdcliente());
            pst.setString(3, proy.getCodproyecto()); 
            pst.setDate(4, Utilidades.DateUtilToDateSql(proy.getFecha()));
            pst.setString(5,  proy.getTipotraduccion());
            pst.setString(6,  proy.getIdiomaorigen());
            pst.setString(7,  proy.getIdiomameta());
            pst.setString(8,  proy.getEstadoproyecto());
            pst.setString(9,  proy.getCarpetaproyecto());
            pst.setString(10, proy.getConcepto());
            pst.setString(11, proy.getTipotarifa());
            pst.setDouble(12, proy.getTarifaaplicada());
            pst.setInt(13, proy.getTotalunidades());
            pst.setInt(14, proy.getIdproyecto());
            int proye = pst.executeUpdate();
            return proye != 0;
        } catch (SQLException e) {
            Logger.getLogger(DatosProyectos.class.getName()).log(Level.SEVERE, null, e);
            conex.CerrarConexion();
            return false;
        }
    }

    public boolean eliminarProyectos(Proyectos proy) {
        try {
            mysql = "delete from proyectos where IDProyecto= ? ";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, proy.getIdproyecto());
            int proye = pst.executeUpdate();
            return proye != 0;
        } catch (SQLException e) {
            Logger.getLogger(DatosProyectos.class.getName()).log(Level.SEVERE, null, e);
            conex.CerrarConexion();
            return false;
        }
    }

    public ArrayList<Proyectos> getAllProyectosClientes() {

        ArrayList<Proyectos> listaproy = new ArrayList<>();
        try {
            mysql = "select * from vista_proyectos_clientes";
            pst = con.prepareStatement(mysql);
            rs = pst.executeQuery();
            while (rs.next()) {
                proy = new Proyectos();
                proy.setIdproyecto(rs.getInt("IDProyecto"));
                proy.setIdcliente(rs.getInt("IDCliente")); 
                proy.setRazonsocial(rs.getString("RazonSocial"));
                proy.setCodcliente(rs.getString("CodCliente"));
                proy.setCodproyecto(rs.getString("CodProiectos"));
                proy.setFecha(rs.getDate("Fecha"));
                proy.setTipotraduccion(rs.getString("TipoTraduccion"));
                proy.setIdiomaorigen(rs.getString("IdiomaOrigen"));
                proy.setIdiomameta(rs.getString("IdiomaMeta"));
                proy.setEstadoproyecto(rs.getString("EstadoProyecto"));
                proy.setCarpetaproyecto(rs.getString("CarpetaProyecto"));
                proy.setConcepto(rs.getString("Concepto"));
                proy.setTipotarifa(rs.getString("TipoTarifa"));
                proy.setTarifaaplicada(rs.getDouble("TarifaAplicada"));
                proy.setTotalunidades(rs.getInt("TotalUnidades"));                
                listaproy.add(proy);
            }
            conex.CerrarConexion();
            return listaproy;
        } catch (SQLException e) {
            Logger.getLogger(DatosFacturas.class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    }
 
}
