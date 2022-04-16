//objeto con metodos que recibe parametros
const myPet = { //objeto
    name: "Misael", // propiedad del objeto
    sayHelloToMyPet: function(tuMascota){ // ffuncion que recibe un parametro
      console.log(`${this.name} dice hola a ${tuMascota}`) //concatenacion de valores
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Lili") // envio de parametro al metodo