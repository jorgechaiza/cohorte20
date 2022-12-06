package herencia;

public class Hija extends Padre {

	private int edad;
	

	public Hija(String nombre, String domicilio, int edad) {
		super(nombre, domicilio);
		this.edad = edad;
	}
	public void mostrarDatos() {
		System.out.println("El nombre es: " + nombre + " " + "El domicilio es: " + domicilio + " " + "La edad es: " + edad);
	}
	
	public void mostrarDatos(String apellido) {
		
		
		System.out.println("El nombre y el apellido son: " + nombre + " " + apellido + " " + "El domicilio es: " + domicilio + " " + "La edad es: " + edad);

	}
	
}
