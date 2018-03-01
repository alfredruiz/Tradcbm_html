package datos;

import Utilidades.Utilidades;
import clases.Facturas;
import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DatosFacturas {

    //Conectar a la base de datos
    private final Conexion conex = new Conexion();
    private final Connection con = conex.Conectar();
    private String mysql = "";
    private ResultSet rs;
    private PreparedStatement pst;
    private Facturas fac;

    public Facturas getFactura(int IDFactura) {
        fac = null;
        try {
            mysql = "select * from facturas where  IDFactura= ? ";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, IDFactura);
            rs = pst.executeQuery();
            if (rs.next()) {
                fac = new Facturas(
                        rs.getInt("IDFactura"), rs.getString("CodFactura"),
                        rs.getString("IdiomaFactura"), rs.getString("Ambito"),
                        rs.getDate("Fecha"), rs.getDouble("TipoIVA"),
                        rs.getDouble("IRPF"), rs.getDouble("Descuentos"),
                        rs.getDate("Vencimientos"), rs.getString("DivisaFactura"),
                        rs.getInt("IDCliente"));
            }
            return fac;
        } catch (SQLException ex) {
            Logger.getLogger(DatosFacturas.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }

    public boolean nuevoFactura(Facturas fac) {
        try {
            mysql = "Insert into facturas(CodFactura,IdiomaFactura,Ambito,"
                    + "Fecha,TipoIVA,IRPF,Descuentos,Vencimientos,DivisaFactura, IDCliente)"
                    + "values(?,?,?,?,?,?,?,?,?,?)";
            pst = con.prepareStatement(mysql);
            pst.setString(1, fac.getCodfactura());
            pst.setString(2, fac.getIdiomafactura());
            pst.setString(3, fac.getAmbito());
            pst.setDate(4, Utilidades.DateUtilToDateSql(fac.getFecha()));
            pst.setDouble(5, fac.getTipoiva());
            pst.setDouble(6, fac.getIrpf());
            pst.setDouble(7, fac.getDescuentos());
            pst.setDate(8, Utilidades.DateUtilToDateSql(fac.getVencimientos()));
            pst.setString(9, fac.getDivisafactura());
            pst.setInt(10, fac.getIdcliente());
            int fact = pst.executeUpdate();
            return fact != 0;
        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosFacturas.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public boolean modificarFactura(Facturas fac) {
        try {
            mysql = "UPDATE facturas SET CodFactura= ?, IdiomaFactura= ?, Ambito= ?, Fecha= ?,"
                    + "TipoIVA = ?, IRPF= ?, Descuentos= ?, Vencimientos= ?, DivisaFactura= ?, IDCliente =?"
                    + " WHERE IDFactura = ?";
            pst = con.prepareStatement(mysql);
            pst.setString(1, fac.getCodfactura());
            pst.setString(2, fac.getIdiomafactura());
            pst.setString(3, fac.getAmbito());
            pst.setDate(4, Utilidades.DateUtilToDateSql(fac.getFecha()));
            pst.setDouble(5, fac.getTipoiva());
            pst.setDouble(6, fac.getIrpf());
            pst.setDouble(7, fac.getDescuentos());
            pst.setDate(8, Utilidades.DateUtilToDateSql(fac.getVencimientos()));
            pst.setString(9, fac.getDivisafactura());
            pst.setInt(10, fac.getIdcliente());
            pst.setInt(11, fac.getIdfactura());
            int fact = pst.executeUpdate();
            return fact != 0;
        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosFacturas.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public boolean eliminarFactura(Facturas fac) {
        try {
            mysql = "delete from facturas where IDFactura = ? ";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, fac.getIdfactura());
            int fact = pst.executeUpdate();
            return fact != 0;

        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosFacturas.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public ArrayList<Facturas> getAllFacturas() {

        ArrayList<Facturas> listafac = new ArrayList<>();
        try {
            mysql = "SELECT facturas.* , clientes.RazonSocial"
                    + " from facturas"
                    + " join clientes "
                    + " where facturas.IDCliente= clientes.IDCliente";
            pst = con.prepareStatement(mysql);
            rs = pst.executeQuery();
            while (rs.next()) {
                fac = new Facturas();
                fac.setIdfactura(rs.getInt("IDFactura"));
                fac.setCodfactura(rs.getString("CodFactura"));
                fac.setIdiomafactura(rs.getString("IdiomaFactura"));
                fac.setAmbito(rs.getString("Ambito"));
                fac.setFecha(rs.getDate("Fecha"));
                fac.setTipoiva(rs.getDouble("TipoIVA"));
                fac.setIrpf(rs.getDouble("IRPF"));
                fac.setDescuentos(rs.getDouble("Descuentos"));
                fac.setVencimientos(rs.getDate("Vencimientos"));
                fac.setDivisafactura(rs.getString("DivisaFactura"));
                fac.setIdcliente(rs.getInt("IDCliente"));
                fac.setRazonsocial(rs.getString("RazonSocial"));
                listafac.add(fac);
            }
            conex.CerrarConexion();
            return listafac;
        } catch (SQLException e) {
            Logger.getLogger(DatosFacturas.class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    }

    public ArrayList<Facturas> getLastFactura() {

        ArrayList<Facturas> listafac = new ArrayList<>();
        try {
            mysql = "SELECT facturas.* , clientes.RazonSocial"
                    + " from facturas"
                    + " join clientes "
                    + " where facturas.IDCliente= clientes.IDCliente "
                    + "order by IDFactura desc limit 1";
            pst = con.prepareStatement(mysql);
            rs = pst.executeQuery();
            while (rs.next()) {
                fac = new Facturas();
                fac.setIdfactura(rs.getInt("IDFactura"));
                fac.setCodfactura(rs.getString("CodFactura"));
                fac.setIdiomafactura(rs.getString("IdiomaFactura"));
                fac.setAmbito(rs.getString("Ambito"));
                fac.setFecha(rs.getDate("Fecha"));
                fac.setTipoiva(rs.getDouble("TipoIVA"));
                fac.setIrpf(rs.getDouble("IRPF"));
                fac.setDescuentos(rs.getDouble("Descuentos"));
                fac.setVencimientos(rs.getDate("Vencimientos"));
                fac.setDivisafactura(rs.getString("DivisaFactura"));
                fac.setIdcliente(rs.getInt("IDCliente"));
                fac.setRazonsocial(rs.getString("RazonSocial"));
                listafac.add(fac);
            }
            conex.CerrarConexion();
            return listafac;
        } catch (SQLException e) {
            Logger.getLogger(DatosFacturas.class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    }
}
