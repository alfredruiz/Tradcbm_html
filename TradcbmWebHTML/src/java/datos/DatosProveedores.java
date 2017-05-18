 
package datos;

 
import clases.Proveedores;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

 
public class DatosProveedores {
    
    //Conectar a la base de datos
    private final Conexion conex = new Conexion();
    private final Connection con = conex.Conectar();
    private String mysql = "";
    private ResultSet rs;
    private PreparedStatement pst;
    private Proveedores prov;

    public Proveedores getProveedor(int IDProveedor) {
        prov = null;
        try {
            mysql = "select * from proveedores where  IDProveedor= ? ";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, IDProveedor);
            rs = pst.executeQuery();
            if (rs.next()) {
                prov = new Proveedores(
                        rs.getInt("IDProveedor"),rs.getString("RazonSocial"),
                        rs.getString("CodProveedor"),rs.getString("NIF"),
                        rs.getString("PersonaContacto"), rs.getString("Direccion"),
                        rs.getString("Ciudad"), rs.getString("CP"), rs.getString("Pais"),
                        rs.getString("Telefono1"),rs.getString("Telefono2"), rs.getString("Fax"),
                        rs.getString("Email"),rs.getString("Web"),rs.getString("Descripcion"));
            }
            return prov;
        } catch (SQLException ex) {
            Logger.getLogger(DatosProveedores.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }

    public boolean nuevoProveedor(Proveedores prov) {
        try {
            mysql = "Insert into proveedores(IDProveedor,RazonSocial,CodProveedor,NIF,PersonaContacto,"
                    + "Direccion,Ciudad,CP,Pais,Telefono1,Telefono2,Fax,Email,Web,Descripcion)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, prov.getIdproveedor());
            pst.setString(2, prov.getRazonsocial());
            pst.setString(3, prov.getCodproveedor()); 
            pst.setString(4, prov.getNif());
            pst.setString(5, prov.getPersonacontacto());  
            pst.setString(6, prov.getDireccion());
            pst.setString(7, prov.getCiudad());
            pst.setString(8, prov.getCp());
            pst.setString(9, prov.getPais());
            pst.setString(10, prov.getTelefono1());
            pst.setString(11, prov.getTelefono2());
            pst.setString(12, prov.getFax());
            pst.setString(13, prov.getEmail());
            pst.setString(14, prov.getWeb());
            pst.setString(15, prov.getDescripcion());
            int prove = pst.executeUpdate();
            return prove != 0;
        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosProveedores.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public boolean modificarProveedor(Proveedores prov) {
        try {
            mysql = "UPDATE proveedores SET RazonSocial= ?, CodProveedor= ?, NIF= ?, PersonaContacto= ?, Direccion= ?,"
                    + "Ciudad= ?, CP= ?, Pais= ?, Telefono1= ?,Telefono2= ?, Fax= ?, Email= ?, Web= ?, Descripcion= ?"
                    + " WHERE IDProveedor = ?";
            pst = con.prepareStatement(mysql);
            pst.setString(1, prov.getRazonsocial());
            pst.setString(2, prov.getCodproveedor());
            pst.setString(3, prov.getNif());
            pst.setString(4, prov.getPersonacontacto()); 
            pst.setString(5, prov.getDireccion());
            pst.setString(6, prov.getCiudad());
            pst.setString(7, prov.getCp());
            pst.setString(8, prov.getPais());
            pst.setString(9, prov.getTelefono1());
            pst.setString(10, prov.getTelefono2());
            pst.setString(11, prov.getFax());
            pst.setString(12, prov.getEmail());
            pst.setString(13, prov.getWeb()); 
            pst.setString(14, prov.getDescripcion());
            pst.setInt(15, prov.getIdproveedor());
            int prove = pst.executeUpdate();
            return prove != 0;
        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosProveedores.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public boolean eliminarProveedor(Proveedores prov) {
        try {
            mysql = "delete from proveedores where IDProveedor = ? ";
            pst = con.prepareStatement(mysql);
            pst.setInt(1, prov.getIdproveedor());
            int prove = pst.executeUpdate();
            return prove != 0;

        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosProveedores.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }

    public ArrayList<Proveedores> getAllProveedores() {

        ArrayList<Proveedores> listaprov = new ArrayList<>();
        try {

            mysql = "select * from proveedores";
            pst = con.prepareStatement(mysql);
            rs = pst.executeQuery();
            while (rs.next()) {
                prov = new Proveedores();
                prov.setIdproveedor(rs.getInt("IDProveedor"));
                prov.setRazonsocial(rs.getString("RazonSocial"));
                prov.setCodproveedor(rs.getString("CodProveedor"));
                prov.setNif(rs.getString("NIF"));
                prov.setPersonacontacto(rs.getString("PersonaContacto")); 
                prov.setDireccion(rs.getString("Direccion"));
                prov.setCiudad(rs.getString("Ciudad"));
                prov.setCp(rs.getString("CP"));
                prov.setPais(rs.getString("Pais"));
                prov.setTelefono1(rs.getString("Telefono1"));
                prov.setTelefono2(rs.getString("Telefono2"));
                prov.setFax(rs.getString("Fax"));
                prov.setEmail(rs.getString("Email"));
                prov.setWeb(rs.getString("Web")); 
                prov.setDescripcion(rs.getString("Descripcion"));
                listaprov.add(prov);
            }
            conex.CerrarConexion();
            return listaprov;
        } catch (SQLException e) {
            Logger.getLogger(DatosProveedores.class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    }
}

    
 
