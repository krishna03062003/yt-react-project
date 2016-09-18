/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var path = require('path');
var paths = require('./paths');

// strip cacheDirectory since it's a babel-loader specific option 
var babelOptions = Object.assign({}, require('./babel.dev'))
delete babelOptions['cacheDirectory']

module.exports = {
  // uses the cache to improve dev performance
  useCache: true,
  // when TypeScript emits a file, pass it to Babel to provide backwards compatibility
  useBabel: true,
  // these are the options to use
  babelOptions: babelOptions,
  // tell the loader where the path is
  babelCore: path.join(paths.appNodeModules, 'babel-core')
};