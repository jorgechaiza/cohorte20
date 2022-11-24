package oop;

import java.util.Scanner;

public class OperacionesAritmeticas {

	Scanner s = new Scanner(System.in);
	
	double add() {
		System.out.print("introduzca un número a sumar ");
		double valor0 = s.nextDouble();
		System.out.print("introduzca un número a sumar ");
		double valor1 = s.nextDouble();
		return valor0 + valor1;
	}
	
	double sus() {
		System.out.print("introduzca un número a restar ");
		double valor0 = s.nextDouble();
		System.out.print("introduzca un número a restar ");
		double valor1 = s.nextDouble();
		return valor0 - valor1;
	}
	double multi() {
		System.out.print("introduzca un número a multiplicar ");
		double valor0 = s.nextDouble();
		System.out.print("introduzca un número a multiplicar ");
		double valor1 = s.nextDouble();
		return valor0 * valor1;
	}
	
	double division() {
		System.out.print("introduzca un número a dividir ");
		double valor0 = s.nextDouble();
		System.out.print("introduzca un número a dividir ");
		double valor1 = s.nextDouble();
		if (valor1 != 0) {
			return valor0 / valor1;
		}else {
			System.out.println("no se puede dividir por cero");
		}
		return 0;
		
	}
	
	double modulo() {
		System.out.print("introduzca un número del modulo ");
		double valor0 = s.nextDouble();
		System.out.print("introduzca un número del modulo ");
		double valor1 = s.nextDouble();
		return valor0 % valor1;
	}
}
