var through = require('through'),
    Combiner = require('stream-combiner'),
    geojsonStream = require('geojson-stream');

module.exports = extensionsStream;
module.exports.setExtensions = setExtensions;

var id = 0;
function extensionsStream() {
    return Combiner(geojsonStream.parse(),
        through(function(feature, callback) {
            this.queue(setExtensions(feature ));
        }),
        geojsonStream.stringify());
}

function setExtensions(feature) {
    var tippecanoe = {};
    if ('minzoom' in feature.properties) {
        tippecanoe.minzoom = feature.properties.minzoom
        delete feature.properties.minzoom
    }
    if ('maxzoom' in feature.properties) {
        tippecanoe.maxzoom = feature.properties.maxzoom
        delete feature.properties.maxzoom
    }
    if ('layer' in feature.properties) {
        tippecanoe.layer = feature.properties.layer
        delete feature.properties.layer
    }
    return Object.assign({}, feature, {
        tipppecanoe: tippecanoe
    });
}
