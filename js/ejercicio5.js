class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }
  mostrarGeneracion() {
    if (this.nacimiento >= 1994 && this.nacimiento <= 2012) {
      document.write(`<p>Pertenece a la generación Z</p>`);
    } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
      document.write(`<p>Pertenece a la generación Y (millennials)</p>`);
    } else if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
      document.write(`<p>Pertenece a la generación X</p>`);
    } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
      document.write(`<p>Pertenece a la generación "Baby Boom"</p>`);
    } else if (this.nacimiento >= 1930 && this.nacimiento <= 1948) {
      document.write(`<p>Pertenece a la generación "Silent Generation"</p>`);
    } else {
      document.write(
        `<p>No pertenece a ninguna de las generaciones especificadas</p>`
      );
    }
  }
  esMayorDeEdad(){
    if(this.edad>=18){
        document.write(`<p>Es mayor de edad</p>`);
    }else{
        document.write(`<p>No es mayor de edad</p>`);
    }
  }
  mostrarDatos(){
    document.write(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso} kg</li>
        <li>Altura: ${this.altura} m</li>
        <li>Año de Nacimiento: ${this.nacimiento}</li>
        </ul>`);
  }
  generarDNI(){
    this.dni = Math.floor(Math.random() * 90000000) + 10000000;
  }
}

const persona1 = new Persona(
    'Felicitas',
    20,
    '',
    'M',
    53,
    1.64,
    2003
);
const persona2 = new Persona(
    'Ignacio',
    22,
    '',
    'H',
    72,
    1.78,
    2002
);
const persona3 = new Persona(
    'Veronica',
    49,
    '',
    'M',
    52,
    1.62,
    1975
);


persona1.generarDNI();
persona2.generarDNI();
persona3.generarDNI();

persona1.mostrarDatos();
persona2.mostrarDatos();
persona3.mostrarDatos();

persona1.mostrarGeneracion();
persona2.mostrarGeneracion();
persona3.mostrarGeneracion();

persona1.esMayorDeEdad();
persona2.esMayorDeEdad();
persona3.esMayorDeEdad();