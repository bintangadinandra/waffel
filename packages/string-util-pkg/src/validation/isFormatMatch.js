const regex = require('../regex');

const isNumber = value => regex.number.test(value)

const isPhoneNumber = value => {
    // Todo: Resolve whether value is phone number
}

const isEmail = value => regex.email.test(value);

const isMatch = (value, regex) => {
    // Todo: Resolve whether value is match with given regex
}

module.exports = {
    isNumber,
    isPhoneNumber,
    isEmail,
    isMatch
}