<%-- 
    Document   : Facturas
    Created on : 06-feb-2017, 17:52:47
    Author     : Ana
--%>

<%@page import="clases.Usuarios"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <jsp:include page="contenido/librerias.jsp"></jsp:include>
        </head>
        <body> 

        <jsp:include page="contenido/header.jsp"></jsp:include>
            <div id="contenedor">
            <%
                HttpSession sesion = request.getSession();
                Usuarios usulog = (Usuarios) sesion.getAttribute("idusuarios");
                if (usulog.getIdPerfil() == 1) {
            %>    
            <a href="MenuAdministrador.jsp">Menú</a>
            <%
            } else {
            %>
            <a href="MenuEmpleado.jsp">Menú</a>
            <%
                }
            %>   
            <a href="javascript:history.back(1)">Volver</a>

        </div>
        <jsp:include page="contenido/footer.jsp"></jsp:include>
    </body>
</html>