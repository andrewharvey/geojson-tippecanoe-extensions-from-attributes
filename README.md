# geojson-tippecanoe-extensions-from-attributes

Adds feature level tippecanoe GeoJSON extensions from feature properties.

## From

```json
{
    "type": "Feature",
    "properties": {
        "minzoom": 10,
        "maxzoom" 16
    }
    "geometry": null
}
```

## To

```json
{
    "type": "Feature",
    "tippecanoe": {
        "minzoom": 10,
        "maxzoom" 16
    }
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
