const webpack = require('webpack');
const AotPlugin = require('@ngtools/webpack').AotPlugin;
const path = require('path');

module.exports = {
   // devtool breaks windows aot compilation with 95% emitting freeze when styleUrls is set in app.component.ts
   devtool: '#source-map',
   entry: {
      main: './src/main.ts'
   },
   output: {
      path: './dist',
      filename: '[name].bundle.js'
   },
   resolve: {
      extensions: ['.ts', '.js']
   },
   module: {
      rules: [
         { test: /\.ts$/, loaders: ['@ngtools/webpack'] },
         { test: /\.css$/, loader: 'raw' },
         { test: /\.html$/, loader: 'raw' }
      ]
   },
   plugins : [
      new AotPlugin({
         tsConfigPath: './tsconfig.json',
         entryModule: 'src/app/app.module#AppModule'
      })
   ]
};