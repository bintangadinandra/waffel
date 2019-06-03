const {contains} = require('ramda');

const isRequired = value => !contains(value, [null, undefined, '', []]);

module.exports = {
    isRequired
}