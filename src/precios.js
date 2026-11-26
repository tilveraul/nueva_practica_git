/**
 * Suma un IVA reducido (10%) a un precio.
 * @param {number} precio - Precio sin IVA.
 * @returns {number} Precio con IVA reducido.
 */
function conIvaReducido(precio) {
  return precio + (precio * 10) / 100;
}

module.exports = { conIva, precioFinal, conIvaReducido };