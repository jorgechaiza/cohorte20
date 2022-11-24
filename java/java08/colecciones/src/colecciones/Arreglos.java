package colecciones;

import java.util.Arrays;

public class Arreglos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Solo permiten un tipo de dato
		//Se tiene que especificar su tamaño
		
		
		String [] miArreglo = new String[6];
		
		miArreglo[0] = "Jorge";
		miArreglo[1] = "Felipe";
		miArreglo[2] = "Alonso";
		miArreglo[3] = "Fernanda";
		miArreglo[4] = "Victor";
		miArreglo[5] = "Nulo";
	
		System.out.println(miArreglo[0]);
		
		for(int i=0; i<miArreglo.length; i++) {
			System.out.println("ciclo for: " + miArreglo[i]);
		
		}
		System.out.println("------------------");
		
		for(String nombre : miArreglo){
			System.out.println("For each: " + nombre);
		}
		
		System.out.println(Arrays.toString(miArreglo));
		
		//Tipos de valores
		int numeros [] = new int[5];
		
		numeros[0] = 3;
		numeros[1] = -56;
		numeros[2] = (int) 3.45; //casteo == cambiar a otro tipo de valor
		numeros[3] = Integer.parseInt("2"); // parseo == cambiar la clase del valor
		
		for(int numero : numeros) {
			System.out.println("Valores del arreglo números: " + numero);
		}
		//Arreglos de objetos
			
		Persona persona1 = new Persona("Pancho",30);
		Persona persona2 = new Persona("Paty",58);
			
		Persona[] arrPersonas = new Persona [3];
		
		arrPersonas[0] = persona1;
		arrPersonas[1] = persona2;
		arrPersonas[2] = new Persona("Luis",18);
		
		System.out.println(arrPersonas[0].nombre);
		System.out.println(arrPersonas[1].nombre);
		System.out.println(arrPersonas[2].nombre);
		
		
		
		for(Persona persona : arrPersonas) {
			System.out.println("Nombre: " + persona.nombre + "edad: " + persona.edad);
		
		}
		
		String[] arrString = {"Manzana" , "Pera", "12", "Hola"};
		System.out.println(Arrays.toString(arrString));
	
		
		
	}

}

