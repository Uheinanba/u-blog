const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const config = require('../config');

let routes = [];

_.each(fs.readdirSync(config.route), filename => {
  if (filename === 'index.js' || filename.indexOf('.js') === -1) return;
  try {
    const modelName = filename.split('.')[0];
    routes = _.concat(routes, require(path.join(config.route, filename)));
  } catch (error) {
    console.error(error);
  }
});

module.exports = routes;
