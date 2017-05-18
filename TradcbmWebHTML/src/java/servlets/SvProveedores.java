 
package servlets;

 
import clases.Proveedores;
import com.google.gson.Gson; 
import datos.DatosProveedores;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

 
public class SvProveedores extends HttpServlet {

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
            
            DatosProveedores misDatos;
            Proveedores prov;
            Proveedores provbd;

            //Obtener datos
            String razonsocial = request.getParameter("razonsocial");
            String codproveedor = request.getParameter("codproveedor");
            String nif = request.getParameter("nif");
            String personacontacto = request.getParameter("personacontacto");
            String direccion = request.getParameter("direccion");
            String ciudad = request.getParameter("ciudad");
            String cp = request.getParameter("cp");
            String pais = request.getParameter("pais");
            String telefono1 = request.getParameter("telefono1");
            String telefono2 = request.getParameter("telefono2");
            String fax = request.getParameter("fax");
            String email = request.getParameter("email");
            String web = request.getParameter("web"); 
            String descripcion = request.getParameter("descripcion");
            int idproveedor = Integer.parseInt(request.getParameter("idproveedor"));

            String opcion = request.getParameter("opcion");

            switch (opcion) {

                case "nuevo": {
                    misDatos = new DatosProveedores();
                    prov = new Proveedores(idproveedor, razonsocial, codproveedor, nif, personacontacto, 
                                           direccion, ciudad, cp, pais, telefono1, telefono2, fax, email, web, descripcion);
                    provbd = misDatos.getProveedor(idproveedor);
                    if (provbd == null) {
                        misDatos.nuevoProveedor(prov);
                    } else {
                        out.print("Existe");
                    }
                    break;
                }
                case "modificar": {
                    misDatos = new DatosProveedores();
                    prov  = new Proveedores(idproveedor, razonsocial, codproveedor, nif, personacontacto, direccion, ciudad,
                                            cp, pais, telefono1, telefono2, fax, email, web, descripcion);
                    misDatos.modificarProveedor(prov);
                    break;
                }
                case "eliminar": {
                    misDatos = new DatosProveedores();
                    provbd = misDatos.getProveedor(idproveedor);
                    misDatos.eliminarProveedor(provbd);
                    break;
                }
                case "consultar": {
                    misDatos = new DatosProveedores();
                    Gson gson = new Gson();
                    String Json = gson.toJson(misDatos.getProveedor(idproveedor));
                    out.print(Json);
                    break;
                }
                case "listar": {
                    misDatos = new DatosProveedores();
                    Gson gson = new Gson();
                    String Json = gson.toJson(misDatos.getAllProveedores());
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
