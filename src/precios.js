/**
 * Suma el IVA a un precio.
 * @param {number} precio - Precio sin IVA.
 * @returns {number} Precio con IVA.
 */
function conIva(precio) {
  return precio + (precio * 21) / 100;
}

/**
 * Calcula el precio final aplicando IVA.
 * @param {number} precio - Precio base.
 * @returns {number} Precio final.
 */
function precioFinal(precio) {
  return conIva(precio);
}

/**
 * Suma un IVA reducido (10%) a un precio.
 * @param {number} precio - Precio sin IVA.
 * @returns {number} Precio con IVA reducido.
 */
function conIvaReducido(precio) {
  return precio + (precio * 10) / 100;
}

module.exports = { conIva, precioFinal, conIvaReducido };