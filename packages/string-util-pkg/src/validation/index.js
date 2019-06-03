const {isRequired} = require('./isRequired');
const {isMatch, isEmail, isNumber, isPhoneNumber} = require('./isFormatMatch');

module.exports = {
    isRequired,
    isMatch,
    isEmail,
    isNumber,
    isPhoneNumber
}