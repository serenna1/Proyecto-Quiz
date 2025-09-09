import { preguntas } from "./preguntas.js";
import chalk from "chalk";
import promptSync from "prompt-sync";

function reglas() {
  console.log(
    chalk.blueBright(`El Quiz es un multiple choice
                      para marcar sus respuestas debera ingresar un numero del 1 al 4
                          (si desea finalizar el quiz ingrese "fin")`)
  );
}
function mostrarPreguntas(posicion) {
  console.log(chalk.blackBright(preguntas[posicion].pregunta));
}
function mostrarPosiblesRespuestas(posicion) {
  console.log(
    chalk.magenta(`las posibles respuestas:
            1.${preguntas[posicion].respuestas[0]}.
            2.${preguntas[posicion].respuestas[1]}. 
            3.${preguntas[posicion].respuestas[2]}.
            4.${preguntas[posicion].respuestas[3]}`)
  );
}
function ingreseRespuesta() {
  while (true) {
    const entrada = prompt(
      chalk.blueBright(
        `Ingrese su respuesta (1-4), si es correcta se sumaran 5 puntos: `
      )
    );
    if (entrada === "fin") {
      return "fin";
    } else if (["1", "2", "3", "4"].includes(entrada)) {
      //[1,2,3,4].incluides(usuairio) => de vuelve true si usuario tiene alguno de los valores si esta negado devuelve false
      return Number(entrada);
    } else {
      console.log("Valor invalido. Ingrese 1-4 o `fin`");
    }
  }
}
function finalizarJuego(contadorDeError, contadorDePuntaje) {
  console.log(`Enhorabuena ha finalizado su Quiz, su total de puntos es ${contadorDePuntaje}
          La cantidad de respuestas incorrectas: ${contadorDeError}.`);
}
//intentar poner mas funciones dentro de estructuradeljuego
function estructuraDelJuego(contadorDeError, contadorDePuntaje) {
  let usuario;
  for (let i = 0; i < preguntas.length; i++) {
    mostrarPreguntas(i);
    mostrarPosiblesRespuestas(i);

    usuario = ingreseRespuesta();

    if (usuario === "fin") {
      return finalizarJuego(contadorDeError, contadorDePuntaje);
    }

    usuario = Number(usuario);
    if (![1, 2, 3, 4].includes(usuario)) {
      console.log(
        `Ingreso un valor incorrecto.
         recuerde debe ingresar 1,2,3,4 o si desea finalizar ingrese "fin"
         vuelva a intentarlo`
      );
    }
    if (usuario - 1 === preguntas[i].correcta) {
      contadorDePuntaje += 5;
      console.log(
        chalk.green(
          `Su respuesta ${
            preguntas[i].respuestas[preguntas[i].correcta]
          } es correcta, los puntos llevados son: ${contadorDePuntaje}`
        )
      );
    } else {
      console.log(
        chalk.red(
          `Su respuesta es incorrecta, la respuesta correcta era: ${
            preguntas[i].respuestas[preguntas[i].correcta]
          }`
        )
      );
      contadorDeError++;
    }
  }
  console.log(`Enhorra buena ha terminado su Quiz, su total de puntos es ${contadorDePuntaje} 
                La cantidad de respuestas incorrectas: ${contadorDeError}`);
}

const prompt = promptSync();
let contadorDePuntaje = 0;
let contadorDeError = 0;
function quiz() {
  reglas();
  estructuraDelJuego(contadorDeError, contadorDePuntaje);
}
quiz();
