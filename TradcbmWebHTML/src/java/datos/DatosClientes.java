package datos;

import clases.Clientes;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DatosClientes {

    //Conectar a la base de datos
    private final Conexion conex = new Conexion();
    private final Connection con = conex.Conectar();
    private String mysql = "";
    private ResultSet rs;
    private PreparedStatement pst;
    private Clientes cli;

    public Clientes getCliente(int IDCliente) {
        cli = null;
        try {
            mysql = "select * from clientes where  IDCliente= ? ";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, IDCliente);
            rs = pst.executeQuery();
            if (rs.next()) {
                cli = new Clientes(
                        rs.getInt("IDCliente"), rs.getString("CodCliente"),
                        rs.getString("RazonSocial"), rs.getString("PersonaContacto"),
                        rs.getString("Cargo"), rs.getString("NIF"), rs.getString("Direccion"),
                        rs.getString("Ciudad"), rs.getString("CP"), rs.getString("Pais"), rs.getString("Telefono1"),
                        rs.getString("Telefono2"), rs.getString("Fax"), rs.getString("Email"),
                        rs.getString("Web"), rs.getString("CuentaPago"),
                        rs.getString("Observaciones"));
            }
            return cli;
        } catch (SQLException ex) {
            Logger.getLogger(DatosClientes.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }

    public boolean nuevoCliente(Clientes cli) {
        try {
            mysql = "Insert into clientes(IDCliente,CodCliente,RazonSocial,PersonaContacto,Cargo,NIF,"
                    + "Direccion,Ciudad,CP,Pais,Telefono1,Telefono2,Fax,Email,Web,CuentaPago,Observaciones)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, cli.getIdcliente());
            pst.setString(2, cli.getCodcliente());
            pst.setString(3, cli.getRazonsocial());
            pst.setString(4, cli.getPersonacontacto());
            pst.setString(5, cli.getCargo());
            pst.setString(6, cli.getNif());
            pst.setString(7, cli.getDireccion());
            pst.setString(8, cli.getCiudad());
            pst.setString(9, cli.getCp());
            pst.setString(10, cli.getPais());
            pst.setString(11, cli.getTelefono1());
            pst.setString(12, cli.getTelefono2());
            pst.setString(13, cli.getFax());
            pst.setString(14, cli.getEmail());
            pst.setString(15, cli.getWeb());
            pst.setString(16, cli.getCuentapago());
            pst.setString(17, cli.getObservaciones());
            int clie = pst.executeUpdate();
            return clie != 0;
        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosClientes.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public boolean modificarCliente(Clientes cli) {
        try {
            mysql = "UPDATE clientes SET CodCliente= ?, RazonSocial= ?,PersonaContacto= ?, Cargo= ?, NIF= ?, Direccion= ?,"
                    + "Ciudad= ?, CP= ?, Pais= ?, Telefono1= ?,Telefono2= ?, Fax= ?, Email= ?, Web= ?, CuentaPago= ?, Observaciones= ?"
                    + " WHERE IDCliente = ?";
            pst = con.prepareStatement(mysql);
            pst.setString(1, cli.getCodcliente());
            pst.setString(2, cli.getRazonsocial());
            pst.setString(3, cli.getPersonacontacto());
            pst.setString(4, cli.getCargo());
            pst.setString(5, cli.getNif());
            pst.setString(6, cli.getDireccion());
            pst.setString(7, cli.getCiudad());
            pst.setString(8, cli.getCp());
            pst.setString(9, cli.getPais());
            pst.setString(10, cli.getTelefono1());
            pst.setString(11, cli.getTelefono2());
            pst.setString(12, cli.getFax());
            pst.setString(13, cli.getEmail());
            pst.setString(14, cli.getWeb());
            pst.setString(15, cli.getCuentapago());
            pst.setString(16, cli.getObservaciones());
            pst.setInt(17, cli.getIdcliente());
            int clie = pst.executeUpdate();
            return clie != 0;
        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosClientes.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public boolean eliminarCliente(Clientes cli) {
        try {
            mysql = "delete from clientes where IDCliente = ? ";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, cli.getIdcliente());
            int clie = pst.executeUpdate();
            return clie != 0;

        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosClientes.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public ArrayList<Clientes> getAllClientes() {

        ArrayList<Clientes> listacli = new ArrayList<>();
        try {

            mysql = "select * from clientes";
            pst = con.prepareStatement(mysql);
            rs = pst.executeQuery();
            while (rs.next()) {
                cli = new Clientes();
                cli.setIdcliente(rs.getInt("IDCliente"));
                cli.setCodcliente(rs.getString("CodCliente"));
                cli.setRazonsocial(rs.getString("RazonSocial"));
                cli.setPersonacontacto(rs.getString("PersonaContacto"));
                cli.setCargo(rs.getString("Cargo"));
                cli.setNif(rs.getString("NIF"));
                cli.setDireccion(rs.getString("Direccion"));
                cli.setCiudad(rs.getString("Ciudad"));
                cli.setCp(rs.getString("CP"));
                cli.setPais(rs.getString("Pais"));
                cli.setTelefono1(rs.getString("Telefono1"));
                cli.setTelefono2(rs.getString("Telefono2"));
                cli.setFax(rs.getString("Fax"));
                cli.setEmail(rs.getString("Email"));
                cli.setWeb(rs.getString("Web"));
                cli.setCuentapago(rs.getString("CuentaPago"));
                cli.setObservaciones(rs.getString("Observaciones"));
                listacli.add(cli);
            }
            conex.CerrarConexion();
            return listacli;
        } catch (SQLException e) {
            Logger.getLogger(DatosClientes.class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    }
}
