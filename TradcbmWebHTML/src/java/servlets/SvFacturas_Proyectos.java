package servlets;
 
import clases.Facturas_Proyectos; 
import com.google.gson.Gson;
import com.google.gson.GsonBuilder; 
import datos.DatosFacturas_Proyectos;
import java.io.IOException;
import java.io.PrintWriter; 
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

 
public class SvFacturas_Proyectos extends HttpServlet {

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
           
            DatosFacturas_Proyectos misDatos;
            Facturas_Proyectos facproy;
            Facturas_Proyectos facproybd; 
           
            //obtener datos
            int idfacturas_proyectos = Integer.parseInt(request.getParameter("idfacturas_proyectos"));
            int idfactura = Integer.parseInt(request.getParameter("idfactura"));
            int idproyecto = Integer.parseInt(request.getParameter("idproyecto")); 
           
            String opcion = request.getParameter("opcion");

            switch (opcion) {  
                
                case "nuevo": {
                    misDatos = new DatosFacturas_Proyectos();
                    facproy = new Facturas_Proyectos(idfacturas_proyectos, idfactura, idproyecto);
                    facproybd = misDatos.getFacturas_Proyectos(idfacturas_proyectos);
                    if (facproybd == null) {
                        misDatos.nuevoFacturas_Proyectos(facproy);
                    } else {
                        out.print("Existe");
                    }
                    break;
                }
                case "modificar": {
                    misDatos = new DatosFacturas_Proyectos();
                    facproy =  new Facturas_Proyectos(idfacturas_proyectos, idfactura, idproyecto);
                    misDatos.modificarFacturas_Proyectos(facproy);
                    break;
                }
                case "eliminar": {
                    misDatos = new DatosFacturas_Proyectos();
                    facproybd = misDatos.getFacturas_Proyectos(idfacturas_proyectos);
                    misDatos.eliminarFacturas_Proyectos(facproybd);
                    break;
                }
                case "consultar": {
                    misDatos = new DatosFacturas_Proyectos();
                    Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
                    String Json = gson.toJson(misDatos.getFacturas_Proyectos(idfacturas_proyectos));
                    out.print(Json);
                    break;
                } 
                case "listar": {
                    misDatos = new DatosFacturas_Proyectos();
                    Gson gson = new Gson();
                    String Json = gson.toJson(misDatos.getAllFacturasProyectos(idfactura));
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
