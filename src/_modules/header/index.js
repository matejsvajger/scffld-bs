'use strict';

import Config from '../../_scripts/components/config'

export default class {


  init()
  {
    this.$el = $('header');

    /**
     * Place custom code here, you would like to bind
     * to special functionality on the header. this.$el
     * is a jQuery object of the <header> element.
     */

    $('nav[data-role="mmenu"]').mmenu( Config.mmenu );

  }

}
