/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package clases;

/**
 *
 * @author Ana
 */
public class Clientes {
    
     private int idcliente;
     private String codcliente;
     private String razonsocial;
     private String personacontacto;
     private String cargo;
     private String nif;
     private String direccion;
     private String ciudad;
     private String cp;
     private String telefono1;
     private String telefono2;
     private String fax;
     private String email;
     private String web;
     private String cuentapago;
     private String observaciones;

    public Clientes(int idcliente, String codcliente, String razonsocial, String personacontacto, String cargo, String nif, String direccion, String ciudad, String cp, String telefono1, String telefono2, String fax, String email, String web, String cuentapago, String observaciones) {
        this.idcliente = idcliente;
        this.codcliente = codcliente;
        this.razonsocial = razonsocial;
        this.personacontacto = personacontacto;
        this.cargo = cargo;
        this.nif = nif;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.cp = cp;
        this.telefono1 = telefono1;
        this.telefono2 = telefono2;
        this.fax = fax;
        this.email = email;
        this.web = web;
        this.cuentapago = cuentapago;
        this.observaciones = observaciones;
    }
    public Clientes(){}
    public int getIdcliente() {
        return idcliente;
    }

    public void setIdcliente(int idcliente) {
        this.idcliente = idcliente;
    }

    public String getCodcliente() {
        return codcliente;
    }

    public void setCodcliente(String codcliente) {
        this.codcliente = codcliente;
    }

    public String getRazonsocial() {
        return razonsocial;
    }

    public void setRazonsocial(String razonsocial) {
        this.razonsocial = razonsocial;
    }

    public String getPersonacontacto() {
        return personacontacto;
    }

    public void setPersonacontacto(String personacontacto) {
        this.personacontacto = personacontacto;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getNif() {
        return nif;
    }

    public void setNif(String nif) {
        this.nif = nif;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getCp() {
        return cp;
    }

    public void setCp(String cp) {
        this.cp = cp;
    }

    public String getTelefono1() {
        return telefono1;
    }

    public void setTelefono1(String telefono1) {
        this.telefono1 = telefono1;
    }

    public String getTelefono2() {
        return telefono2;
    }

    public void setTelefono2(String telefono2) {
        this.telefono2 = telefono2;
    }

    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getWeb() {
        return web;
    }

    public void setWeb(String web) {
        this.web = web;
    }

    public String getCuentapago() {
        return cuentapago;
    }

    public void setCuentapago(String cuentapago) {
        this.cuentapago = cuentapago;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }
     
     
}
