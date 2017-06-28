package datos;

import clases.Compras;
import Utilidades.Utilidades;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DatosCompras {

    //Conectar a la base de datos
    private final Conexion conex = new Conexion();
    private final Connection con = conex.Conectar();
    private String mysql = "";
    private ResultSet rs;
    private PreparedStatement pst;
    private Compras comp;

    public Compras getCompras(int IDCompras) {
        comp = null;
        try {
            mysql = "select * from compras where IDCompras= ? ";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, IDCompras);
            rs = pst.executeQuery();
            if (rs.next()) {
                comp = new Compras(
                        rs.getInt("IDCompras"),
                        rs.getInt("IDProveedor"),
                        rs.getString("NumFactura"),
                        rs.getString("Concepto"),
                        rs.getDate("Fecha"),
                        rs.getDouble("BaseFactura"),
                        rs.getDouble("TipoIVA"),
                        rs.getString("Amortizacion"));
            }
            return comp;
        } catch (SQLException e) {
            Logger.getLogger(DatosCompras.class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    }

    public boolean nuevaCompra(Compras comp) {
        try {
            mysql = "Insert into compras (IDProveedor,NumFactura,"
                    + "Concepto,Fecha,BaseFactura,TipoIVA,Amortizacion)"
                    + "values(?,?,?,?,?,?,?)";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, comp.getIDProveedor());
            pst.setString(2, comp.getNumFactura());
            pst.setString(3, comp.getConcepto());
            pst.setDate(4, Utilidades.DateUtilToDateSql(comp.getFecha()));
            pst.setDouble(5, comp.getBaseFactura());
            pst.setDouble(6, comp.getTipoIVA());
            pst.setString(7, comp.getAmortizacion());
            int co = pst.executeUpdate();
            return co != 0;
        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosCompras.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public boolean modificarCompra(Compras comp) {
        try {
            mysql = "UPDATE compras SET IDProveedor = ?, NumFactura = ?,"
                    + "Concepto = ?, Fecha = ?, BaseFactura = ?, TipoIVA = ?,"
                    + "Amortizacion = ? WHERE IDCompras = ?";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, comp.getIDProveedor());
            pst.setString(2, comp.getNumFactura());
            pst.setString(3, comp.getConcepto());
            pst.setDate(4, Utilidades.DateUtilToDateSql(comp.getFecha()));
            pst.setDouble(5, comp.getBaseFactura());
            pst.setDouble(6, comp.getTipoIVA());
            pst.setString(7, comp.getAmortizacion());
            pst.setInt(8, comp.getIDCompras());
            int co = pst.executeUpdate();
            return co != 0;
        } catch (SQLException e) {
            Logger.getLogger(DatosCompras.class.getName()).log(Level.SEVERE, null, e);
            conex.CerrarConexion();
            return false;
        }
    }

    public boolean eliminarCompra(Compras comp) {
        try {
            mysql = "delete from compras where IDCompras= ? ";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, comp.getIDCompras());
            int co = pst.executeUpdate();
            return co != 0;

        } catch (SQLException e) {
            Logger.getLogger(DatosCompras.class.getName()).log(Level.SEVERE, null, e);
            conex.CerrarConexion();
            return false;
        }
    }

    public ArrayList<Compras> getAllComprasProveedores() {

        ArrayList<Compras> listacomprov = new ArrayList<>();
        try {
            mysql = "select  * from vista_comprasproveedores";

            pst = con.prepareStatement(mysql);
            rs = pst.executeQuery();
            while (rs.next()) {
                comp = new Compras();

                comp.setIDCompras(rs.getInt("IDCompras"));
                comp.setIDProveedor(rs.getInt("IDProveedor"));
                comp.setRazonSocial(rs.getString("RazonSocial"));
                comp.setNumFactura(rs.getString("NumFactura"));
                comp.setConcepto(rs.getString("Concepto"));
                comp.setFecha(rs.getDate("Fecha"));
                comp.setEjercicio(rs.getInt("Ejercicio"));
                comp.setTrimestre(rs.getInt("Trimestre"));
                comp.setBaseFactura(rs.getDouble("BaseFactura"));
                comp.setTipoIVA(rs.getDouble("TipoIVA"));
                comp.setTotalIVA(rs.getDouble("TotalIVA"));
                comp.setTotalFactura(rs.getDouble("TotalFactura"));
                comp.setAmortizacion(rs.getString("Amortizacion"));
                listacomprov.add(comp);
            }
            conex.CerrarConexion();
            return listacomprov;
        } catch (SQLException e) {
            Logger.getLogger(DatosCompras.class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    }

}
