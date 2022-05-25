import * as path from 'path';
import * as webpack from 'webpack';
import BundleTrackerPlugin from 'webpack-bundle-tracker';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const commonConfig: webpack.Configuration = {
  context: path.resolve(__dirname, '..'),
  entry: path.resolve('components', 'index'),
  output: {
    path: path.resolve('./bundles/'),
    filename: '[name]-[fullhash].js',
    chunkFilename: '[name]-[chunkhash].js'
  },

  plugins: [
    new BundleTrackerPlugin({ filename: './webpack-stats.json' }),
    new MiniCssExtractPlugin({
      filename: '[name]-[fullhash].css',
      chunkFilename: '[name]-[chunkhash].css',
    }),
  ],

  module: {
    rules: [
      // we pass the output from babel loader to react-hot loader
      {
        test: /\.(js|jsx|tsx|ts)?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ],
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};

export default commonConfig;
