

/**
 * 
 * @param {String} card Ejemplo: '4H', '3S', '7C'.... etc
 * @returns {Number} Retorna el valor de la carta tipo numerico
 */
export const valorCarta = ( card ) => {
const valor = card.substring(0, card.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}