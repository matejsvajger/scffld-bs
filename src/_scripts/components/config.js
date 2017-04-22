export default {
  mmenu: {
    navbar: {
        title: 'Menu'
    },
    extensions: [
        "fx-listitems-slide",
        "fx-panels-slide-up",
        "fx-menu-slide",
        "pagedim-black",
        "shadow-page",
        "theme-white"
    ],
    offCanvas: {
        "position": "left"
    }
  },
  slick: {
    config: {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
    },
    responsive: {
      lg: {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      md: {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      sm: {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      xs: {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    }
  },
  magnificPopup: {
    type: 'image'
  },
  cookieconsent: {
    "//": "You can generate a config for the banner on https://cookieconsent.insites.com/download/",
    palette: {
      popup: {
        background: "#efefef",
        text: "#404040"
      },
      button: {
        background: "#8ec760",
        text: "#ffffff"
      }
    },
    showLink: false,
    theme: "edgeless",
    position: "bottom-right",
    content: {
      message: "Wir verwenden Cookies, damit Sie optimal durch unsere Website navigieren können. ",
      dismiss: "OK"
    }
  }

}
