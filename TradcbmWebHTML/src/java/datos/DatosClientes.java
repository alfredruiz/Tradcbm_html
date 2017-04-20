// 
//package datos;
// 
//import clases.Clientes;
//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.util.ArrayList;
//import java.util.logging.Level;
//import java.util.logging.Logger;
//
//public class DatosClientes {
//    
//    private Connection con;
//    private ResultSet rs;
//    private PreparedStatement pst;
//    private Clientes cli;
//    //Conectar a la base de datos
//    Conexion conex = new Conexion();
//   
//    //Validamos usuario
//    public String ValidaUsuario(String idusuarios, String password) {
//        try {         
//            String sql = "select idPerfil from usuarios where idusuarios= ? and password= ?";
//            pst = conex.con.prepareStatement(sql);
//            pst.setString(1, idusuarios);
//            pst.setString(2, password);
//            rs = pst.executeQuery();
//            if (rs.next()) {
//                return rs.getString("idPerfil");
//            } else {
//                return "Usuario incorrecto";
//            }
//        } catch (SQLException ex) {
//            Logger.getLogger(DatosClientes.class.getName()).log(Level.SEVERE, null, ex);
//            return "Usuario incorrecto";
//        }
//    }
//    
//    public Clientes getClientes(int idclientes) {
//            cli= null;
//        try {            
//            String sql = "select * from clientes where idclientes= ? ";
//            pst = conex.con.prepareStatement(sql);
//            pst.setInt(1, idclientes);
//            rs = pst.executeQuery();
//            if(rs.next()){
//                cli = new Clientes(
//                        rs.getInt("IDCliente"), rs.getString("CodCliente"),
//                        rs.getString("RazonSocial"), rs.getString("PersonaContacto"),
//                        rs.getString("Cargo"),rs.getString("NIF"),rs.getString("Direccion"),
//                        rs.getString("Ciudad"),rs.getString("CP"),rs.getString("Telefono1"),
//                        rs.getString("Telefono2"),rs.getString("Fax"),rs.getString("Email"),
//                        rs.getString("Web"),rs.getString("CuentaPago"),
//                        rs.getString("Observaciones"));
//            }
//            return cli;
//        } catch (SQLException ex) {
//            Logger.getLogger(DatosClientes.class.getName()).log(Level.SEVERE, null, ex);
//            return null;
//        }
//    }
//    
//     public ResultSet AllClientes() {
//         cli = null;
//        try { 
//            String sql = "select * from clientes";
//            pst = conex.con.prepareStatement(sql);
//            return  pst.executeQuery();   
//        } catch (SQLException ex) {
//            Logger.getLogger(DatosClientes.class.getName()).log(Level.SEVERE, null, ex);
//            return null;
//        }
//    }
//     
//    public void nuevoClientes(Clientes cli){
//        try {
//            String sql = "Insert into clientes(IDClientes,CodCliente,RazonSocial,PersonaContacto,Cargo,NIF,"
//             + "Direccion,Ciudad,CP,Telefono1,Telefono2,Fax,Email,Web,CuentaPago,Observaciones)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//            pst = conex.con.prepareStatement(sql);
//            pst.setInt(1, cli.getIdcliente());
//            pst.setString(2, cli.getCodcliente());
//            pst.setString(3, cli.getRazonsocial());
//            pst.setString(4, cli.getPersonacontacto());
//            pst.setString(5, cli.getCargo());
//            pst.setString(6, cli.getNif());
//            pst.setString(7, cli.getDireccion());   
//            pst.setString(8, cli.getCiudad());   
//            pst.setString(9, cli.getCp());   
//            pst.setString(10, cli.getTelefono1()); 
//            pst.setString(11, cli.getTelefono2());
//            pst.setString(12, cli.getFax());   
//            pst.setString(13, cli.getEmail());
//            pst.setString(14, cli.getWeb());   
//            pst.setString(15, cli.getCuentapago()); 
//            pst.setString(16, cli.getObservaciones());  
//            pst.executeUpdate();
//            pst.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(DatosClientes.class.getName()).log(Level.SEVERE, null, ex);
//        }
//    }
//    
//    public void modificarClientes(Clientes cli){
//        try {
//            String sql ="UPDATE usuarios SET CodCliente= ?, RazonSocial= ?,PersonaContacto= ?, Cargo= ?, NIF= ?, Direccion= ?,"
//              + "Ciudad= ?, CP= ?, Telefono1= ?,Telefono2= ?, Fax= ?, Email= ?, Web= ?, CuentaPago= ?, Observaciones= ?"
//              + " WHERE IDClientes = ?";
//            pst = conex.con.prepareStatement(sql);
//            pst.setString(1, cli.getCodcliente());
//            pst.setString(2, cli.getRazonsocial());
//            pst.setString(3, cli.getPersonacontacto());
//            pst.setString(4, cli.getCargo());
//            pst.setString(5, cli.getNif());
//            pst.setString(6, cli.getDireccion());   
//            pst.setString(7, cli.getCiudad());   
//            pst.setString(8, cli.getCp());   
//            pst.setString(9, cli.getTelefono1()); 
//            pst.setString(10, cli.getTelefono2());
//            pst.setString(11, cli.getFax());   
//            pst.setString(12, cli.getEmail());
//            pst.setString(13, cli.getWeb());   
//            pst.setString(14, cli.getCuentapago()); 
//            pst.setString(15, cli.getObservaciones());
//            pst.setInt(16, cli.getIdcliente());
//            pst.executeUpdate();
//            pst.close();
//        } catch (SQLException ex) {
//            Logger.getLogger(DatosClientes.class.getName()).log(Level.SEVERE, null, ex);
//        }
//    }     
//      public void eliminarClientes(int idclientes){
//        try {
//            String sql = "delete from clientes where idclientes= ? ";
//            pst = conex.con.prepareStatement(sql);
//            pst.setInt(1, idclientes);
//            pst.executeUpdate();
//        } catch (SQLException ex) {
//            Logger.getLogger(DatosClientes.class.getName()).log(Level.SEVERE, null, ex);
//        }
//    }
//      
//     public ArrayList<Clientes> getAllClientes() {
//        
//        ArrayList<Clientes> listacli = new ArrayList<>();
//        cli = null;
//        try {
//            
//            String sql = "select * from clientes";
//            pst = conex.con.prepareStatement(sql);
//            rs= pst.executeQuery();
//            while (rs.next()) {
//                cli = new Clientes();
//                cli.setIdcliente(rs.getInt("IDClientes"));
//                cli.setCodcliente(rs.getString("CodCliente"));
//                cli.setRazonsocial(rs.getString("RazonSocial"));
//                cli.setPersonacontacto(rs.getString("PersonaContacto"));
//                cli.setCargo(rs.getString("Cargo"));
//                cli.setNif(rs.getString("NIF"));
//                cli.setDireccion(rs.getString("Direccion"));
//                cli.setCiudad(rs.getString("Ciudad"));
//                cli.setCp(rs.getString("CP"));
//                cli.setTelefono1(rs.getString("Telefono1"));
//                cli.setTelefono2(rs.getString("Telefono2"));
//                cli.setFax(rs.getString("Fax"));
//                cli.setEmail(rs.getString("Email"));
//                cli.setWeb(rs.getString("Web"));
//                cli.setCuentapago(rs.getString("CuentaPago"));
//                cli.setObservaciones(rs.getString("Observaciones"));  
//                listacli.add(cli);
//            }
//        } catch (SQLException ex) {
//            Logger.getLogger(DatosClientes.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        return listacli;
//    }
//}
