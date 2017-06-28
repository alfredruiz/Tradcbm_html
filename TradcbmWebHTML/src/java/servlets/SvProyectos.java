/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import Utilidades.Utilidades; 
import clases.Proyectos;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder; 
import datos.DatosProyectos;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SvProyectos extends HttpServlet {

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

            DatosProyectos misDatos;
            Proyectos proy;
            Proyectos proybd;

            //obtener datos
            int idproyecto = Integer.parseInt(request.getParameter("idproyecto"));
            int idcliente = Integer.parseInt(request.getParameter("idcliente")); 
            String codproyecto = request.getParameter("codproyecto"); 
            Date fecha = Utilidades.stringToDate(request.getParameter("fecha"));
            String tipotraduccion = request.getParameter("tipotraduccion");
            String idiomaorigen= request.getParameter("idiomaorigen");
            String idiomameta = request.getParameter("idiomameta");
            String estadoproyecto = request.getParameter("estadoproyecto");
            String carpetaproyecto = request.getParameter("carpetaproyecto");
            String concepto = request.getParameter("concepto");
            String tipotarifa = request.getParameter("tipotarifa");
            Double tarifaaplicada = Double.parseDouble(request.getParameter("tarifaaplicada"));
            int totalunidades = Integer.parseInt(request.getParameter("totalunidades"));
 

            String opcion = request.getParameter("opcion");

            switch (opcion) {

                case "nuevo": {
                    misDatos = new DatosProyectos();
                    proy = new Proyectos(idproyecto, idcliente,codproyecto, fecha, tipotraduccion, 
                                         idiomaorigen, idiomameta, estadoproyecto, carpetaproyecto, concepto, 
                                         tipotarifa, tarifaaplicada, totalunidades);
                    proybd = misDatos.getProyectos(idproyecto);
                    if (proybd == null) {
                        misDatos.nuevoProyectos(proy);
                    } else {
                        out.print("Existe");
                    }
                    break;
                }
                case "modificar": {
                    misDatos = new DatosProyectos();
                    proy = new Proyectos(idproyecto, idcliente, codproyecto, fecha, tipotraduccion, 
                                         idiomaorigen, idiomameta, estadoproyecto, carpetaproyecto, concepto, 
                                         tipotarifa, tarifaaplicada, totalunidades); 
                    misDatos.modificarProyectos(proy);
                    break;
                }
                case "eliminar": {
                    misDatos = new DatosProyectos();
                    proybd = misDatos.getProyectos(idproyecto);
                    misDatos.eliminarProyectos(proybd);
                    break;
                }
                case "consultar": {
                    misDatos = new DatosProyectos();
                    Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
                    String Json = gson.toJson(misDatos.getProyectos(idproyecto));
                    out.print(Json);
                    break;
                }
                case "listar": {
                    misDatos = new DatosProyectos();
                    Gson gson = new Gson();
                    String Json = gson.toJson(misDatos.getAllProyectosClientes());
                    out.print(Json);
                    break;
                }
                default:
            }
        } catch (Exception ex) {
            ex.getMessage();
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
