package clases;

import java.util.Date;
 
public class Compras {

    private int IDCompras;
    private int IDProveedor;
    private String NumFactura;
    private String Concepto;
    private Date Fecha;
    private Double BaseFactura;
    private Double TipoIVA;
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

    public String getAmortizacion() {
        return Amortizacion;
    }

    public void setAmortizacion(String Amortizacion) {
        this.Amortizacion = Amortizacion;
    }

}
