'use strict';

import Config       from './config'
import * as Module from '../../_modules/'

export default class {

  constructor()
  {
    this.Config = Config;

    this.slick          = new Module.Slick();
    this.header         = new Module.Header();
    this.footer         = new Module.Footer();
    this.magnificPopup  = new Module.MagnificPopup();
  }

  init()
  {
    // - Trigger cookie consent banner.
    cookieconsent.initialise( Config.cookieconsent );

    this.slick.init();
    this.header.init();
    this.magnificPopup.init();
  }

}
