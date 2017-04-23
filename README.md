# Scffld Bootstrap Package
> A powerful starting point for developing html5 templates on BootStrap, build on top of [scffld](https://github.com/matejsvajger/scffld) - a tool that provides the environment for compiling superset of languages used in the template into ones that browser understands.

## Features

* All features included from [scffld](https://github.com/matejsvajger/scffld).
* Basic HTML skeleton in PUG with BootStrap component mixins.
* Common JavaScript Libraries include:
	* jQuery,
	* [Slick Carousel](http://kenwheeler.github.io/slick/),
	* [jQuery.mmenu](http://mmenu.frebsite.nl/),
	* [magnificPopup](http://dimsemenov.com/plugins/magnific-popup/),
	* [parsleyjs](http://parsleyjs.org/),
	* [sweetalert](http://t4t5.github.io/sweetalert/),
	* [cookieconsent](https://cookieconsent.insites.com/),
	* [Bootstrap Datepicker](https://bootstrap-datepicker.readthedocs.io/en/latest/),
	* [Bootstrap Select](https://silviomoreto.github.io/bootstrap-select/).
* Slick, mmenu, magnificPopup and parsleyjs libraries __triggable via html__ data attributes without writing ___any JavaScript___.
* All JavaScript and CSS is required as npm dependencies and easily updatable.
* Basic CSS Skeleton in SCSS with option to __EDIT ALL__ BootStrap3 __variables__ and other libraries.
* A bunch of helpful SCSS Mixins,
* Example page.

**What!?** - TL;DR scffld will pack your and 3rd party stylesheets and javascript into single files and optimize them!

## Quickstart

#### ATENTION!
If you're here for the __first time__, I strongly recommend you skip the quickstart first and familiarize yourself with scffld-bs directory structure, using its' plugins and existing mixins.

### Preffered
Create a clean project directory, navigate to it in terminal and run the following command:
```
npm i scffld-bs
```

### Alternative
Clone this repository and then run `npm install` from the Terminal.

--
You will get a prompt from `Scffld` during installation process asking you to choose your build directory and css preprocessor. You can leave the default values by pressing enter, however it's __important__ for `scffld-bs` to have _Sass_ selected for default CSS handling!

--
You're done! You can use one of many `scffld` gulp tasks to build your template now, i.e.:

- Run `gulp serve` to preview and watch for changes
- Run `gulp build` to compile production version

## Prequisites

Check your system is [setup](https://github.com/matejsvajger/scffld#getting-started) to run `scffld`.


- Install NodeJS >= 6.10.* from [https://nodejs.org/en/](https://nodejs.org/en/)
- Install Gulp: `npm install -g gulp`


## Installation
Create na new clean project directory and go into it:
`mkdir myproject && cd myproject`

Then run:
`npm i scffld-bs`.

Wait for the Scffld prompt to popup and select your build destination and `SASS` for css.

After the process is finished, scffld will create a few files in your project root:

- **.babelrc** - config file for babeljs that adds support for _ECMAScript2015_
- **.editorconfig** - config for your editor, to have unified indentations in all the project files
- **.eslintrc** - config for linting your JavaScripts with `gulp test` command.
- **.gitignore** - that ignores _node_modules_ and your selected build directory _[dist/]_ by default
- **gulpfile.babel.js** - logic for gulp, that provides all automated tasks from scffld into your project

It will also add all gulp plugins into your package.json under _devDependencies_ for autoloading and a config under `"scffld"` key, on which the gulp tasks operate. You can modify it to your liking, but probbaly won't need to for this bootstrap package.


## Project Structure
First! There's some rules you'll need to follow, but hey it's no rocket science. Scffld-bs has a predefined folder structure which is good to follow for the sake of sanity, but you can customize the build destinations for all resources (css, js, ...).
```
├── src
|   ├── _bootstrap              # Contains PUG mixins for Bootstrap components
|   ├── _images                 # Images for optimization during build
|   ├── _layouts                # HTML Layouts for diffrent kinds of pages
|   |   └── app.pug
|   ├── _modules                # Reusable modules
|   |   ├── modules.scss        # Wraps Sass styles from all modules
|   |   ├── modules.pug         # Wraps PUG Mixins from all modules
|   |   ├── modules.js          # Wraps JS Classes from all modules
|   |   └── module
|   |       ├── index.js        # Module JavaScript class
|   |       ├── module.scss     # Module Styles
|   |       └── module.pug      # Module markup - pug mixin
|   ├── _scripts                # Global scripts, base classes, etc
|   |   ├── components          # Application Script components and config
|   |   |   ├── app.js          # Application JavaScript start point
|   |   |   └── config.js       # Default config objects for all plugins
|   |   ├── bootstrap.js		  # Application bootstrapping - all 3rd party deps
|   |   └── main.js             # JavaScript entry file
|   ├── _seeds                  # JSON/YAML files that seed data to pug templates
|   ├── _styles                 # Global styles, mixins, variables, etc
|   |   ├── components
|   |   |   └── example.scss    # Seperate page related styles
|   |   ├── mixins
|   |   |   ├── _animations.scss   # Helpers for CSS animations and easing
|   |   |   ├── _breakpoints.scss  # Bootstrap media query helpers
|   |   |   ├── _fonts.scss        # Typography helpers
|   |   |   └── _utils.scss        # Common mixins for size, position, ...
|   |   └── _app.scss          # Application styles start point
|   |   └── _variables.scss    # Holds app and bootstrap variables
|   |   └── main.scss          # CSS entry file
|   └── example.pug            
|   └── index.pug              # Page - extends layout, provides content.
└── package.json               # Dependencies and scffld configuration
```

## Components

Template skeleton consists of three parts:

- Pug - for html murkup
- Sass - for styles
- ES2015 - for Javascript

---

### Pug

Pug files provide markup for pages, layots for diffrent kind of pages, mixins for bootstrap components and mixins for template components.


#### Layouts

Layouts provide the basic markup skeleton with html head setup, website header and navigation and footer. They also include all the mixins that will make them available across all the pages.

#### Pages

Each pug file directly under `./src/` folder will be used to create a html page. This files extend layouts which wrap the page content with the html head, header and footer.

#### Bootstrap Mixins

These mixins remove the static boilerplate for bootstrap components so you can focus directly on your custom markup. For example to create a bootstrap modal and a button to open it, instead of the relatively large html markup only three lines of code suffice:

```pug
button.btn(data-toggle="modal", data-target="#exampleModal") Open Modal!
+modal("Modal title!", "exampleModal")
  p This is modal content
```

Explore their source code for usage, or example content for the use cases.

#### Module Mixins

For every module you'll create in you page, setup mixins for the pug. This way you can later reuse them in your pages, and remove repetition, in turn you'll end up with easy maintainable code.

For example if you have an article markup and you need to use it multiple times you just inject it in your page:

```pug
each item in articles
	+article(item)
	+article(item)
```


#### Seed Files

If you want to load global data into your pug templates, you can add JSON/YAML files in `src/_seeds` folder.

For example, add menu.json in `src/_seeds` folder:

```json
{
  "name": "Home",
  "link": "/",
  "category": "Page",
  "status": "Development"
}
```

And it will be added to the `site.data` object under the key of filename and it can be used like so:

```pug
div
  h1= site.data.menu.name
```

Which outputs to:

```html
<div>
  <h1>Home</h1>
</div>
```

---

### Styles

Styles come packed with all the stylesheets from 3rd party libraries. The ones that provide a Sass source are required as such and can have their variables overwritten before the compilation proccess.

___TIP:___ By tweaking the BS variables you can get very close to almost any design you'll need to implement with using nothing but bootstrap markup. This way you'll keep your code dry, won't pollute the global namespace with a bunch of custom classes and make it managable to any other developer that might come by.

#### Global styles
Your starting point for writing global styles [fonts, colors, ...] should be in _app.scss. For any page specific styles or if your global styles get too big, i suggest you split them in parts, store them in `_styles/components/` folder and include them in your `_app.scss`.

#### Module Styles
These are included after global styles, and should be written at all times as standalone. Styles from modules should never change CSS outside of it's scope! They reside inside `_modules\modulName` folders and you will create them as needed.

_IMPORTANT:_ for every module you create, you need to include in `_modules/modules.scss`!

#### Mixins

`scffld-bs` ships with some predefined mxins. The most useful ones are bootstrap **B**reak**P**oints and typography.

___BootStrap Mixins___

They follow the same logic as bootstrap classes - mobile first - and provide media queries on same widths. For example:

```css
h1 {
  @include font-size(24px);
 
  @include bp-sm {
    @include font-size(36px);
  }
  
  @include bp-lg {
    @include font-size(56px);
  }
}
```

___Typography - Font mixins___

I urge you to use the `font-size()` mixin to set font sizes across all styles that need responsive scaling. It will calculate a `rem` unit for the font based on the base font size, and fonts will scale with the font size defined on the body.

--

Explore other mixins to see how to use them in your project.

---

### Scripts

When writing JavaScript for your template, classes are preffered and spliting your page functionality into seperate components makes it easier to mantain and simple to reuse the same code in a different project.

There's a few modules packed in this skeleton that handle libraries and work out of the box, in a similar fashion as bootstrap components. All of them are triggered via html data-role attribute and you can use them without writing any JS.

--

#### Slick `[data-role="slick"]`

Slick by default initializes a slider with display of one slide and slides for one element.

```pug
.my-slider(data-role="slick")
  img(src="..." alt="...")
  img(src="..." alt="...")
  img(src="..." alt="...")
```
Slick accepts also a few additional options:

- `data-dots` will add dot navigation to the slider.
- `data-arrows` will add left and right arrows to the slider.
- `data-show-lg`, `data-show-md`, `data-show-sm`, `data-show-xs` determines how many slides to show on corresponding bootstrap breakpoints.
- `data-slide-lg`, `data-slide-md`, `data-slide-sm`, `data-slide-xs` determines how many slides to slide each time on corresponding bootstrap breakpoints. By default it's always one.

For example you want to slide some articles and have different number of slides on each breakpoints:

```pug
.article-slider(data-role="slick" data-dots data-show-lg="4" data-show-md="3" data-show-sm="2" data-show-xs="1")
  +article(...)
  +article(...)
  +article(...)
  +article(...)
  +article(...)
```

--

#### MagnificPopup `[data-role="magnific"]`

The default target type for popups is `image`. You can change it in the `config.js`.

To trigger magnific popup on a link just add the data attribute to an anchor tag pointing to an image.

```pug
a(href="/img/bigimage.jpg" data-role="magnific")
	img(src="/img/thumb.jpg")
```

--

#### jQuery.mmenu `[data-role="mmenu"]`

You can also setup a offcanvas navigation with mmenu without JavaScript. Just add a `<nav>` element with id and data attribute to the page and wrap your hamburger with an anchor pointing to the nav id:

```pug
a(href="#mobile-menu")
  .hamburger

nav#mobile-menu(data-role="mmenu")
  ul
    li
      a(href="...") Home
```

---

### Images and Fonts

All images in `src/_images` will be optimized, reduced in files size and copied to your build folder in `./images/`.

Build process will also pick up fonts from slick, bootstrap and font-awesome and move them into `./fonts/` folder inside your build dir.

**IMPORTANT** Any other folder in `./src/` that is not prefixed with _underscore_ ( _ ) will be simply copied into your build dir. So you never need to do anything in there, you **always version only the source dir**!

---

## Building

You build your template with gulp tasks provided by the sccfld:

- `gulp serve` will build a unminified version of the template and boot up a developement server, that listens to changes in your source files and automaticaly updates them in the browser.
- `gulp build` compiles a optimized and minified version of the template ready for production.

Check out a full list of available tasks on [scffld repository](https://github.com/matejsvajger/scffld#gulp-workflow)

## Contributing
Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md) and [code of conduct](CONDUCT.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)


## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information - &copy; Matej Svajger
