/**
 * 
 * @param {HTMLElement} lienzoCartasPC  Lugar donde se van a dibujar las cartas en el DOM
 * @param {String} card Valor de la carta en texto, Ejemplo: [3H, JD.. etc] 
 */
export const dibujarCarta = (lienzoCartasPC, card)=>{
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ card }.png`; 
    imgCarta.classList.add('carta');
    lienzoCartasPC.append( imgCarta );
};