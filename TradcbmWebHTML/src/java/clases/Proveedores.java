 package clases;


public class Proveedores {
    
    private int idproveedor;
    private String razonsocial;
    private String codproveedor;
    private String nif;
    private String personacontacto;
    private String direccion;
    private String ciudad;
    private String cp;
    private String pais;
    private String telefono1;
    private String telefono2;
    private String fax;
    private String email;
    private String web;
    private String descripcion;

    public Proveedores() {
    }

    public Proveedores(int idproveedor, String razonsocial, String codproveedor, String nif, String personacontacto,
                       String direccion, String ciudad, String cp, String pais, String telefono1, 
                       String telefono2, String fax, String email, String web, String descripcion) {
        this.idproveedor = idproveedor;
        this.razonsocial = razonsocial;
        this.codproveedor = codproveedor;
        this.nif = nif;
        this.personacontacto = personacontacto;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.cp = cp;
        this.pais = pais;
        this.telefono1 = telefono1;
        this.telefono2 = telefono2;
        this.fax = fax;
        this.email = email;
        this.web = web;
        this.descripcion = descripcion;
    }

    public int getIdproveedor() {
        return idproveedor;
    }

    public void setIdproveedor(int idproveedor) {
        this.idproveedor = idproveedor;
    }

    public String getRazonsocial() {
        return razonsocial;
    }

    public void setRazonsocial(String razonsocial) {
        this.razonsocial = razonsocial;
    }

    public String getCodproveedor() {
        return codproveedor;
    }

    public void setCodproveedor(String codproveedor) {
        this.codproveedor = codproveedor;
    }

    public String getNif() {
        return nif;
    }

    public void setNif(String nif) {
        this.nif = nif;
    }

    public String getPersonacontacto() {
        return personacontacto;
    }

    public void setPersonacontacto(String personacontacto) {
        this.personacontacto = personacontacto;
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

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    
    
}
