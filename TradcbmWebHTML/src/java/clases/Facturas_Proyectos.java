package clases;

import java.util.Date;

public class Facturas_Proyectos {

    private int IDFacturas_Proyectos;
    private int IDFactura;
    private int IDProyecto;
    private String codfactura;
    private int idcliente;
    private String razonsocial;
    private String codproyecto;
    private Date fecha;

    public Facturas_Proyectos() {
    }

    public Facturas_Proyectos(int IDFacturas_Proyectos, int IDFactura, int IDProyecto) {
        this.IDFacturas_Proyectos = IDFacturas_Proyectos;
        this.IDFactura = IDFactura;
        this.IDProyecto = IDProyecto;
    }

    public int getIDFacturas_Proyectos() {
        return IDFacturas_Proyectos;
    }

    public void setIDFacturas_Proyectos(int IDFacturas_Proyectos) {
        this.IDFacturas_Proyectos = IDFacturas_Proyectos;
    }

    public int getIDFactura() {
        return IDFactura;
    }

    public void setIDFactura(int IDFactura) {
        this.IDFactura = IDFactura;
    }

    public int getIDProyecto() {
        return IDProyecto;
    }

    public void setIDProyecto(int IDProyecto) {
        this.IDProyecto = IDProyecto;
    }

    public String getCodfactura() {
        return codfactura;
    }

    public void setCodfactura(String codfactura) {
        this.codfactura = codfactura;
    }

    public int getIdcliente() {
        return idcliente;
    }

    public void setIdcliente(int idcliente) {
        this.idcliente = idcliente;
    }

    public String getRazonsocial() {
        return razonsocial;
    }

    public void setRazonsocial(String razonsocial) {
        this.razonsocial = razonsocial;
    }

    public String getCodproyecto() {
        return codproyecto;
    }

    public void setCodproyecto(String codproyecto) {
        this.codproyecto = codproyecto;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

}
