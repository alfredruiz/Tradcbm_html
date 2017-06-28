package clases;

import java.util.Date;

public class Compras {

    private int IDCompras;
    private int IDProveedor;
    private String RazonSocial;
    private String NumFactura;
    private String Concepto;
    private Date Fecha;
    private int Trimestre;
    private int Ejercicio;
    private Double BaseFactura;
    private Double TipoIVA;
    private Double TotalIVA;
    private Double TotalFactura;
    private String Amortizacion;

    public Compras(int IDCompras, int IDProveedor, String NumFactura, String Concepto, Date Fecha, Double BaseFactura, Double TipoIVA, String Amortizacion) {
        this.IDCompras = IDCompras;
        this.IDProveedor = IDProveedor;
        this.NumFactura = NumFactura;
        this.Concepto = Concepto;
        this.Fecha = Fecha;
        this.BaseFactura = BaseFactura;
        this.TipoIVA = TipoIVA;
        this.Amortizacion = Amortizacion;
    }

    public Compras() {
    }

    public String getRazonSocial() {
        return RazonSocial;
    }

    public void setRazonSocial(String RazonSocial) {
        this.RazonSocial = RazonSocial;
    }

    public int getIDCompras() {
        return IDCompras;
    }

    public void setIDCompras(int IDCompras) {
        this.IDCompras = IDCompras;
    }

    public int getIDProveedor() {
        return IDProveedor;
    }

    public void setIDProveedor(int IDProveedor) {
        this.IDProveedor = IDProveedor;
    }

    public String getNumFactura() {
        return NumFactura;
    }

    public void setNumFactura(String NumFactura) {
        this.NumFactura = NumFactura;
    }

    public String getConcepto() {
        return Concepto;
    }

    public void setConcepto(String Concepto) {
        this.Concepto = Concepto;
    }

    public Date getFecha() {
        return Fecha;
    }

    public void setFecha(Date Fecha) {
        this.Fecha = Fecha;
    }

    public void setTrimestre(int Trimestre) {
        this.Trimestre = Trimestre;
    }

    public void setEjercicio(int Ejercicio) {
        this.Ejercicio = Ejercicio;
    }

    public Double getBaseFactura() {
        return BaseFactura;
    }

    public void setBaseFactura(Double BaseFactura) {
        this.BaseFactura = BaseFactura;
    }

    public Double getTipoIVA() {
        return TipoIVA;
    }

    public void setTipoIVA(Double TipoIVA) {
        this.TipoIVA = TipoIVA;
    }

    public void setTotalIVA(Double TotalIVA) {
        this.TotalIVA = TotalIVA;
    }

    public void setTotalFactura(Double TotalFactura) {
        this.TotalFactura = TotalFactura;
    }

    public String getAmortizacion() {
        return Amortizacion;
    }

    public void setAmortizacion(String Amortizacion) {
        this.Amortizacion = Amortizacion;
    }

}
