import { preguntas } from "./preguntas.js";
import chalk from "chalk";
import promptSync from "prompt-sync";

//hay que mejorarlo, y quiero que haya mas funciones no una sola
/*
-indices 1234
- cuando el usuario ingrese algo que no sea 1234, tire un mensaje sin restar ni sumar puntos 
-cambiar e 100 por el fin (con to.string)
*/
function reglas() {
  console.log(
    chalk.blueBright(`El Quiz es un multiple choice
                      para marcar sus respuestas debera ingresar un numero del 0 al 3
                          (si desea finalizar el quiz ingrese "fin")`)
  );
}

function finalizarJuego(contadorDeError, contadorDePuntaje) {
  console.log(`Enhorabuena ha finalizado su Quiz, su total de puntos es ${contadorDePuntaje}
          La cantidad de respuestas incorrectas: ${contadorDeError}.`);
}

function estructuraDelJuego(contadorDeError, contadorDePuntaje) {
  let usuario;
  for (let i = 0; i < preguntas.length; i++) {
    console.log(chalk.blackBright(preguntas[i].pregunta));
    console.log(
      chalk.magenta(`las posibles respuestas:
            1.${preguntas[i].respuestas[0]}.
            2.${preguntas[i].respuestas[1]}. 
            3.${preguntas[i].respuestas[2]}.
            4.${preguntas[i].respuestas[3]}`)
    );
    usuario = Number(
      prompt(
        chalk.blueBright(
          `Ingrese su respuesta, si es correcta se sumaran 5 puntos: `
        )
      )
    );
    if (usuario === 100) {
      return finalizarJuego(contadorDeError, contadorDePuntaje);
    }
    if (
      usuario !== 1 &&
      usuario !== 2 &&
      usuario !== 3 &&
      usuario !== 4 &&
      usuario !== 100
    ) {
      console.log(
        `Ingreso un valor incorrecto.
        recuerde debe ingresar 1,2,3,4 o si desea finalizar 100
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
function quiz() {
  let contadorDePuntaje = 0;
  let contadorDeError = 0;

  reglas();
  estructuraDelJuego(contadorDeError, contadorDePuntaje);
}
quiz();
