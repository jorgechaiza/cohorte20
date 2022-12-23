package logicaProgramacion9;

import java.util.HashMap;
import java.util.Scanner;

public class LogicaProgramacion9 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Scanner para leer la palabra
				Scanner entrada = new Scanner(System.in);
				
				String palabra;
				
				// Mapa que no contiene indice para almacenar las palabras
				HashMap<String, String> dic = new HashMap<>();
			
				// Ingresamos las 20 palabras en el mapa
				dic.put("bicicleta", "bike");
				dic.put("perro", "dog");
				dic.put("celular", "cellphone");
				dic.put("cabello", "hair");
				dic.put("escudo", "shield");
				dic.put("espada", "sword");
				dic.put("araña", "spider");
				dic.put("escorpion", "scorpion");
				dic.put("rata", "rat");
				dic.put("oro", "gold");
				dic.put("plata", "silver");
				dic.put("gallo", "rooster");
				dic.put("zapato", "shoe");
				dic.put("cerdo", "pig");
				dic.put("vaca", "cow");
				dic.put("libro", "book");
				dic.put("mapa", "map");
				dic.put("toro", "bull");
				dic.put("agua", "water");
				dic.put("refresco", "soda");
				
				// Ingresamos una palabra
				System.out.println("Ingresa una palabra, por favor");
				palabra = entrada.nextLine();
				
				// Comprobamos si la palabra esta en el hashmap
				if(dic.containsKey(palabra)) {
					System.out.println(dic.get(palabra));
				} else {
					System.out.println("La palabra no está en el diccionario");
				}
				
			}

		}
