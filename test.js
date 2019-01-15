var test = require('tape'),
    extensionsStream = require('./');

test('setExtensions', function(t) {
    t.deepEqual(extensionsStream.setExtensions({
        type: 'Feature',
        properties: { minzoom: 5 }
    }), {
        type: 'Feature',
        properties: {},
        tippecanoe: {
            minzoom: 5
        }
    }, 'minzoom');
    t.end();
});
