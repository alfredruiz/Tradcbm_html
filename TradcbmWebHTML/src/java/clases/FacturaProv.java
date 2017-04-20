/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package clases;

import java.util.Date;

/**
 *
 * @author Alfredo
 */
public class FacturaProv {

    private String NumFactura;
    private String CodCliente;
    private String Ambito;
    private Date Fecha;
    private Double Base;
    private Double Descuento;
    private Double TipoIVA;
    private Double TipoIRPF;
    private Integer IDFacturaProv;

    public FacturaProv(String NumFactura, String CodCliente, String Ambito, Date Fecha, Double Base, Double Descuento, Double TipoIVA, Double TipoIRPF, Integer IDFacturaProv) {
        this.NumFactura = NumFactura;
        this.CodCliente = CodCliente;
        this.Ambito = Ambito;
        this.Fecha = Fecha;
        this.Base = Base;
        this.Descuento = Descuento;
        this.TipoIVA = TipoIVA;
        this.TipoIRPF = TipoIRPF;
        this.IDFacturaProv = IDFacturaProv;
    }

    public String getNumFactura() {
        return NumFactura;
    }

    public void setNumFactura(String NumFactura) {
        this.NumFactura = NumFactura;
    }

    public String getCodCliente() {
        return CodCliente;
    }

    public void setCodCliente(String CodCliente) {
        this.CodCliente = CodCliente;
    }

    public String getAmbito() {
        return Ambito;
    }

    public void setAmbito(String Ambito) {
        this.Ambito = Ambito;
    }

    public Date getFecha() {
        return Fecha;
    }

    public void setFecha(Date Fecha) {
        this.Fecha = Fecha;
    }

    public Double getBase() {
        return Base;
    }

    public void setBase(Double Base) {
        this.Base = Base;
    }

    public Double getDescuento() {
        return Descuento;
    }

    public void setDescuento(Double Descuento) {
        this.Descuento = Descuento;
    }

    public Double getTipoIVA() {
        return TipoIVA;
    }

    public void setTipoIVA(Double TipoIVA) {
        this.TipoIVA = TipoIVA;
    }

    public Double getTipoIRPF() {
        return TipoIRPF;
    }

    public void setTipoIRPF(Double TipoIRPF) {
        this.TipoIRPF = TipoIRPF;
    }

    public Integer getIDFacturaProv() {
        return IDFacturaProv;
    }

    public void setIDFacturaProv(Integer IDFacturaProv) {
        this.IDFacturaProv = IDFacturaProv;
    }

}
