import { preguntas } from "./preguntas.js";
import promptSync from "prompt-sync";

//hay un problema con las respuestas por la posicion del arrya 

const prompt = promptSync();
function quiz(){
    let contadorDePuntaje = 0;
    let usuario;
    console.log(`El Quiz, es un multiple choise, para marcar sus respuestas debera ingresar un numero del 0 al 3
        (si desea finalizar el quizz agregue el numero 100)`)
    for (let i = 0; i < preguntas.length;i ++){
        
        console.log(preguntas[i].pregunta);
        console.log(`las posibles respuestas:
            0.${preguntas[i].respuestas[0]}.
            1.${preguntas[i].respuestas[1]}. 
            2.${preguntas[i].respuestas[2]}.
            3.${preguntas[i].respuestas[3]}`);
            usuario = Number (prompt (`Ingrese su respuesta, si es correcta se sumaran 5 puntos: `));
            if (usuario === 100 ){
                return console.log(`Enhorra buena ha finalizado su Quiz, su total de puntos es ${contadorDePuntaje}}`);
            }
            if (usuario === preguntas[i].correcta){
                contadorDePuntaje += 5;
                console.log(`Su respuesta ${preguntas[i].respuestas[preguntas[i].correcta]} es correcta, los puntos llevados son: ${contadorDePuntaje}`);
                
            }else{
                console.log(`Su respuesta es incorrecta, la respuesta correcta era: ${preguntas[i].respuestas[preguntas[i].correcta]}`)
            }
    }
    console.log(`Enhorra buena ha terminado su Quiz, su total de puntos es ${contadorDePuntaje}`);
}
quiz();