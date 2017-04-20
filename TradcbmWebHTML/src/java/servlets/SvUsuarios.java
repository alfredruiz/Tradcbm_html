/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import clases.Usuarios;
import com.google.gson.Gson;
import datos.DatosUsuario;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SvUsuarios extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {

            DatosUsuario misDatos;
            Usuarios usu;

            //obtener datos
            String idusuarios = request.getParameter("idusuarios");
            String nombre = request.getParameter("nombre");
            String apellidos = request.getParameter("apellidos");
            String email = request.getParameter("email");
            String password = request.getParameter("password");
            String perfil =  request.getParameter("perfil");

            String opcion = request.getParameter("opcion");

            switch (opcion) {

                case "ingresar": {
                    misDatos = new DatosUsuario();
                    Gson gson = new Gson();
                    String Json = gson.toJson(misDatos.ValidaUsuario(idusuarios, password));
                    out.print(Json);
                    break;
                }
                case "nuevo": {
                    misDatos = new DatosUsuario();
                    usu = new Usuarios(idusuarios, nombre, apellidos, email, password, perfil);                    
                    Usuarios usubd = misDatos.getUsuario(idusuarios);
                    if(usubd == null){ 
                       misDatos.nuevoUsuario(usu);
                    }
                    else{
                       out.print("Existe");
                    } 
                    break;
                }
                case "modificar": {
                    misDatos = new DatosUsuario();
                    usu = new Usuarios(idusuarios, nombre, apellidos, email, password, perfil);
                    misDatos.modificarUsuario(usu);
                    break;
                }
                case "eliminar": {
                    misDatos = new DatosUsuario();
                    Usuarios usubd = misDatos.getUsuario(idusuarios);
                    misDatos.eliminarUsuario(usubd);
                    break;
                }
                case "consultar": {
                    misDatos = new DatosUsuario();
                    Gson gson = new Gson();
                    String Json = gson.toJson(misDatos.getUsuario(idusuarios));
                    out.print(Json);
                    break;
                }
                case "listar": {
                    misDatos = new DatosUsuario();
                    Gson gson = new Gson();
                    String Json = gson.toJson(misDatos.getAllUsuarios());
                    out.print(Json);
                    break;
                }
                default:
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
