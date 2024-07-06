//funcion flecha
const suma=(a,b)=>a+b;
const resta=(a,b)=>a-b;
const multiplicar=(a,b)=>a*b;
const dividir=(a,b)=>a/b;


/*pido al usuario que ingrese una letra, uso el toUpperCase para que al ingresarse una letra mayuscula se tome igual*/
let letra=prompt("Ingrese una letra:\n'a'-para sumar\n'b'-para restar\n'c'-para multiplicar\n'd'-para dividir,\npara salir de la operacion ingrese-'salir'").toUpperCase();
/*le pido al usuario que ingrese dos numeros, uso el parseInt, porque al pedir un dato por prompt este lo toma siempre como un String, para eso uso el parseInt para que lo tome como un numero*/
let num1=parseInt(prompt("Ingrese un numero"));
let num2=parseInt(prompt("Ingrese un segundo numero"));
/*la condicion aca es que el usuario no ingrese la palabra "salir" a menos que el usuario quiera salir del programa */ 
while(letra!=="SALIR"){
    switch(letra){
        case 'A'://empieza a comparar la letra del usuario
           let resultado=suma(num1,num2);// la funcion enta en una variable asi luego la muestro de forma mas sencilla, los numeros que ingresara el usuario entraran en la funcion.
           alert("el resultado de la suma es: "+resultado);
            break;
        case 'B':
           let resultado2=resta(num1,num2);
           alert("el resultado de la resta es: "+resultado2);
            break;
        case 'C':
           let resultado3=multiplicar(num1,num2);
           alert("el resultado de su multiplicacion es "+resultado3);
           break;
        case 'D':
            if(num2!==0){//hice un if para que el usuario al elegir la opcion "D" no pueda ingresar en el "num2" un cero, ya que no se puede dividir por cero(el divisor no puede ser cero).
                let resultado4=dividir(num1,num2);
            alert("el resultado de su divicion es "+resultado4);
            }else{//en caso de que el usuario ingrese un cero saltara el bloque de codigo else.
                alert("no se puede dividir por cero");
            }
            break;
        default:
            alert("el valor ingresado no es correcto")
            break;
    
    }
    letra=prompt("Ingrese una letra:\n'a'-para sumar\n'b'-para restar\n'c'-para multiplicar\n'd'-para dividir,\npara salir de la operacion ingrese-'salir'").toUpperCase();   
}
