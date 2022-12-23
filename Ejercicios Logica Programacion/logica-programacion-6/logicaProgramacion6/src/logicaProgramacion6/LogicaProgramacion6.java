package logicaProgramacion6;

import java.util.Scanner;

public class LogicaProgramacion6 {

	public static void main(String[] args) {
		
		try (Scanner s = new Scanner(System.in)) {
			String palabra;
			String palabrainvertida="";
			System.out.println("Ingresa una palabra y se mostrara a la inversa: ");
			palabra=s.nextLine();
 
			for (int i = palabra.length()-1; i>=0; i--){
			    palabrainvertida += palabra.charAt(i);
			}
 
			System.out.println("La palabra invertida es: "+ palabrainvertida);
		}
    }
 
}

