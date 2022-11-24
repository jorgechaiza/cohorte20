package oop;

import java.util.Scanner;

public class Menu {
	Scanner s = new Scanner(System.in);
	int menuOp() {
		int numero=0;
		System.out.println("\tt-------Menu-------");
		System.out.println(" \t\t1: Tablas de Multiplicar ");
		System.out.println(" \t\t2: Operaciones Aritmeticas ");
		System.out.println(" \t\t3: Multiplicacion ");
		System.out.println(" \t\t4: Division ");
		System.out.println(" \t\t5: residuo ");
		System.out.println(" \t\t6: Booleans ");
		System.out.println(" \t\t7: Salir ");
		
		System.out.print("introduca la opcion: ");
		return numero = s.nextInt();
	}
	
	
	
}
