var through = require('through'),
    Combiner = require('stream-combiner'),
    geojsonStream = require('geojson-stream');

module.exports = idStream;
module.exports.addId = addId;

var id = 0;
function idStream() {
    return Combiner(geojsonStream.parse(),
        through(function(feature, callback) {
            this.queue(addId(feature));
        }),
        geojsonStream.stringify());
}

function addId(feature) {
    return Object.assign({}, feature, {
        id: id++
    });
}
