/**
 * Pago.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	matricuAlumno: {
  		type: 'integer'
  	},
  	description: {
  		type: 'String'
  	},
  	cantidad: {
  		type: 'integer'
  	},
  	fechaPago: {
  		type: 'Date '
  	},
  	modoPago: {
  		type: 'String'
  	},
  	estadoPago: {
  		type: 'String'
  	}
  }
};

