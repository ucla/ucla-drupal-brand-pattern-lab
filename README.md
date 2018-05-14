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

## Other Documentation

These are crucial pieces that contains documentation that is good to understand:

- [`pattern-lab/patternengine-twig`](https://github.com/pattern-lab/patternengine-php-twig)
- [`aleksip/plugin-data-transform`](https://github.com/aleksip/plugin-data-transform)
- [Twig templating language](http://twig.sensiolabs.org/documentation)
