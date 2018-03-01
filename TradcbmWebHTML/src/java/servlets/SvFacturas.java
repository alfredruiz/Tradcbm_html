package servlets;

import Utilidades.Utilidades;
import clases.Facturas;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import datos.DatosFacturas;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SvFacturas extends HttpServlet {

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

            DatosFacturas misDatos;
            Facturas fac;
            Facturas facbd;

            //obtener datos
            int idfactura = Integer.parseInt(request.getParameter("idfactura"));
            int idcliente = Integer.parseInt(request.getParameter("idcliente"));
            String codfactura = request.getParameter("codfactura");
            String idiomafactura = request.getParameter("idiomafactura");
            String ambito = request.getParameter("ambito");
            Date fecha = Utilidades.stringToDate(request.getParameter("fecha"));
            Double tipoiva = Double.parseDouble(request.getParameter("tipoiva"));
            Double irpf = Double.parseDouble(request.getParameter("irpf"));
            Double descuentos = Double.parseDouble(request.getParameter("descuentos"));
            Date vencimientos = Utilidades.stringToDate(request.getParameter("vencimientos"));
            String divisafactura = request.getParameter("divisafactura");
            String razonsocial = request.getParameter("razonsocial");

            String opcion = request.getParameter("opcion");

            switch (opcion) {

                case "nuevo": {
                    misDatos = new DatosFacturas();
                    fac = new Facturas(idfactura, codfactura, idiomafactura, ambito, fecha, tipoiva,
                            irpf, descuentos, vencimientos, divisafactura, idcliente);
                    facbd = misDatos.getFactura(idfactura);
                    if (facbd == null) {
                        misDatos.nuevoFactura(fac);
                    } else {
                        out.print("Existe");
                    }
                    break;
                }
                case "modificar": {
                    misDatos = new DatosFacturas();
                    fac = new Facturas(idfactura, codfactura, idiomafactura, ambito, fecha, tipoiva,
                            irpf, descuentos, vencimientos, divisafactura, idcliente);
                    misDatos.modificarFactura(fac);
                    break;
                }
                case "eliminar": {
                    misDatos = new DatosFacturas();
                    facbd = misDatos.getFactura(idfactura);
                    misDatos.eliminarFactura(facbd);
                    break;
                }
                case "consultar": {
                    misDatos = new DatosFacturas();
                    Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
                    String Json = gson.toJson(misDatos.getFactura(idfactura));
                    out.print(Json);
                    break;
                }
                case "listar": {
                    misDatos = new DatosFacturas();
                    Gson gson = new Gson();
                    String Json = gson.toJson(misDatos.getAllFacturas());
                    out.print(Json);
                    break;
                }

                case "listarLast": {
                    misDatos = new DatosFacturas();
                    Gson gson = new Gson();
                    String Json = gson.toJson(misDatos.getLastFactura());
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
