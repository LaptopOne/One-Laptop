[![CircleCI](https://circleci.com/gh/LaptopOne/one-laptop.svg?style=svg)](https://circleci.com/gh/LaptopOne/one-laptop)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# One-Laptop

An Open-Source non-profit application designed to help young people get a PC (Laptop) at no cost.

### Project Dependencies
- [babel-cli](https://babeljs.io/docs/usage/cli/) - Allows running the app in ES6 mode on the fly without having to transpile down to ES5
- [babel-core](https://www.npmjs.com/package/babel-core) - Babel compiler core
- [babel-loader](), [css-loader](), [file-loader](), [style-loader]() - Loaders to be used with webpack for ES6 transpiling and CSS loading.
- [babel-preset-es2015](https://babeljs.io/docs/plugins/preset-es2015/), [babel-preset-stage-0](https://babeljs.io/docs/plugins/preset-stage-0/), [babel-preset-react](http://babeljs.io/docs/plugins/preset-react/), [babel-register](https://babeljs.io/docs/usage/babel-register/) - These packages provide Babel presets for es2015 plugins, stage 0 plugins and react plugins.
- [compression](https://www.npmjs.com/package/compression) - Node.js compression middleware.
- [dotenv](https://www.npmjs.com/package/dotenv) - a zero-dependency module that loads environment variables from a .env file.
- [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [enzyme](http://airbnb.io/enzyme/) - JavaScript Testing utilities for React
- [jsdom](https://github.com/tmpvar/jsdom) - A JavaScript implementation of the WHATWG DOM and HTML standards, for use with node.js
- [mocha](https://mochajs.org/) - a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.
- [react](https://facebook.github.io/react/) - a javascript library for building user interfaces.
- [react-dom](https://facebook.github.io/react/docs/react-dom.html) - provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to.
- [react-router](https://reacttraining.com/react-router/), [react-router-dom](https://reacttraining.com/react-router/) - Declarative routing for React
- [webpack](https://webpack.js.org/) - a module bundler.

### Installation

To install `One-Laptop`, do the following:
- Clone the project from github with the command `git clone https://github.com/LaptopOne/one-laptop`
- Install the project dependencies using `npm install`
- Create a `.env` file and specify the PORT you'd like the application to make use of. (The default port is `3000`)
- You can start the application with the command: `npm start`


### Contributors
You can view a list of contrubutors [here](https://github.com/LaptopOne/one-laptop/contributors).
