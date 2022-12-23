let num1 = parseInt (prompt("Escribe el primer número"))
let num2 = parseInt (prompt("Escribe el segundo número"))
let num3 = parseInt (prompt("Escribe el tercer número"))

if (num1>=num2 && num1>=num3)
{
        if (num2 >= num3)
        {
            document.write (num1 + ", " + num2 + ", " + num3);
        }
        else
        {
            document.write (num1 + ", " + num3 + ", " + num2);
        }
}
else if (num2 >= num1 &&  num2 >= num3)
{
        if (num1 >= num3)
        {
            document.write (num2 + ", " + num1 + ", " + num3);
        }
        else
        {
            document.write (num2 + ", " + num3 + ", " + num1);
        }
}
else if (num3 >= num1 && num3 >= num2)
{
        if (num1 >= num2)
        {
            document.write (num3 + ", " + num1 + ", " + num2);
        }
        else
        {
            document.write (num3 + ", " + num2 + ", " + num1);
        }
}       