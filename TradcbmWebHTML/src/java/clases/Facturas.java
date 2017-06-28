package clases;

import java.util.Date;

public class Facturas {

    private int idfactura;
    private String codfactura;
    private String idiomafactura;
    private String ambito;
    private Date fecha;
    private Double tipoiva;
    private Double irpf;
    private Double descuentos;
    private Date vencimientos;
    private String divisafactura;
    private int idcliente;
    private String razonsocial;

    public Facturas() {
    }

    public Facturas(int idfactura, String codfactura, String idiomafactura, String ambito, Date fecha, Double tipoiva, Double irpf, Double descuentos, Date vencimientos, String divisafactura, int idcliente) {
        this.idfactura = idfactura;
        this.codfactura = codfactura;
        this.idiomafactura = idiomafactura;
        this.ambito = ambito;
        this.fecha = fecha;
        this.tipoiva = tipoiva;
        this.irpf = irpf;
        this.descuentos = descuentos;
        this.vencimientos = vencimientos;
        this.divisafactura = divisafactura;
        this.idcliente = idcliente; 
    }

    public int getIdfactura() {
        return idfactura;
    }

    public void setIdfactura(int idfactura) {
        this.idfactura = idfactura;
    }

    public String getCodfactura() {
        return codfactura;
    }

    public void setCodfactura(String codfactura) {
        this.codfactura = codfactura;
    }

    public String getIdiomafactura() {
        return idiomafactura;
    }

    public void setIdiomafactura(String idiomafactura) {
        this.idiomafactura = idiomafactura;
    }

    public String getAmbito() {
        return ambito;
    }

    public void setAmbito(String ambito) {
        this.ambito = ambito;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Double getTipoiva() {
        return tipoiva;
    }

    public void setTipoiva(Double tipoiva) {
        this.tipoiva = tipoiva;
    }

    public Double getIrpf() {
        return irpf;
    }

    public void setIrpf(Double irpf) {
        this.irpf = irpf;
    }

    public Double getDescuentos() {
        return descuentos;
    }

    public void setDescuentos(Double descuentos) {
        this.descuentos = descuentos;
    }

    public Date getVencimientos() {
        return vencimientos;
    }

    public void setVencimientos(Date vencimientos) {
        this.vencimientos = vencimientos;
    }

    public String getDivisafactura() {
        return divisafactura;
    }

    public void setDivisafactura(String divisafactura) {
        this.divisafactura = divisafactura;
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

}
