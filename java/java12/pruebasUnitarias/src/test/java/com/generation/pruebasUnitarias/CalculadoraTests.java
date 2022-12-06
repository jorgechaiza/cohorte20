package com.generation.pruebasUnitarias;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Clase de prueba de calculadora")
public class CalculadoraTests {
	
	Calculadora calc = new Calculadora(true);
	
	@Test
	@DisplayName("Método de prueba si la suma es correcta")
	void pruebaSuma() {
//		Calculadora calc = new Calculadora(true);
		
		assertEquals(4, calc.suma(2,  2), "deberían de ser 4");
		
		
	}
	
	@Test
	@DisplayName("Probar si la calculadora está encendida")
	void pruebaIsOn() {
//		Calculadora calc = new Calculadora(true);
		
		assertTrue(calc.isOn());
	}
	
	@Test
	@DisplayName("prueba de división")
	void pruebaDiv() {
		assertEquals(2.5, calc.division(5, 2));
	}
}
