// Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
let nombre = "";
let edad = "";
let sexo = " ";
let DNI = "";
let clase = "";
let altura = "";
let peso = "";

const formulario = document.querySelector(".formulario");
const btnMostrar = document.getElementById("btnMostrar");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnGeneracion = document.getElementById("btnGeneracion");

//Eventos de los botones donde se ejecuta cada funcion.

btnMostrar.addEventListener("click", mostrarDatos);
btnMayorEdad.addEventListener("click", mayorDeEdad);
btnGeneracion.addEventListener("click", mostrarGeneracion);
//Eventos del Submit
formulario.addEventListener("submit", obtenerDatosForm);

function mayorDeEdad() {
  if (edad != "") {
    if (edad >= 18) {
      Swal.fire({
        title: nombre,
        html: "Es Mayor de edad",
      });
    } else {
      Swal.fire({
        title: nombre,
        html: "Es menor de edad",
      });
    }
  } else {
    alert(
      `Informacion incompleta, por favor llene los campos del formulario y presione "Enviar" `
    );
  }
}
// se agrega alert mediante librerias de Sweetalert

function mostrarDatos() {
  if (edad != "") {
    Swal.fire({
      title: "Datos de la Persona",
      html: `<ul class="text-secondary list-unstyled text-start">
        <li>El nombre es <b> ${nombre} </b></li>
        <li>Su edad es <b> ${edad}</b></li>
        <li>Sexo:<b> ${sexo}</b></li>
        <li>Su DNI es<b> ${DNI}</b></li>
        <li>Nació en el año:<b> ${clase}</b></li>
        <li>Su altura es: <b>${altura}</b></li>  
        <li>Su peso es:<b> ${peso}</b></li>  
    </ul>`,
    });
  } else {
    alert(
      `Informacion incompleta, por favor llene los campos del formulario y presione "Enviar" `
    );
  }
}

function mostrarGeneracion() {
  if (nombre != "" && edad != "") {
    parseInt(clase);
    if (clase >= 1930 && clase < 1949) {
      Swal.fire({
        title: nombre,
        html: ` Pertenece a la <b>Generacion Silenciosa </b> <br>`,
      });
    } else if (clase >= 1949 && clase < 1969) {
      Swal.fire({
        title: nombre,
        html: ` Pertenece a la <b>Generación Baby Boom </b> <br>`,
      });
    } else if (clase >= 1969 && clase < 1980) {
      Swal.fire({
        title: nombre,
        html: ` Pertenece a la <b>Generación X </b> <br>`,
      });
    } else if (clase >= 1981 && clase < 1994) {
      Swal.fire({
        title: nombre,
        html: ` Pertenece a la <b>Generación Y</b> <br>`,
      });
    } else if (clase >= 1994 && clase < 2010) {
      Swal.fire({
        title: nombre,
        html: ` Pertenece a la <b>Generación Z </b> <br>`,
      });
    } else {
      Swal.fire({
        title: nombre,
        html: ` Pertenece a la Nueva Generacion </b> <br>`,
      });
    }
  } else {
    alert(
      `Informacion incompleta, por favor llene los campos del formulario y presione "Enviar" `
    );
  }
}

function obtenerDatosForm(e) {
  e.preventDefault();

  nombre = document.getElementById("nombre").value;
  console.log(nombre);
  edad = document.getElementById("edad").value;
  DNI = document.getElementById("DNI").value;
  clase = document.getElementById("anioNac").value;
  altura = document.getElementById("altura").value;
  peso = document.getElementById("peso").value;
  sexo = document.querySelector("input[name='sexo']:checked").value;

  console.log(nombre);
  console.log(edad);
}
