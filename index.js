var through = require('through'),
    Combiner = require('stream-combiner'),
    geojsonStream = require('geojson-stream');

module.exports = idStream;
module.exports.addId = addId;

var id = 0;
function idStream(options) {
    return Combiner(geojsonStream.parse(),
        through(function(feature, callback) {
            this.queue(addId(feature, options));
        }),
        geojsonStream.stringify());
}

function addId(feature, options) {
    if (options && options.property) {
        return Object.assign({}, feature, {
            properties: Object.assign(feature.properties, {id: id++})
        });
    } else {
        return Object.assign({}, feature, {
            id: id++
        });
    }
}
