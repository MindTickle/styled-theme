'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _composer = require('./composer');

var theme = {};


theme.palette = {
  primary: '#0072bc',
  secondary: '#0072bc',
  danger: '#f07878',
  alert: '#f07878',
  success: '#61bd87',
  grayscale: ['#888', '#212121', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#ffffff']
};

theme.reversePalette = (0, _composer.reversePalette)(theme.palette);

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
};

theme.sizes = {
  maxWidth: '1100px'
};

exports.default = theme;