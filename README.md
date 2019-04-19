# vut

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# Since we’re modifying the tests, let’s better run it in watch mode
npm t -- --watch
npm t -- --watchAll

npm i -D jest vue-jest babel-jest
npm i -D @vue/test-utils

# book repo exercises - https://github.com/alexjoverm/vue-testing-series

#To tell Jest to process JavaScript test files with babel-jest by adding an entry under jest.transform in package.json.

#Assuming using babel-preset-env with webpack, the default Babel config disables ES modules transpilation because webpack already knows how to handle ES modules. However, we do need to enable it for our tests because Jest tests run directly in Node.

# --> in babel.rc
#To apply options only for tests, put them in a separate config under env.test (.babelrc) (this will be automatically picked up by babel-jest).
