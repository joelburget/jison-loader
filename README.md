# jison webpack loader

## Usage

    var parser = require("jison!./grammar.jison");
    var result = parser.parse(input);

## webpack config

    module.exports = {
        module: {
            loaders: [
                {
                    test: /\.jison$/,
                    loader: "jison-loader"
                }
            ]
        }
    }

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
