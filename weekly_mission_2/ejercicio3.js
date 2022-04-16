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