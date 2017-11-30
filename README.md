# geojson-id-streaming

Add a unique id to features in a GeoJSON FeatureCollection with streaming.

For a non-streaming implementation see https://github.com/andrewharvey/geojson-id

## install

    npm install -g geojson-id-streaming

## usage

    geojson-id [--property] < file.geojson > output.geojson

If --property is present the id will be added as a property rather than as a high level id field.

## credits

This code was adapted from https://github.com/node-geojson/geojson-pick
