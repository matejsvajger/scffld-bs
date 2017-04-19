'use strict';

import Config from '../../_scripts/components/config'

export default class {

  init()
  {
    this.$el = $('[data-role="magnific"]');

    /**
     * Change the defaul magnificPopup functionality
     * by editing the objectin Config class or attach
     * the popup with a custom config to another
     * element below here.
     */

    this.$el.each((index, el) => {
      $(el).magnificPopup( Config.magnificPopup );
    });

  }

}
