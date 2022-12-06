package liveCoding3;

import java.util.Scanner;

public class MCD {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//pedir los datos y asignarlos a variables
		
		Scanner sc = new Scanner (System.in);
		
		System.out.println("introduce el primer número: ");
		int num1 = sc.nextInt();
		
		
		System.out.println("introduce el segundo número: ");
		
		int num2 = sc.nextInt();
		
		
		int res = MCD(num1, num2);
		
		System.out.println("El MCD es " + res);
		
	}
		
		
		
		
		//Funcion que nos permita calcular el MCD a partir de los datos guardados
		public static int MCD(int num1, int num2 ) {
		
			int a = Math.max(num1, num2);
			int b = Math.min(num1, num2);
			
			int resultado = 0;
			
			
			//proceso
			do {
				
			
			resultado = b; //resultado toma el valor del numero menor
			b = a % b; // ahora, el valor de b será el residuo de dividir el numero mayor entre el numero menor
			a = resultado; // cuando finalice el procesos ese valor se lo pongo a la variable 2
			
			
			//mientras b (12028) sea diferente de 0
			} while (b != 0);
			
			return resultado;
			
				
		
	}
	
		
		
}
