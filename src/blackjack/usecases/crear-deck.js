import _ from 'underscore';

/**
 * 
 * @param {Array<String>} tiposDeCartas   Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @param {Array<String>} baraja          Ejemplo: [ ];
 * @returns {Array<String>}               Retorna un nuevo deck
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
    let baraja = [];
    if(!tiposDeCartas || tiposDeCartas.length === 0)
        throw new Error ('tiposDeCartas es obligatorio como un arreglo de string');

    if(!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error ('tiposEspeciales es obligatorio como un arreglo de string');

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            baraja.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            baraja.push( esp + tipo);
        }
    }
    // console.log( deck );
    baraja = _.shuffle( baraja );
    return baraja;
}

//export default crearDeck;