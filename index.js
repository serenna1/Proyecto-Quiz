import { preguntas } from "./preguntas.js";
import chalk from "chalk";
import promptSync from "prompt-sync";

//hay que mejorarlo, y quiero que haya mas funciones no una sola

const prompt = promptSync();
function quiz() {
  let contadorDePuntaje = 0;
  let usuario;
  console.log(
    chalk.blueBright(`El Quiz, es un multiple choise, para marcar sus respuestas debera ingresar un numero del 0 al 3
        (si desea finalizar el quizz agregue el numero 100)`)
  );
  for (let i = 0; i < preguntas.length; i++) {
    console.log(chalk.blackBright(preguntas[i].pregunta));
    console.log(
      chalk.magenta(`las posibles respuestas:
            0.${preguntas[i].respuestas[0]}.
            1.${preguntas[i].respuestas[1]}. 
            2.${preguntas[i].respuestas[2]}.
            3.${preguntas[i].respuestas[3]}`)
    );
    usuario = Number(
      prompt(
        chalk.blueBright(
          `Ingrese su respuesta, si es correcta se sumaran 5 puntos: `
        )
      )
    );
    if (usuario === 100) {
      return console.log(
        chalk.greenBright.italic(
          `Enhorra buena ha finalizado su Quiz, su total de puntos es ${contadorDePuntaje}`
        )
      );
    }
    if (usuario === preguntas[i].correcta) {
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
    }
  }
  console.log(
    chalk.greenBright(
      `Enhorra buena ha terminado su Quiz, su total de puntos es ${contadorDePuntaje}`
    )
  );
}
quiz();
