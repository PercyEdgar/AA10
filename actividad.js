class Alumno {
    constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.nota1 = nota1;
      this.nota2 = nota2;
      this.nota3 = nota3;
      this.nota4 = nota4;
    }
  
    promedio() {
      return this.nota1 * 0.15 + this.nota2 * 0.2 + this.nota3 * 0.25 + this.nota4 * 0.4;
    }
  
    condicion() {
      return this.promedio() >= 12 ? "Aprobado" : "Desaprobado";
    }
  
    obsequio() {
      return this.promedio() > 17 ? "Mochila" : "Nada";
    }
  }
const codigo = prompt("Digita el codigo")
const nombre = prompt ("Ingresa nombre")
const nota1 = prompt("Nota 01")
const nota2 = prompt("Nota 02")
const nota3 = prompt("Nota 03")
const nota4 = prompt("Nota 04")

const alumno = new Alumno(codigo,nombre,nota1, nota2,nota3,nota4);
console.log(alumno)
// Para calcular el promedio del alumno
const promedio = alumno.promedio();
console.log(`El promedio del alumno ${alumno.nombre} es: ${promedio}`);

// Determinar la condición del alumno
const condicion = alumno.condicion();
console.log(`La condición del alumno ${alumno.nombre} es: ${condicion}`);

// Obtener un obsequio para el alumno
const obsequio = alumno.obsequio();
console.log(`El alumno ${alumno.nombre} ha recibido de obsequio una : ${obsequio}`);



