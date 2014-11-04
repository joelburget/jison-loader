var jison = require("jison");

module.exports = function(input) {
    this.cacheable();

    var parser = new jison.Generator(input);
    return parser.generate();
};
