package oop;

import java.util.Scanner;

public class Tablas {
	Scanner scanner = new Scanner(System.in);
	void tabla () {
		int i = 1;
		System.out.println("Introduzca el numero de tabla de multiplicar");
		int nTabla = scanner.nextInt();
		
		while (i<= 10) {
			System.out.println(nTabla + " * " + i + " = " + (nTabla * i));
			i++;
		}
	}
}
