Object.defineProperty(exports,"__esModule",{value:true});exports.validPhoneNumber=void 0;var validPhoneNumber=function validPhoneNumber(number){try{var digitsOnly=number.replace(/\D/g,'');if(digitsOnly.length===10){return true;}return false;}catch(e){return false;}};exports.validPhoneNumber=validPhoneNumber;