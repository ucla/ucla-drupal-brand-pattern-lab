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
$  php core/console --server
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
$ npm run build
```
The above commands will first install all dependencies then produce javascript and CSS files in `/public/assets`. Source files can be found in `/src/`. A sample setup has been provided. We are going to mimic Patternlab's file structure in `/src/sass` for consistency and ease of reference. A set of module resolution directives has been added to `webpack.config.js` to make referencing sass files easier. The cost of doing things this way is that **all SASS file names must be unique***, and that **you must include the underscore '_' in the name of the file when @importing**.

Webpack is configured to emit the CSS rather than do the default module bundling and renaming. The base file is `/src/sass/main.scss` and in order to include your SASS partial files in the build, you must have them imported in either this file or another file already imported into `main.scss`. The `main.scss` file is then imported into with a single line in `/src/main.js`, the entry point of the webpack build. If you wish to create multiple CSS files, you will need to create additional javascript files in `/src` and add entry points in `webpack.config.js`. Otherwise any SASS files referenced by `main.js` will be included in a single `main.css` file. If you want to rename the output file, just rename `main.js` and change the entry point in the config file.

CSS minification will be added to the production build soon. To generate our CSS we are using the [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/).


## Other Documentation

These are crucial pieces that contains documentation that is good to understand:

- [`pattern-lab/patternengine-twig`](https://github.com/pattern-lab/patternengine-php-twig)
- [`aleksip/plugin-data-transform`](https://github.com/aleksip/plugin-data-transform)
- [Twig templating language](http://twig.sensiolabs.org/documentation)
