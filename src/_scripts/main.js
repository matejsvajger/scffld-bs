/**
 * Main javascript entry point
 * Should handle bootstrapping/starting application
 *
 * @author Matej Svajger <hello@matejsvajger.com>
 */

/*global window, document, jQuery, $, Etikett, alert, location, parent, global */

'use strict';

import Application from './components/app';

/**
 * First we will load all of this project's JavaScript dependencies which
 * include jQuery, Bootstrap, bootstrap-datepicker and bootstrap-select,
 * slick-slider, magnificPopup, mmenu, parsley, sweetalert and
 * cookieconsent. This gives a great starting point for building
 * robust, powerful web applications.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

let App = new Application();


/**
 * Initialize the application on document ready. All code that needs
 * to be executed when page is done, should be handled from within the
 * Application init method.
 */

$(() => {
    App.init();
})

/** Expose the App to browser window object */
global.App = App;
