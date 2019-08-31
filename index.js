// UMD boilerplate from Rollup.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.vizhubVegaLiteConfig = factory());
}(this, function () { 'use strict';

  // Appearance customization for Vega-Lite in VizHub (and beyond!).
  // See https://vega.github.io/vega-lite/docs/
  const dark = 'rgb(22, 21, 20)';
  const config = {
    mark: {
      color: 'black'
    },
    point: {
      filled: true,
      size: 100
    },
    axis: {
      domain: false,
      tickColor: 'lightGray'
    },
    style: {
      "guide-label": {
        font: 'Poppins',
        fontSize: 20,
        fill: dark
      },
      "guide-title": {
        font: 'Poppins',
        fontSize: 30,
        fontWeight: 500,
        fill: dark
      }
    }
  };

  return config;

}));
