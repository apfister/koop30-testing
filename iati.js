'use strict';

const request = require('request').defaults({gzip: true});

module.exports = function (koop) {
  // This is our one public function it's job its to fetch data from craigslist and return as a feature collection
  this.getData = function (req, callback) {
    const feature =  {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0,0]
      },
      properties: {}
    };

    const featureCollection = {
      type: 'FeatureCollection',
      features: [ feature ]
    };

    console.log('returning empty fc!');

    callback(null, featureCollection);

  }

};
