// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// @remove-on-eject-end
'use strict';

process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({ silent: true });

const jest = require('jest');

function main(argv) {
  // Watch unless on CI or in coverage mode
  if (!process.env.CI && argv.indexOf('--coverage') < 0) {
    argv.push('--watch');
  }

  // @remove-on-eject-begin
  // This is not necessary after eject because we embed config into package.json.
  const createJestConfig = require('./utils/createJestConfig');
  const path = require('path');
  const paths = require('../config/paths');
  argv.push(
    '--config',
    JSON.stringify(
      createJestConfig(
        relativePath => path.resolve(__dirname, '..', relativePath),
        path.resolve(paths.appSrc, '..'),
        false
      )
    )
  );
  // @remove-on-eject-end
  jest.run(argv);
}

module.exports = main;

if (require.main === module) {
  main(process.argv.slice(2));
}
