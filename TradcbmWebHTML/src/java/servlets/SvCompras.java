/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import Utilidades.Utilidades;
import clases.Compras;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import datos.DatosCompras;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SvCompras extends HttpServlet {

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

            DatosCompras misDatos;
            Compras comp;
            Compras compbd;

            //obtener datos
            int IDCompras = Integer.parseInt(request.getParameter("idcompras"));
            int IDProveedor = Integer.parseInt(request.getParameter("idproveedor"));
            String NumFactura = request.getParameter("numfactura");
            String Concepto = request.getParameter("concepto");
            Date Fecha = Utilidades.stringToDate(request.getParameter("fecha"));
            Double BaseFactura = Double.parseDouble(request.getParameter("basefactura"));
            Double TipoIVA = Double.parseDouble(request.getParameter("tipoiva"));
            String Amortizacion = request.getParameter("amortizacion");

            String opcion = request.getParameter("opcion");

            switch (opcion) {

                case "nuevo": {
                    misDatos = new DatosCompras();
                    comp = new Compras(IDCompras, IDProveedor, NumFactura, Concepto, Fecha, BaseFactura, TipoIVA, Amortizacion);
                    compbd = misDatos.getCompras(IDCompras);
                    if (compbd == null) {
                        misDatos.nuevaCompra(comp);
                    } else {
                        out.print("Existe");
                    }
                    break;
                }
                case "modificar": {
                    misDatos = new DatosCompras();
                    comp = new Compras(IDCompras, IDProveedor, NumFactura, Concepto, Fecha, BaseFactura, TipoIVA, Amortizacion);
                    misDatos.modificarCompra(comp);
                    break;
                }
                case "eliminar": {
                    misDatos = new DatosCompras();
                    compbd = misDatos.getCompras(IDCompras);
                    misDatos.eliminarCompra(compbd);
                    break;
                }
                case "consultar": {
                    misDatos = new DatosCompras();
                    Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
                    String Json = gson.toJson(misDatos.getCompras(IDCompras));
                    out.print(Json);
                    break;
                }
                case "listar": {
                    misDatos = new DatosCompras();
                    Gson gson = new Gson();
                    String Json = gson.toJson(misDatos.getAllComprasProveedores());
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
