package servlets;

import clases.Clientes;
import datos.DatosClientes;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SvClientes extends HttpServlet {

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

            DatosClientes misDatos;
            Clientes cli;
            Clientes clibd;

            //Obtener datos
            String codcliente = request.getParameter("codcliente");
            String razonsocial = request.getParameter("razonsocial");
            String personacontacto = request.getParameter("personacontacto");
            String cargo = request.getParameter("cargo");
            String nif = request.getParameter("nif");
            String direccion = request.getParameter("direccion");
            String ciudad = request.getParameter("ciudad");
            String cp = request.getParameter("cp");
            String pais = request.getParameter("pais");
            String telefono1 = request.getParameter("telefono1");
            String telefono2 = request.getParameter("telefono2");
            String fax = request.getParameter("fax");
            String email = request.getParameter("email");
            String web = request.getParameter("web");
            String cuentapago = request.getParameter("cuentapago");
            String observaciones = request.getParameter("observaciones");
            int idcliente = Integer.parseInt(request.getParameter("idcliente"));

            String opcion = request.getParameter("opcion");

            switch (opcion) {

                case "nuevo": {
                    misDatos = new DatosClientes();
                    cli = new Clientes(idcliente, codcliente, razonsocial, personacontacto, cargo, nif,
                            direccion, ciudad, cp, pais, telefono1, telefono2, fax, email, web, cuentapago, observaciones);
                    clibd = misDatos.getCliente(idcliente);
                    if (clibd == null) {
                        misDatos.nuevoCliente(cli);
                    } else {
                        out.print("Existe");
                    }
                    break;
                }
                case "modificar": {
                    misDatos = new DatosClientes();
                    cli = new Clientes(idcliente, codcliente, razonsocial, personacontacto, cargo, nif,
                            direccion, ciudad, cp, pais, telefono1, telefono2, fax, email, web, cuentapago, observaciones);
                    misDatos.modificarCliente(cli);
                    break;
                }
                case "eliminar": {
                    misDatos = new DatosClientes();
                    clibd = misDatos.getCliente(idcliente);
                    misDatos.eliminarCliente(clibd);
                    break;
                }
                case "consultar": {
                    misDatos = new DatosClientes();
                    Gson gson = new Gson();
                    String Json = gson.toJson(misDatos.getCliente(idcliente));
                    out.print(Json);
                    break;
                }
                case "listar": {
                    misDatos = new DatosClientes();
                    Gson gson = new Gson();
                    String Json = gson.toJson(misDatos.getAllClientes());
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
