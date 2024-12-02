/*const btnOnOff = document.querySelector("#");
const brnCero = document.querySelector("#");
const btnAC = document.querySelector("#");
const btnSuma = document.querySelector("#");
const btnResta = document.querySelector("#");
const btnMult = document.querySelector("#");
const btnDiv = document.querySelector("#");
const btnIgual = document.querySelector("#");
const num0 = document.querySelector("#");
const num1 = document.querySelector("#");
const num2 = document.querySelector("#");
const num3 = document.querySelector("#");
const num4 = document.querySelector("#");
const num5 = document.querySelector("#");
const num6 = document.querySelector("#");
const num7 = document.querySelector("#");
const num8 = document.querySelector("#");
const num9 = document.querySelector("#");

 if (operacion == "+") {
  let res = sumar(primerNum, segundoNum);
  subTotal = res;
  segundoNum = [];
  visor.textContent = res;
} else if (operacion == "-") {
  let res = restar(primerNum, segundoNum);
  subTotal = res;
  visor.textContent = res;
  segundoNum = [];
} else if (operacion == "*") {
  let res = multiplicar(primerNum, segundoNum);
  subTotal = res;
  visor.textContent = res;
  segundoNum = [];
} else if (operacion == "/") {
  let res = dividir(primerNum, segundoNum);
  subTotal = res;
  visor.textContent = res;
  segundoNum = [];
} 

 if (operacion == "+") {
  let res = sumar(primerNum, segundoNum);
  subTotal = res;
  visor.textContent = subTotal;
} else if (operacion == "-") {
  let res = restar(primerNum, segundoNum);
  subTotal = res;
  visor.textContent = subTotal;
} else if (operacion == "*") {
  let res = multiplicar(primerNum, segundoNum);
  subTotal = res;
  visor.textContent = subTotal;
} else if (operacion == "/") {
  let res = dividir(primerNum, segundoNum);
  subTotal = res;
  visor.textContent = subTotal;
} */

//FUNCIONES
function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}
function setearValores() {
  subTotal = 0;
  primerNum = [];
  segundoNum = [];
  operacion = undefined;
  historia = "";
}
function agregarAHistoria(char) {
  historia = historia.concat(`${char}`);
  return (visor.textContent = historia);
}

//VALORES INICIALES
let subTotal = 0;
let primerNum = [];
let segundoNum = [];
let operacion = undefined;
let historia = "";

//ACCEDE A LOS BOTONES DE LOS NUMEROS Y LAS OPERACIONES
const btnNum = document.querySelectorAll(".btnNum");
const btnOp = document.querySelectorAll(".btnOp");
const visor = document.querySelector("#visor");
const btnPrimerFila = document.querySelectorAll(".btnPrimerFila");

//EJECUTA UN PUSH EN EL PRIMER NUMERO
btnNum.forEach((e) => {
  e.addEventListener("click", () => {
    agregarAHistoria(e.textContent);

    if (operacion == undefined) {
      primerNum.push(e.textContent);
    } else {
      segundoNum.push(e.textContent);
    }
  });
});

//JUNTA LOS ELEMENTOS DEL PRIMER NUMERO Y LOS TRANSFORMA EN NUMBER
btnOp.forEach((e) => {
  e.addEventListener("click", () => {
    agregarAHistoria(e.textContent);

    if (e.textContent != "=") {
      if (operacion == undefined) {
        primerNum = parseInt(primerNum.join(""));
        operacion = e.textContent;
      } else {
        segundoNum = parseInt(segundoNum.join(""));

        switch (operacion) {
          case "+":
            subTotal = sumar(primerNum, segundoNum);
            segundoNum = [];
            break;
          case "-":
            subTotal = restar(primerNum, segundoNum);
            segundoNum = [];
            break;
          case "*":
            subTotal = multiplicar(primerNum, segundoNum);
            segundoNum = [];
            break;
          case "/":
            subTotal = dividir(primerNum, segundoNum);
            segundoNum = [];
            break;
        }

        primerNum = subTotal;
        operacion = e.textContent;
      }
    } else {
      segundoNum = parseInt(segundoNum.join(""));

      switch (operacion) {
        case "+":
          subTotal = sumar(primerNum, segundoNum);
          segundoNum = [];
          break;
        case "-":
          subTotal = restar(primerNum, segundoNum);
          segundoNum = [];
          break;
        case "*":
          subTotal = multiplicar(primerNum, segundoNum);
          segundoNum = [];
          break;
        case "/":
          subTotal = dividir(primerNum, segundoNum);
          segundoNum = [];
          break;
      }
      agregarAHistoria(subTotal);
    }
  });
});

btnPrimerFila.forEach((e) =>
  e.addEventListener("click", () => {
    if (e.textContent == "AC") {
      visor.textContent = "Calcular";
      setearValores();
    } else if (e.textContent == "Del") {
      // visor.textContent = ;
    } else {
      visor.textContent = " ";
    }
  })
);
