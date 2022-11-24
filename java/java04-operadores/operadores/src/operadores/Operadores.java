package operadores;

import java.util.Scanner;

public class Operadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner (System.in);
		int numero = 0;
		do {
		//System.out.println("---> Da un dato: <--- ");
		
		//System.out.println("El dato es : " + dato);
	
//		System.out.println("Introduce el valor: " );
//		int valor = scanner.nextInt();
//		System.out.println("Introduce el valor0: " );
//		int valor0 = scanner.nextInt();
//		
//				
//		int suma = valor + valor0;
//		System.out.println("El resultado es: " + suma);
		
//		int resta = valor - valor0;
//		System.out.println("El resultado es: " + resta);
		
//		int multiplicacion = valor * valor0;
//		System.out.println("El resultado es: " + multiplicacion);
	
//		int division = valor / valor0;
//		System.out.println("El resultado es: " + division);
	
//		int residuo = valor % valor0;
//		System.out.println("El resultado es: " + residuo);
	
//		System.out.println("---------- Dinamico -----------");
		
		
//		if (residuo == 0) {
//			System.out.println("El numero es un par");
//		}else {
//			System.out.println("El numero no es par");
//		}
//		
//		int a = 3;
//		int b = 5;
//		boolean comparar = a <= b;
//		boolean logica = true;
//		if (comparar ||  !(logica)) {
//			System.out.println("Hola si soy verdadero" );
//			System.out.println("comparar: " + comparar);
//		} else {
//			System.out.println(comparar);
//			System.out.println(logica);
//		}
		
		System.out.println("\tt-------Menu-------");
		System.out.println(" \t\t1: Suma ");
		System.out.println(" \t\t2: Resta ");
		System.out.println(" \t\t3: Multiplicacion ");
		System.out.println(" \t\t4: Division ");
		System.out.println(" \t\t5: residuo ");
		System.out.println(" \t\t6: Booleans ");
		System.out.println(" \t\t7: Salir ");
		
		System.out.print("introduca la opcion: ");
		numero = scanner.nextInt();
		
		
		switch (numero) {
		case 1:
			System.out.println("Introduce el valor: " );
			int valor = scanner.nextInt();
			System.out.println("Introduce el valor0: " );
			int valor0 = scanner.nextInt();
			int suma = valor + valor0;
			System.out.println("El resultado es: " + suma);
			break;
		
		case 2:
			System.out.println("Introduce el valor: " );
			int valor1 = scanner.nextInt();
			System.out.println("Introduce el valor0: " );
			int valor2 = scanner.nextInt();
			int resta = valor1 - valor2;
			System.out.println("El resultado es: " + resta);
			break;
			
		case 3:
			System.out.println("Introduce el valor: " );
			int valor3 = scanner.nextInt();
			System.out.println("Introduce el valor0: " );
			int valor4 = scanner.nextInt();
			int multiplicacion = valor3 * valor4;
			System.out.println("El resultado es: " + multiplicacion);
			break;
			
		case 4:
			System.out.println("Introduce el valor: " );
			int valor5 = scanner.nextInt();
			System.out.println("Introduce el valor0: " );
			int valor6 = scanner.nextInt();
			int division = valor5 / valor6;
			System.out.println("El resultado es: " + division);
			break;
			
		case 5:
			System.out.println("Introduce el valor: " );
			int valor7 = scanner.nextInt();
			System.out.println("Introduce el valor0: " );
			int valor8 = scanner.nextInt();
			int residuo = valor7 % valor8;
			System.out.println("El resultado es: " + residuo);
			if (residuo == 0) {
				System.out.println("El numero es un par");
			}else {
				System.out.println("El numero no es par");
			}
			break;
			
		case 6:
			System.out.println("Introduce el valor a: " );
			int a = scanner.nextInt();
			System.out.println("Introduce el valor b: " );
			int b = scanner.nextInt();
			boolean comparar = a <= b;
			boolean logica = true;
			if (comparar ||  !(logica)) {
				System.out.println("Hola si soy verdadero");
				System.out.println("comparar: " + comparar);
			} else {
				System.out.println(comparar);
				System.out.println(logica);
			}
			break;
			
		case 7:
			System.out.println("Byebye");
			default:
				break;
		}
		
				
		}while(numero!=7);
	
	}

}
