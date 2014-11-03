var fs = require("fs");
var jison = require("jison");

module.exports = function(input) {
    this.cacheable();

    var parser = new jison.Parser(bnf);
    return parser.generate();
};
