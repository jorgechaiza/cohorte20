package logicaProgramacion8;

import java.util.Scanner;

public class LogicaProgramacion8 {

	public static void main(String[] args) {
		

	        Scanner s = new Scanner(System.in);
	        int i;
	        int[] numeros = new int[10];
	       

	        //lectura de datos y llenar el array
	        System.out.println("Lectura de los elementos del array: ");
	        for (i = 0; i < 10; i++) {
	            System.out.print("numeros[" + i + "]= ");
	            numeros[i] = s.nextInt();
	        }
	        
	        
	        }
}

