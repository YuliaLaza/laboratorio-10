
//EJERCICIOS ENTREGABLES


//Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una
//propiedad llamada id (debe devolver booleano true / false ).


// const car = {
//     marca: "Seat",
//     modelo: "Leon",
//     color: "rojo",
//     id: "ffff",
//     }
    
//     const hasId = ({id}) => id ? true: false;
//     console.log(hasId(car));



   // Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.

    // const fruits = ["apple"," pear", "cherry"];

    // const head = ([first]) => first;
    // console.log(head(fruits));


    //Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los
//elementos menos el primero.

// const summer = ["june", "july", "august"]; 

// const tail = ([first, ...restImonth]) => restImonth;
// console.log(tail(summer));

//Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el
//primer elemento ha sido colocado en la última posición.


// const animals = ["dog", "cat", "cow"];

// const swapFirstToLast = ([first, ...restAnimals]) => restAnimals + "," + first;

// console.log(swapFirstToLast(animals));

//Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto
//la propiedad id si la hubiera.

// const car = {
// id: 123,
// color: "red",
// year: 2000,
// };



// const excludeId = ({id, ...restItems}) => restItems;
 
// console.log(excludeId(car));


// Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array
// filtrado con aquellas palabras que empiecen por a.


// const words = ["apellido", "nombre", "fecha nacimiento"];


// const wordsStartingWithA = words =>  words.filter(a => a[0] === "a");
// console.log(wordsStartingWithA(words));


//Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la
//concatenación de todos, separados por | .

// const concat = (...myStrings) => {
//     let stringsList = "";
//     for(let str of myStrings){
//     stringsList +=  str + " " + "|" + " ";
   
// } 
// console.log(stringsList)
// };

// concat("lunes", "martes", "miercoles");




//Implementa una función llamada multArray que admita un array de números ( arr ) y otro parámetro que sea un número
//( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.



// arr = [1, 2, 3];

// const multArray = (arr, x) => arr.map(i => i * x);
// console.log(multArray(arr, 8));


// Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el
// producto de todos ellos.


// calcMult = (...numbers) => numbers.reduce((sumNumbers, num) => sumNumbers + num, 0);

// console.log(calcMult(1, 2, 3));




//Ejercicios Extra



// Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido
// intercambiado por el segundo.

// const numbers = [1, 2, 3, 4];
// const swapFirstSecond = ([first, second,...arr]) =>[[first, second] = [second, first] + " " + arr]; 

//Aqui he hecho algo "raro" creo, porque esto [first, second] = [second, first] + " " + arr me devolvia un string y le puse otros [ ],
// para que me devuelva un array, no se si eso est'a bien hecho.

//console.log(swapFirstSecond(numbers));


//Implementa una función longest tal que admita multiples strings como argumento de entrada así como un carácter
//cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.


//NO ESTA HECHO
// const longest = (caracter, ...strings) => strings.every(caracter => caracter === strings[0] ? 1 : 0 );

//     console.log(longest("a", "alfabeto", "anombre", "acasa"))


 
    // Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva
    // cuantas veces aparece dicho carácter en el string.


    // const searchInStringV1 = (x, str) =>
    //    Array.from(str).reduce((acc, letter) => {
    //     if(x === letter) acc++;
    // return acc;
    // }, "0");

    //    console.log(searchInStringV1("s", "casa"));

    
    // TIP: No utilices bucles.
    // TIP: Convierte el string a un array mediante Array.from() .

    


    // Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2 , encontrando otra alternativa sin usar
    // reduce .
    // TIP: No utilices bucles.
    // TIP: Convierte el string a un array mediante Array.from() .
// NO ESTA HECHO
//     const searchInStringV2 = (x, str) =>
//    Array.from(str)
  
    
    
//     console.log(searchInStringV2("s", "casa"));

    
    // Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas
    // alfabéticamente.
    // TIP: No utilices bucles. No modifiques el string original de entrada.
    // TIP: Convierte el string a un array mediante Array.from() .
  
// const sortCharacters = (str) => 
// Array.from(str)
// .sort();
// console.log(sortCharacters("domingo"));

    // Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras
    // concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.
    // TIP: No utilices bucles.

// const shout = (...words) => words.join("!").toUpperCase();
// console.log(shout("hoy", "es", "domingo"));



    // Lista de la compra
    // Dada la siguiente lista de la compra:


    // const shoppingCart = [
    // { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    // { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    // { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    // { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    // { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    // { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    // { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
    // ];

    //A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.

    // const adIva = (IVA, items) => items.map(item => ({...item, IVA}));
    // console.log(adIva(0.21, shoppingCart));


// B. Ordena la lista de más a menos unidades.

    // const sortByUnits = items => items.sort((a, b) => a.units - b.units );
    // console.log(sortByUnits(shoppingCart));

       // C. Obtén el subtotal gastado en droguería.

//        const totalDrogueria = items => 
//        items.reduce((totalPriceDrogueria, item) => {
//         if(item.category === "Droguería") totalPriceDrogueria += item.price;
//         return totalPriceDrogueria
//        }, 0);

// console.log(totalDrogueria(shoppingCart));
       
// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.

// const sortedShoppingCart = (items) => items
// .sort((a, b) => a.category > b.category ? 1: -1)
// .map(item => item.product + "->" + " " + (item.price * item.units) + " Euros");

// console.log(sortedShoppingCart(shoppingCart));