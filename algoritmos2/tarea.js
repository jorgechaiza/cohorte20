
let num1 = parseInt (prompt ("Primer número"));
let num2 = parseInt (prompt ("Segundo número"));
let num3 = parseInt (prompt ("Tercer número"));


if (num1>=num2 && num1>=num3)
{
        if (num2 >= num3)
        {
            console.log (num1 + ", " + num2 + ", " + num3);
        }
        else
        {
            console.log (num1 + ", " + num3 + ", " + num2);
        }
}
else if (num2 >= num1 &&  num2 >= num3)
{
        if (num1 >= num3)
        {
             console.log (num2 + ", " + num1 + ", " + num3);
        }
        else
        {
             console.log (num2 + ", " + num3 + ", " + num1);
        }
}
else if (num3 >= num1 && num3 >= num2)
{
        if (num1 >= num2)
        {
            console.log (num3 + ", " + num1 + ", " + num2);
        }
        else
        {
            console.log (num3 + ", " + num2 + ", " + num1);
        }
}       



