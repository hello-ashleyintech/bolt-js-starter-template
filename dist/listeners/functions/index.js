var reverseString = require('./reverse-string').reverseString;
module.exports.register = function (app) {
    app.function('reverse', reverseString);
};
