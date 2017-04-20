package datos;

import clases.Usuarios;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DatosUsuario {

    //Conectar a la base de datos
    private final Conexion conex = new Conexion();
    private final Connection con = conex.Conectar();
    private String mysql="";
    private ResultSet rs;
    private PreparedStatement pst;
    private Usuarios usu;


    public Usuarios ValidaUsuario(String idusuarios, String password) {
        try {
            mysql = "select * from usuarios where idusuarios= ? and password= ?";
            pst = con.prepareStatement(mysql);
            pst.setString(1, idusuarios);
            pst.setString(2, password);
            rs = pst.executeQuery(); 
            if (rs.next()) {
                usu = new Usuarios(
                        rs.getString("idusuarios"), rs.getString("nombre"),
                        rs.getString("apellidos"), rs.getString("email"),
                        rs.getString("password"), rs.getString("perfil"));
            }
            return usu;
        } catch (SQLException e) {
            Logger.getLogger(DatosUsuario.class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    }

    public Usuarios getUsuario(String idusuarios) {
        usu = null;
        try {
            mysql = "select * from usuarios where idusuarios= ? ";
            pst = con.prepareStatement(mysql);
            pst.setString(1, idusuarios);
            rs = pst.executeQuery();
            if (rs.next()) {
                usu = new Usuarios(
                        rs.getString("idusuarios"), rs.getString("nombre"),
                        rs.getString("apellidos"), rs.getString("email"),
                        rs.getString("password"), rs.getString("perfil"));
            }
            return usu;
        } catch (SQLException e) {
            Logger.getLogger(DatosUsuario.class.getName()).log(Level.SEVERE, null, e);
            return null;
        }
    } 
    
    public boolean nuevoUsuario(Usuarios usu) {
        try {
            mysql = "Insert into usuarios(idusuarios,nombre,apellidos,email,"
                    + "password,perfil)values(?,?,?,?,?,?)";
            pst = con.prepareStatement(mysql);
            pst.setString(1, usu.getIdusuarios());
            pst.setString(2, usu.getNombre());
            pst.setString(3, usu.getApellidos());
            pst.setString(4, usu.getEmail());
            pst.setString(5, usu.getPassword());
            pst.setString(6, usu.getPerfil());
            int us = pst.executeUpdate();
            return us!=0; 
        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosUsuario.class.getName()).log(Level.SEVERE, null, e); 
            return false;
        }
    }

    public boolean modificarUsuario(Usuarios usu) {
        try {
            mysql = "UPDATE usuarios SET nombre = ?, apellidos= ?,email=?, password = ?, perfil= ? WHERE idusuarios = ?";
            pst = con.prepareStatement(mysql);
            pst.setString(1, usu.getNombre());
            pst.setString(2, usu.getApellidos());
            pst.setString(3, usu.getEmail());
            pst.setString(4, usu.getPassword());
            pst.setString(5, usu.getPerfil());
            pst.setString(6, usu.getIdusuarios());
            int us= pst.executeUpdate();
            return us!=0;     
        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosUsuario.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    }
     public boolean eliminarUsuario(Usuarios usu) {
        try {
            mysql = "delete from usuarios where idusuarios= ? ";
            pst = con.prepareStatement(mysql);   
            pst.setString(1, usu.getIdusuarios());
            int us= pst.executeUpdate();
            return us!=0;  
          
        } catch (SQLException e) {
            conex.CerrarConexion();
            Logger.getLogger(DatosUsuario.class.getName()).log(Level.SEVERE, null, e);
            return false;
        }
    } 

    public ArrayList<Usuarios> getAllUsuarios() {

        ArrayList<Usuarios> listausu = new ArrayList<>(); 
        try {

            String sql = "select * from usuarios";
            pst = con.prepareStatement(sql);
            rs = pst.executeQuery();
            while (rs.next()) {
                usu = new Usuarios();
                usu.setIdusuarios(rs.getString("idusuarios"));
                usu.setNombre(rs.getString("nombre"));
                usu.setApellidos(rs.getString("apellidos"));
                usu.setEmail(rs.getString("email"));
                usu.setPassword(rs.getString("password"));
                usu.setPerfil(rs.getString("perfil"));
                listausu.add(usu);
            }
            conex.CerrarConexion();
            return listausu;
        } catch (SQLException e) {
            Logger.getLogger(DatosUsuario.class.getName()).log(Level.SEVERE, null, e);
            return null;
        } 
    }
}

//    public ResultSet AllUsuarios() { 
//        try {
//            usu = null;
//            mysql = "select * from usuarios";
//            pst = con.prepareStatement(mysql);
//            return pst.executeQuery();
//        } catch (SQLException ex) {
//            Logger.getLogger(DatosUsuario.class.getName()).log(Level.SEVERE, null, ex);
//            return null;
//        }
//    }
//    