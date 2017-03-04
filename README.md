# jison webpack loader

## Usage
```js
const parser = require("jison!./grammar.jison");
const result = parser.parse(input);
```

## webpack config
```js
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
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
