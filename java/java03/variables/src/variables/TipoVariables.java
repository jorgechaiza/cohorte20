package variables;

public class TipoVariables {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// byte, short, int, long
		byte numeroB = 127;
		System.out.println("tamaño de un byte " + Byte.SIZE);
		System.out.println("valor maximo " + Byte.MAX_VALUE);
		System.out.println("valor minimo " + Byte.MIN_VALUE);
		
		System.out.println("------------entero-------------");
		int entero = 5;
		System.out.println(" tamaño de un entero " + Integer.BYTES);
		System.out.println(" tamaño " + Integer.SIZE);
		System.out.println(" valor max " + Integer.MAX_VALUE);
		System.out.println(" valor min " + Integer.MIN_VALUE);
		System.err.println(" el valor de entero " + entero);
		
		System.out.println("------ short --------");
		short variableS = 6;
		System.out.println("el tamaño de un short" + Short.SIZE);
		System.out.println("tamaño bytes short " + Short.BYTES);
		System.out.println("valor max short " + Short.MAX_VALUE);
		System.out.println("valor min short " + Short.MIN_VALUE);
		
		long variableL = 565;
System.out.println("------ long --------");
			
		System.out.println("el tamaño de un long" + Long.SIZE);
		System.out.println("tamaño bytes long " + Long.BYTES);
		System.out.println("valor max long " + Long.MAX_VALUE);
		System.out.println("valor min long " + Long.MIN_VALUE);
		
		var num = 128248461879L;
		System.out.println("Esta es la variable con var " + num);
		
		var sistemNum = 012;
		System.out.println("----> " + sistemNum);
		System.out.println("--------- float, double --------");
		
		
		float comaF = 100.00f;
		System.out.println("--------------float---------");
		System.out.println("el tamaño en bits " + Float.SIZE);
		System.out.println("tamaño bytes " + Float.BYTES);
		System.out.println("valor max " + Float.MAX_VALUE);
		System.out.println("valor min " + Float.MIN_VALUE);
		
		System.out.println("---> float " + comaF);
		
		System.out.println("--------------double---------");
		
		double comaD = 1000.10E23;
		System.out.println("el tamaño en bits " + Double.SIZE);
		System.out.println("tamaño bytes " + Double.BYTES);
		System.out.println("valor max " + Double.MAX_VALUE);
		System.out.println("valor min " + Double.MIN_VALUE);
		System.out.println("---> double " + comaD);
		
		
		System.out.println("----------- booelan -----------");
		boolean estado = true; //false
		System.out.println("---> " + estado);
		System.out.println("---> Boolean false " + Boolean.FALSE);
		System.out.println("---> Boolean true " + Boolean.TRUE);
		
		if (estado) {
			System.out.println("---> soy verdadero ");
		}else {
			System.out.println("---> soy falso ");
		}
		
		
		var edad = 20;
		boolean adulto = edad >= 10;
		//System.out.println("---> : varBoolean " + adulto);
		
		if (edad >= 10) {
			System.out.println("---> : varBool si edad es mayor igual a > " + edad);
		}else {
			System.out.println("---> : barBool si edad es menor a >" + edad);
		}
		System.out.println("---------- char ------------");
		
		char caracter0 = "halo".charAt(0);
		char caracter1 = '\u0C6A';
		System.out.println("---> " + caracter0);
		System.out.println("---> " + caracter1);
		
	}
	
			
}
