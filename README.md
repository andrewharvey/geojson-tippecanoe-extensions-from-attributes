# geojson-tippecanoe-extensions-from-attributes

Adds feature level [tippecanoe GeoJSON extensions](https://github.com/mapbox/tippecanoe/blob/master/README.md#geojson-extension) from feature properties.

## From

```json
{
    "type": "Feature",
    "properties": {
        "layer": "road",
        "minzoom": 10,
        "maxzoom": 16
    },
    "geometry": null
}
```

## To

```json
{
    "type": "Feature",
    "tippecanoe": {
        "layer": "road",
        "minzoom": 10,
        "maxzoom": 16
    },
    "properties": {},
    "geometry": null
}
```


## install

    npm install -g geojson-tippecanoe-extensions-from-attributes

## usage

    geojson-tippecanoe-extensions-from-attributes < file.geojson > output.geojson

## credits

This code was adapted from https://github.com/node-geojson/geojson-pick
