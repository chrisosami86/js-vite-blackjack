// turno de la computadora
import { valorCarta } from "./valor-carta";
import { pedirCarta } from "./pedir-carta";
import { dibujarCarta } from "./dibujar-carta"; 

/**
 * 
 * @param {Number} puntosMinimos Son los puntos del jugador 
 * @param {HTMLElement} selectorPuntosHTML Elemento del DOM donde se dibujara los puntos 
 * @param {HTMLElement} cartasPC  Elemento del DOM donde se veran las cartas de la computadora 
 * @param {Array<String>} baraja   Arreglo con todas las cartas, Ejemplo: ['5H','9S','AC'... etc]
 */  

export const turnoComputadora = ( puntosMinimos, selectorPuntosHTML, cartasPC, baraja) => {

    let puntosPC = 0;

    do {
        const carta = pedirCarta(baraja);

        puntosPC = puntosPC + valorCarta( carta );
        selectorPuntosHTML[1].innerText = puntosPC;
        
        // <img class="carta" src="assets/cartas/2C.png">
        dibujarCarta(cartasPC, carta);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosPC < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosPC === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosPC > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}