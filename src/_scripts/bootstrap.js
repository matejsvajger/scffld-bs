/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

global.jQuery = global.$ =  require('jquery');
require('bootstrap');

/**
 * Additionaly to standard BootStrap features we'll also load
 * custom bootstrap select control and datepicker.
 */
require('bootstrap-select');
require('bootstrap-datepicker');

/**
 * Slick - slide anything! - a life saver when it comes to all sorts of sliders!
 */
require('slick-carousel');

/**
 * jQuery.mmenu for mobile off-canvas navigation.
 */
require('jquery.mmenu');

/**
 * Need to pop-up something? magnificPopup eats it all.
 */
require('magnific-popup');


/**
 * Form validation on client side.
 * http://parsleyjs.org/doc/index.html
 */
require('parsleyjs');


/**
 * Everytone likes feedback! Why not deliver it in style?
 */
require('sweetalert');

/**
 * Last but not least, no web page is
 * complete without it, well in EU that is.
 */
require('cookieconsent');

