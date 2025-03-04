import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js", // Your main JS file
  output: {
    path: path.resolve(__dirname, "dist"), // Output folder
    filename: "main.js", // Output file name
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "public"), // Serve static files from 'public' folder
    hot: true, // Enables hot reloading
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process JS files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Transpile modern JS
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ["style-loader", "css-loader"], // Inject CSS into the DOM
      },
    ],
  },
};
