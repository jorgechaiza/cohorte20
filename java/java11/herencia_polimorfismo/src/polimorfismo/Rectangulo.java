package polimorfismo;

import java.util.Scanner;

public class Rectangulo extends FigurasGeometricas{

	Scanner s = new Scanner(System.in);
	private double base;
	private double altura;
	
	@Override
	public void pedirDatos() {
		// TODO Auto-generated method stub
		
		System.out.println("\t\t Area de Circulo ");
		System.out.print("Introduzca la base: ");
		base = s.nextDouble();
		System.out.print("Introduzca la altura: ");
		altura = s.nextDouble();

		
	}
	@Override
	public void area() {
		// TODO Auto-generated method stub
	
		resultado = (base * altura);
	}
}
