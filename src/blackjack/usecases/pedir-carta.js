


/**
 * 
 * @param {Array<String>} baraja Ejemplo: [2H, 4S, 9C, jH... etc];
 * @returns {String}             Retorna una Carta del Deck
 */

export const pedirCarta = (baraja) => {
    if ( !baraja || baraja.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const card = baraja.pop();
    return card;
}