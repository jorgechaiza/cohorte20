package liveCoding3;

import java.util.Scanner;

public class Principal {
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner s = new Scanner(System.in);
		
		int mangos;
		int naranjas;
		
				
		System.out.println("Ingrese el número de mangos: ");
		mangos = s.nextInt();
		
		System.out.println("Ingrese el número de naranjas: ");
		naranjas = s.nextInt();
		
		//Instancia
		MangosNaranjas mangosNaranjas = new MangosNaranjas(mangos, naranjas);
		
		mangosNaranjas.imprimir();
		
	}

}
