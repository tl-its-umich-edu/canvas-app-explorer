'use strict';

module.exports = {
  presets: [
    ['@babel/preset-env', {
        "targets": {"browsers": [ "since 2017-06"]}
    }], 
    '@babel/preset-react'],
};
