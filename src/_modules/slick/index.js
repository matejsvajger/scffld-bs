'use strict';

import Config from '../../_scripts/components/config'

export default class {

  constructor()
  {
  }

  init()
  {
    this.$el = $('[data-role="slick"]');

    this.$el.each((index, el) => {
      let $el = $(el);

      ($el.data('slick')) ?
        $el.slick():
        $el.slick(
          this.getConfig($el)
        );
    });
  }

  getConfig($el)
  {
    let data = $el.data();
    let config = Object.assign({}, Config.slick.config);
    let responsive = [];

    config.dots = data.hasOwnProperty('dots');
    config.arrows = data.hasOwnProperty('arrows');


    let breakpoint = 0;
    for (var key in Config.slick.responsive) {
      let cfg = Config.slick.responsive[key];
      let Key = this.capitalize(key);
      let defined = false;


      if (data.hasOwnProperty('show' + Key )) {
        cfg.settings.slidesToShow = data['show' + Key ];

        if (cfg.breakpoint > breakpoint) {
          config.slidesToShow = cfg.settings.slidesToShow;
          config.slidesToScroll = cfg.settings.slidesToScroll;
          breakpoint = cfg.breakpoint;
        }

        defined = true;
      }

      if (data.hasOwnProperty('slide' + Key )) {
        cfg.settings.slidesToScroll = data['slide' + Key ];
      }

      if (defined) {
        responsive.push(cfg);
      }
    }

    if (responsive.length) {
      config.responsive = responsive;
    }

    return config;
  }

  capitalize(str)
  {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
