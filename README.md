This PHP Drupal edition of Pattern Lab is for UCLA's brand guidelines website.

## Pattern Lab Twig Standard Edition for Drupal

The Standard Edition for Drupal gives developers and designers a clean and stable base from which to develop a Drupal compatible pattern library.

## Get Started
You will need the following installed:

* [Composer](https://getcomposer.org)

Run the following to install dependencies.
```
$ composer install
```

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

**One line start**

This will generate Pattern Lab and watch for changes while running the local server:
```
$ php core/console --watch
```

**Generate Pattern Lab**

To generate the front-end for Pattern Lab type:
```
$ php core/console --generate
```

**Start a server to view Pattern Lab**

You can use PHP's built-in web server to review your Pattern Lab project in a browser. In a separate window type:
```
$ php core/console --server
```

**Render the Twig files to HTML**
```
$ php core/console --export
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

**Updating Pattern Lab**
```
$	composer update
```

## Webpack build
This section describes the [webpack](https://webpack.js.org/) bundling tool which we use to generate CSS from SASS.

### Getting Started with Webpack
```
$ npm install
```
The above commands will install all dependencies. Then to produce output files, you would execute one of the following commands:

For Development:
```
$ npm run build
```

For Production:
```
$ npm run live
```

Output files can be found in `/public/assets`. The files that contain `.min.` (for example, `main.min.js` or `main.min.css`) are the minified versions and are suitable for production deployment. The other "non-minified" files (in our example, `main.css` and `main.js`) can be used in a development environment where it may be necessary to read bundled file output.

SASS Source files can be found in `/src/sass`. A sample setup has been provided. We are going to mimic Patternlab's file structure in `/src/sass` for consistency and ease of reference. A set of module resolution directives has been added to `webpack.common.js` to make referencing sass files easier. The cost of doing things this way is that **all SASS file names must be unique**, and that **you must include the underscore '_' in the name of the file when @importing**.

We are currently not using any javascript in our components, but should that become necessary we can place them in the `/src/js` folder. Javascript modules (ES6 or whatever) would have to be run through [Babel](https://babeljs.io/) so a [loader](https://webpack.js.org/loaders/babel-loader/) would have to be added to the build.

Webpack is configured to emit the CSS rather than do the default module bundling and class renaming. The base file is `/src/sass/main.scss` and in order to include your SASS partial files in the build, you must have them imported in either this file or another file already imported into `main.scss`. The `main.scss` file is then imported into with a single line in `/src/main.js`, the entry point of the webpack build. If you wish to create multiple CSS files, you will need to create additional javascript files in `/src` and add entry points in `webpack.common.js`. Otherwise any SASS files referenced by `/src/main.js` will be included in a single output file. If you want to rename the output file, just rename `/src/main.js` and change the entry point in the `webpack.common.js` config file.

To generate our CSS we are using the [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/). In the future we could do things like custom commands to output CSS for specific components.


## Other Documentation

These are crucial pieces that contains documentation that is good to understand:

- [`pattern-lab/patternengine-twig`](https://github.com/pattern-lab/patternengine-php-twig)
- [`aleksip/plugin-data-transform`](https://github.com/aleksip/plugin-data-transform)
- [Twig templating language](http://twig.sensiolabs.org/documentation)
