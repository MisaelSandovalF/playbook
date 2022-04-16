console.log("Objetos")

//Crear un objeto
const objetoVacio = {} // este es un objeto vacio
console.log(objetoVacio);

//crear objeto con propiedades
const objetoConPropiedades = {
  nombredelObjeto: "misael", //propiedades del objeto
  apellidodelObjeto: "juan", //propiedades del objeto
}
console.log(objetoConPropiedades);
//crear objeto con propiedades diferentes
const objetoCompuesto = {
  //propiedades del objeto
  name: "Tulio",
  age: 2,
  nicknames: [
    "Tulipan",
    "Tulancingo",
    "Tulish"
  ],
  address: {
    zip_code: "10000",
    street: "Dr. Vertiz 11 Benito Juarez",
    city: "CDMX"
  }
}
console.log(objetoCompuesto) //llamada del objeto entero
console.log(objetoCompuesto.name) //lamada de un componente del objeto
console.log(objetoCompuesto["nicknames"]) //llamada del objeto hijo 
//objeto con metodos que recibe parametros
const myPet = { //objeto
  name: "Misael", // propiedad del objeto
  sayHelloToMyPet: function(tuMascota){ // ffuncion que recibe un parametro
    console.log(`${this.name} dice hola a ${tuMascota}`) //concatenacion de valores
  }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Lili") // envio de parametro al metodo

