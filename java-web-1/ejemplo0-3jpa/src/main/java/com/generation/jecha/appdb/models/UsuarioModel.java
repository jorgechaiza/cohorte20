package com.generation.jecha.appdb.models;

import java.util.ArrayList;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario")
public class UsuarioModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Long id;
	private String nombre;
	private String email;
	private Integer prioridad;
	
	/*****************relaciones************************/
	
	@OneToMany(mappedBy = "usuario")  // un usuario a muchos productos.
	private ArrayList<ProductoModel> productos;
	
	@OneToMany(mappedBy = "usuario") // un usuario a muchas ordenes.
	private ArrayList<OrdenModel> ordenes;
	
	/***************************************************/
	
	public UsuarioModel() {
	}

	public UsuarioModel(Long id, String nombre, String email, Integer prioridad) {
		this.id = id;
		this.nombre = nombre;
		this.email = email;
		this.prioridad = prioridad;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getPrioridad() {
		return prioridad;
	}

	public void setPrioridad(Integer prioridad) {
		this.prioridad = prioridad;
	}

	public ArrayList<ProductoModel> getProductos() {
		return productos;
	}

	public void setProductos(ArrayList<ProductoModel> productos) {
		this.productos = productos;
	}

	public ArrayList<OrdenModel> getOrdenes() {
		return ordenes;
	}

	public void setOrdenes(ArrayList<OrdenModel> ordenes) {
		this.ordenes = ordenes;
	}

	
	
	
}
