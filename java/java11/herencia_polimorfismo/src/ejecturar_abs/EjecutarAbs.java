package ejecturar_abs;

import polimorfismo.Circulo;
import polimorfismo.Cuadrado;
import polimorfismo.FigurasGeometricas;
import polimorfismo.Rectangulo;
import polimorfismo.Triangulo;

public class EjecutarAbs {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		FigurasGeometricas tri = new Triangulo();
		FigurasGeometricas cua = new Cuadrado();
		FigurasGeometricas cir = new Circulo();
		FigurasGeometricas rec = new Rectangulo();
		
		tri.pedirDatos();
		tri.area();
		tri.visualizar();
		
		cua.pedirDatos();
		cua.area();
		cua.visualizar();
		
		cir.pedirDatos();
		cir.area();
		cir.visualizar();
		
		rec.pedirDatos();
		rec.area();
		rec.visualizar();
		
	}

}
