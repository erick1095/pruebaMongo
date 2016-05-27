/**
<<<<<<< HEAD
 * Alumno.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


module.exports = {

  attributes: {

  	nombre: {
  		type: 'String'
  	},
  	apellidoPaterno: {
  		type: 'String'
  	},
  	apellidoMaterno: {
  		type: 'String'
  	},
  	fechaNacimiento: {
  		type: 'String'
  	},
  	numeroHijos: {
  		type: 'integer'
  	},
  	sexo: {
  		type: 'String'
  	}, 
  	estadoCivil: {
  		type: 'String'
  	},
  	padreTutor: {
  		type: 'String'
  	},
  	rfc: {
  		type: 'String'
  	},
  	curp: {
  		type: 'String'
  	},
  	etnia: {
  		type: 'String'
  	},
  	empresa: {
  		type: 'String'
  	},
  	numDependientes: {
  		type: 'integer'
  	},
  	Domicilio: {
  		type: 'String'
  	},
    email: {
      type: 'email'
    },
    pagos: {
      collection: 'Pago'
    }

  }
};

