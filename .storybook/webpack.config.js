const path = require('path');
const autoprefixer = require('autoprefixer');

//--------------------------------------------------------------------------------------------------

module.exports = {
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css?modules&importLoaders=1&localIdentName=[path][name]__[local]___[hash:base64:5]!postcss',
      include: path.resolve(__dirname, '../'),
    }],
  },
  postcss: () => ([
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
    }),
  ]),
};
