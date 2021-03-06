import { Menu } from "../menu/menu.js";
import { menuStar } from "../menu/menuStart/menuStart.js";
import { inicio } from "../menu/Inicio/inicio.js";
import {guerrero, paladin, mago, berserker} from "./RAZAS.js";



let nombre, validate, personaje;

export const selecClasePj = new Menu('Escoge una clase:',['Guerrero','Paladin','Mago','Berserker', 'volver'])
export const confirmSeleccion = new Menu('¿Estas seguro de escoger esta clase?',['Si','No, Volver']);
export {personaje}


export function nombrePj(){    
    do{
        console.log('%c¿Que nombre deseas para tu personaje?','color:yellow')
        nombre = prompt('')
        console.log('%c¿Estas seguro?\n1. Si\n2. No','color:red')
        validate = parseInt(prompt(""))        
        if(validate == 1){ 
            clasePj()    
        break;
        }else if(validate == 2){
            nombrePj()
        }else{console.log("Selecciona una opcion valida")
        }
        }while(true)
}

function clasePj(){
    selecClasePj.mostrarOpciones()
    switch(selecClasePj.getUserInput(selecClasePj)){
        case 0:
            guerrero.descripcion();
            guerrero.nombre = nombre;
            personaje = guerrero;
            confirm();    
            break;
        case 1:
            paladin.descripcion();
            paladin.nombre = nombre;
            personaje = paladin;
            confirm();
            break;
        case 2:
            mago.descripcion();
            mago.nombre = nombre;
            personaje = mago;
            confirm();
            break;
        case 3:
            berserker.descripcion();
            berserker.nombre = nombre;
            personaje = berserker;
            confirm();
            break;
        case 4:
            inicio()
    }
}

function confirm(){
    confirmSeleccion.mostrarOpciones();
    switch(confirmSeleccion.getUserInput(confirmSeleccion)){
            case 0:
                menuStar();
            break
        case 1:
            clasePj();            
    }
}

