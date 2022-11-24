package operadores;

import java.util.Scanner;

public class Ciclos {
	
	void saludo() {
		System.out.println("Hola a las funciones en java");
	}
	
	int operacion () {
		int f = (int) Math.pow(3, 2);
		
		return f;
	
	}
	
	static double nuevo () {
		double h =Math.pow(5, 3);
		return h;
	}

	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Ciclos objC = new Ciclos();
		objC.saludo();
		System.out.println("uso de pow()" + objC.operacion() );
		objC.operacion();
		
		
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("\tIntroduzduzca el valor de la tabla de multiplicar con el ciclo for ---> ");
		int tabla = scanner.nextInt();
		for (int i = 0; i <= 10; i++) {
			System.out.println(tabla + " * " + i + " = " +(tabla * i));
		}
		
		int j = 1;
		System.out.println("\tIntroduzduzca el valor de la tabla de multiplicar con el ciclo while ---> ");
		int tablaw = scanner.nextInt();
		while (j <= 10) {
			System.out.println(tablaw + " * " + j + " = " +(tablaw * j));
			j++;
		}
	}

}
