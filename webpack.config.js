import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  entry: './src/App.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],
    // resolve: {
    //   extensions: ['.js', '.jsx']
    // }
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
};

export default config;
