'use strict';

const fs = require('story-fs');

module.exports = function(target) {
  return new Promise(function(resolve, reject) {
    return fs.del(target)
        .then(function() {
          resolve(true);
        }).catch(function(e) {
          reject(e);
        });
  });
};
