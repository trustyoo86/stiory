'use strict';

const { join } = require('path');

module.exports = {
  entry: join(__dirname, '..', 'src', 'index.ts'),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
          },
        ],
      },
    ],
  },
};