package clases;
 
import java.util.Date;

public class Proyectos {
    
    private int idproyecto;
    private int idcliente;
    private String codcliente; 
    private String razonsocial; 
    private String codproyecto;
    private Date fecha;
    private String tipotraduccion;
    private String idiomaorigen;
    private String idiomameta;
    private String estadoproyecto;
    private String carpetaproyecto;
    private String concepto;
    private String tipotarifa;
    private Double tarifaaplicada;
    private int totalunidades;

    public Proyectos() {
    }
  
    
    public Proyectos(int idproyecto, int idcliente, String codproyecto, Date fecha, String tipotraduccion, String idiomaorigen, String idiomameta, String estadoproyecto, String carpetaproyecto, String concepto, String tipotarifa, Double tarifaaplicada, int totalunidades) {
        this.idproyecto = idproyecto;
        this.idcliente = idcliente;
        this.codproyecto = codproyecto;
        this.fecha = fecha;
        this.tipotraduccion = tipotraduccion;
        this.idiomaorigen = idiomaorigen;
        this.idiomameta = idiomameta;
        this.estadoproyecto = estadoproyecto;
        this.carpetaproyecto = carpetaproyecto;
        this.concepto = concepto;
        this.tipotarifa = tipotarifa;
        this.tarifaaplicada = tarifaaplicada;
        this.totalunidades = totalunidades;
    }

    public int getIdproyecto() {
        return idproyecto;
    }

    public void setIdproyecto(int idproyecto) {
        this.idproyecto = idproyecto;
    }

    public int getIdcliente() {
        return idcliente;
    }

    public void setIdcliente(int idcliente) {
        this.idcliente = idcliente;
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

    public String getTipotraduccion() {
        return tipotraduccion;
    }

    public void setTipotraduccion(String tipotraduccion) {
        this.tipotraduccion = tipotraduccion;
    }

    public String getIdiomaorigen() {
        return idiomaorigen;
    }

    public void setIdiomaorigen(String idiomaorigen) {
        this.idiomaorigen = idiomaorigen;
    }

    public String getIdiomameta() {
        return idiomameta;
    }

    public void setIdiomameta(String idiomameta) {
        this.idiomameta = idiomameta;
    }

    public String getEstadoproyecto() {
        return estadoproyecto;
    }

    public void setEstadoproyecto(String estadoproyecto) {
        this.estadoproyecto = estadoproyecto;
    }

    public String getCarpetaproyecto() {
        return carpetaproyecto;
    }

    public void setCarpetaproyecto(String carpetaproyecto) {
        this.carpetaproyecto = carpetaproyecto;
    }

    public String getConcepto() {
        return concepto;
    }

    public void setConcepto(String concepto) {
        this.concepto = concepto;
    }

    public String getTipotarifa() {
        return tipotarifa;
    }

    public void setTipotarifa(String tipotarifa) {
        this.tipotarifa = tipotarifa;
    }

    public Double getTarifaaplicada() {
        return tarifaaplicada;
    }

    public void setTarifaaplicada(Double tarifaaplicada) {
        this.tarifaaplicada = tarifaaplicada;
    }

    public int getTotalunidades() {
        return totalunidades;
    }

    public void setTotalunidades(int totalunidades) {
        this.totalunidades = totalunidades;
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
    
    
}
