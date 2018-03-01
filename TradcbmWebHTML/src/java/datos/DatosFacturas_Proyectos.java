package datos;

import clases.Facturas_Proyectos;
import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DatosFacturas_Proyectos {

    //Conectar a la base de datos
    private final Conexion conex = new Conexion();
    private final Connection con = conex.Conectar();
    private String mysql = "";
    private ResultSet rs;
    private PreparedStatement pst;
    private Facturas_Proyectos facproy;

    public Facturas_Proyectos getFacturas_Proyectos(int IDFacturas_Proyectos) {
        facproy = null;
        try {
            mysql = "select * from facturas_proyectos where  IDFacturas_Proyectos= ? ";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, IDFacturas_Proyectos);
            rs = pst.executeQuery();
            if (rs.next()) {
                facproy = new Facturas_Proyectos(
                        rs.getInt("IDFacturas_Proyectos"), rs.getInt("IDFactura"),
                        rs.getInt("IDProyecto"));
            }
            return facproy;
        } catch (SQLException ex) {
            Logger.getLogger(DatosFacturas_Proyectos.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }

    public boolean nuevoFacturas_Proyectos(Facturas_Proyectos facproy) {
        try {
            mysql = "Insert into facturas_proyectos(IDFactura,IDProyecto)"
                    + "values(?,?)";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, facproy.getIDFactura());
            pst.setInt(2, facproy.getIDProyecto());
            int factuproy = pst.executeUpdate();
            return factuproy != 0;
        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosFacturas_Proyectos.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public boolean modificarFacturas_Proyectos(Facturas_Proyectos facproy) {
        try {
            mysql = "UPDATE facturas SET IDFactura= ?, IDProyecto= ? WHERE IDFacturas_Proyectos = ?";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, facproy.getIDFactura());
            pst.setInt(2, facproy.getIDProyecto());
            pst.setInt(3, facproy.getIDFacturas_Proyectos());
            int factuproy = pst.executeUpdate();
            return factuproy != 0;
        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosFacturas_Proyectos.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public boolean eliminarFacturas_Proyectos(Facturas_Proyectos facproy) {
        try {
            mysql = "DELETE FROM facturas_proyectos WHERE IDFacturas_Proyectos= ?";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, facproy.getIDFacturas_Proyectos());
            int factuproy = pst.executeUpdate();
            return factuproy != 0;

        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosFacturas_Proyectos.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public ArrayList<Facturas_Proyectos> getAllFacturasProyectos(int IDFactura) {

        ArrayList<Facturas_Proyectos> listafacproy = new ArrayList<>();
        try {
            mysql = "SELECT * FROM tradcbm.vista_facturas_proyectos WHERE IDFactura= ?";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, IDFactura);
            rs = pst.executeQuery();
            while (rs.next()) {
                facproy = new Facturas_Proyectos();
                facproy.setIDFacturas_Proyectos(rs.getInt("IDFacturas_Proyectos"));
                facproy.setIDFactura(rs.getInt("IDFactura"));
                facproy.setIDProyecto(rs.getInt("IDProyecto"));
                facproy.setCodfactura(rs.getString("CodFactura"));
                facproy.setIdcliente(rs.getInt("IDCliente"));
                facproy.setRazonsocial(rs.getString("RazonSocial"));
                facproy.setCodproyecto(rs.getString("CodProiectos"));
                facproy.setFecha(rs.getDate("Fecha"));
                listafacproy.add(facproy);
            }
            conex.CerrarConexion();
            return listafacproy;
        } catch (SQLException e) {
            Logger.getLogger(DatosFacturas_Proyectos.class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    }
}
