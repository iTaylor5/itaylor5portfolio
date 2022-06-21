import { Injectable } from '@angular/core';
import { jarallax, jarallaxVideo } from 'jarallax';
import * as scrollme from '../../assets/sofbox-v2/js/scrollme';
@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  // @ts-ignore
  public $ = window.$;

  public slide: any;
  public slideTotal: any;
  public slideCurrent: any;

  constructor() {
    this.slide = this.$('.slider-single');
    this.slideTotal = this.slide.length - 1;
    this.slideCurrent = -1;
  }

  public index(): void {
    this.loaderInit();
    this.toggleDropdown();
    this.wowInit();
    this.owlCarousalInit(this.$);
    this.skrollr();
    this.jarallax();
    this.accordion(this.$);
    this.magnific(this.$);
    this.progressBar(this.$);
    this.featureBoxEffect(this.$);
    this.isotope(this.$);
    this.swiper();
    setTimeout(() => {
      this.circleProgressBar(this.$);
    }, 500)
    this.pricingProcess(this.$);
  }

  // Function for toggle page Loader...
  public loaderInit(): void {
    this.$('#load').fadeOut();
    this.$('#loading').delay(1000).fadeOut('slow');
  }

  scrollme () {
    setTimeout(() => {
      scrollme.default.init()
    }, 1050)
  }

 
  // Function to toggle Navigation dropdown...
  public toggleDropdown(): void {
    this.$("#main-header .menu-item .toggledrop").off("click");
    if (this.$(window).width() < 992) {
      this.$('#main-header .menu-item .toggledrop').on('click', function (e) {
        e.preventDefault();
        // @ts-ignore
        window.$(this).closest('li').find('.sub-menu').toggle('d-block');
      });
    }

    this.$(window).on('resize', function () {
      "use strict";
      // @ts-ignore
      window.$('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function () {
        // @ts-ignore
        window.$(this).closest('li').find('.sub-menu').toggle('d-block');
      });
      // @ts-ignore
      window.$("#main-header .menu-item .toggledrop").off("click");
      // @ts-ignore
      if (window.$(window).width() < 992) {
        // @ts-ignore
        window.$('#main-header .menu-item .toggledrop').on('click', function (e) {
          e.preventDefault();
          // @ts-ignore
          window.$(this).closest('li').find('.sub-menu').toggle('d-block');
        });
      }
    });
    // @ts-ignore
    window.$(".nav-item.dropdown").mouseenter(function() {
      // @ts-ignore
      window.$(this).addClass("menu-show");
    });
    // @ts-ignore
    window.$(".nav-item.dropdown").mouseleave(function() {
      // @ts-ignore
      window.$(this).removeClass("menu-show");
    });
  }

  public checkElement(type, element): boolean {
    let found = false;
    let elements;
    switch (type) {
      case 'class':
        elements = document.getElementsByClassName(element);

        if (elements !== undefined && elements !== null && elements.length > 0) {
          found = true;
        }
        break;

      case 'id':
        elements = document.getElementById(element);

        if (elements !== undefined && elements !== null) {
          found = true;
        }
        break;
    }


    return found;
  }

  public wowInit(): void {

    const elementExist = this.checkElement('class', 'wow');

    // @ts-ignore
    if (elementExist) {
      // @ts-ignore
      const WOW = window.WOW;
      new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        live: false
      }).init();
    }
  }


  public owlCarousalInit($): void {

    const elementExist = this.checkElement('class', 'owl-carousel');
    if (elementExist) {
      this.$('.owl-carousel').each(function () {
        const $carousel = $(this);
        $carousel.owlCarousel({
          items: $carousel.data('items'),
          loop: $carousel.data('loop'),
          margin: $carousel.data('margin'),
          nav: $carousel.data('nav'),
          dots: $carousel.data('dots'),
          autoplay: $carousel.data('autoplay'),
          autoplayTimeout: $carousel.data('autoplay-timeout'),
          navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>'],
          responsiveClass: true,
          responsive: {
            // breakpoint from 0 up
            0: {
              items: $carousel.data('items-mobile-sm')
            },
            // breakpoint from 480 up
            480: {
              items: $carousel.data('items-mobile')
            },
            // breakpoint from 786 up
            786: {
              items: $carousel.data('items-tab')
            },
            // breakpoint from 1023 up
            1023: {
              items: $carousel.data('items-laptop')
            },
            1199: {
              items: $carousel.data('items')
            }
          }
        });
      });
    }
  }

  public skrollr(): void {
    // @ts-ignore
    const $skrollr = window.skrollr;
    $skrollr.init().destroy();
    $skrollr.init({
      forceHeight: false,
      easings: {
        easeOutBack(p, s) {
          s = 1.70158;
          p = p - 1;
          return (p * p * ((s + 1) * p + s) + 1);
        }
      },
      mobileCheck() {
        return false;
      }
    });
  }

  public jarallax(): void {
    jarallax(document.querySelectorAll('[data-parallax="true"]'), {
      speed: 0.6
    });
  }

  public accordion($) {
    $('.iq-accordion .iq-accordion .accordion-details').hide();
    $('.iq-accordion .iq-accordion:first').addClass('accordion-active').children().slideDown('slow');
    $('.iq-accordion .iq-accordion').on('click', function () {
      if ($(this).children('div').is(':hidden')) {
        $('.iq-accordion .iq-accordion').removeClass('accordion-active').children('div').slideUp('slow');
        $(this).toggleClass('accordion-active').children('div').slideDown('slow');
      }
    });
    
    $('.iq-accordion .iq-accordion-block .accordion-details').hide();
    $('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
    $('.iq-accordion .iq-accordion-block').on("click", function() {
      if ($(this).children('div.accordion-details ').is(':hidden')) {
        $('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
        $(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow');
      }
    });
  }

  public progressBar($): void {
    const elementExist = this.checkElement('class', 'iq-progress-bar');
    if (elementExist) {
      $('.iq-progress-bar > span').each(function () {
        const $this = $(this);
        const width = $this.data('percent');
        $this.css({
          transition: 'width 2s'
        });
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function () {
          // tslint:disable-next-line:only-arrow-functions
          $this.appear(function () {
            $this.css('width', width + '%');
          });
        }, 500);
      });
    }
  }


  public magnific($): void {
    $('.popup-gallery').magnificPopup({
      delegate: 'a.popup-img',
      tLoading: 'Loading image #%curr%...',
      type: 'image',
      mainClass: 'mfp-img-mobile',
      gallery: {
        navigateByImgClick: true,
        enabled: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      disableOn: 700,
      mainClass: 'mfp-fade',
      preloader: false,
      removalDelay: 160,
      fixedContentPos: false
    });
  }

  public circleProgressBar($): void {
    const elementExist = this.checkElement('class', 'progressbar-circle')
    if (elementExist) {
      $('.progressbar-circle').each(function () {
        const elementPos = $(this).offset().top
        const topOfWindow = $(window).scrollTop()
        const percent = $(this).find('.circle').attr('data-percent')
        const animate = $(this).data('animate')
        // if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        // tslint:disable-next-line:only-arrow-functions
        $('.progressbar-circle').appear(function () {
          $(this).data('animate', true)
          $(this).find('.circle').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 10,
            fill: {
              color: '#6f73f0'
            }
          }).stop()
          $(this).find('.circle.purple-hover').circleProgress({
            fill: {
              color: '#6f73f0'
            }
          })
          $(this).find('.circle.org-hover').circleProgress({
            fill: {
              color: '#ff796d'
            }
          })
          $(this).find('.circle.green-hover').circleProgress({
            fill: {
              color: '#33e2a0'
            }
          })
        })
      })
    }
  }

  public featureBoxEffect($): void {
    $('.feature-box-effect').mouseenter(function() {
      $('.selected').removeClass('selected').addClass('feature-box-effect');
      $(this).removeClass('feature-box-effect').addClass('selected');
    });
  }

  public isotope ($): void {
    /* ------------------------   2 Isotope   -------------------------- */
    const elementExist = this.checkElement('class', 'isotope');
    if (elementExist) {
      // eslint-disable-next-line no-undef
      $('.isotope').isotope({
        itemSelector: '.iq-grid-item'
      });

      // filter items on button click
      $('.isotope-filters').on('click', 'button', function () {
        const filterValue = $(this).attr('data-filter');
        $('.isotope').isotope({
          resizable: true,
          filter: filterValue
        });
        $('.isotope-filters button').removeClass('show active')
        $(this).addClass('show active')
      })
    }

    /* ------------------------   3 Masonry   -------------------------- */

    const elementExist1 = this.checkElement('class', 'iq-masonry-block');
    if (elementExist1) {
      const $msnry = $('.iq-masonry-block .iq-masonry');
      if ($msnry) {
        const $filter = $('.iq-masonry-block .isotope-filters');
        $msnry.isotope({
          percentPosition: true,
          resizable: true,
          itemSelector: '.iq-masonry-block .iq-masonry-item',
          masonry: {
            gutterWidth: 0
          }
        });

        // bind filter button click
        $filter.on('click', 'button', function () {
          const filterValue = $(this).attr('data-filter');
          $msnry.isotope({
            filter: filterValue
          })
        });

        $filter.each(function (i, buttonGroup) {
          const $buttonGroup = $(buttonGroup);
          $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active')
          })
        })
      }
    }
  }

  public swiper(): void {
    const elementExist1 = this.checkElement('class', 'swiper-style-two');
    // @ts-ignore
    if (elementExist1) {
      // @ts-ignore
      const Swiper1 = window.Swiper;
      new Swiper1({
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loopFillGroupWithBlank: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
        },

        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          }
        }
      })
    }

    const elementExist2 = this.checkElement('class', 'swiper-container');
    // @ts-ignore
    if (elementExist2) {
      // @ts-ignore
      const Swiper2 = window.Swiper;
      new Swiper2({
        slidesPerView: 3,
          spaceBetween: 0,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loopFillGroupWithBlank: true,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
          },

          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            }
          }
      })
    }
  }

  public pricingProcess ($): void {
    const count_tabs = $('#count-tabs').val()
    for (var i = 0; i <= count_tabs; i++) {
      var maxnumber = $('#number_user_' + i).val()
      $('#user_range_' + i).range({
        min: 1,
        max: maxnumber,
        start: 1,
        step: 1,
        input: '#user_text_' + i
      })
    }
    for (var i = 0; i <= count_tabs; i++) {
      var maxnumber = $('#number_time' + i).val()
      $('#time_range_' + i).range({
        min: 1,
        max: maxnumber,
        start: 1,
        step: 1,
        input: '#time_text_' + i
      })
    }
    $('.input-range').on('click mousemove', function () {
      const check = $(this).attr('id')
      const id = $(this).attr('id').match(/\d+/)
      const user_range = $('#user_range_' + id)
      const time_range = $('#time_range_' + id)
      const user_text = $('#user_text_' + id)
      const time_text = $('#time_text_' + id)
      const total = $('#total_' + id)
      const base = $('#base_' + id)

      total.val(user_text.val() * time_text.val() * base.val());
    })
    $('.price-checkbox').on('click', function () {
      const a = []
      const id = $(this).attr('primary').match(/\d+/)
      let price = 0
      const user_range = $('#user_range_' + id)
      const time_range = $('#time_range_' + id)
      const user_text = $('#user_text_' + id)
      const time_text = $('#time_text_' + id)
      const total = $('#total_' + id)
      const base = $('#base_' + id)
      $('.chk_' + id + ':checked').each(function () {
        price += parseInt($(this).val())
      })
      base.val(price)
      total.val(user_text.val() * time_text.val() * base.val())
      // console.log(price)
    })
  }

  public revolutionSlider() {
    // @ts-ignore
    window.jQuery("#rev_slider_87_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1240,778,480",
      gridwidth:"1600,1600,778,480",
      gridheight:"900,900,450,300",
      minHeight:"",
      spinner:"spinner0",
      editorheight:"900,768,450,300",
      responsiveLevels:"1240,1240,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });

    // @ts-ignore
    window.jQuery("#rev_slider_1_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,778,480",
      gridwidth:"1600,1024,778,480",
      gridheight:"1000,768,500,400",
      spinner:"spinner0",
      editorheight:"1000,768,500,400",
      responsiveLevels:"1240,1024,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });

    // @ts-ignore
    window.jQuery("#rev_slider_2_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1240,778,480",
      gridwidth:"1500,1500,778,480",
      gridheight:"600,600,500,400",
      minHeight:"",
      spinner:"spinner0",
      editorheight:"600,768,400,400",
      responsiveLevels:"1240,1240,778,480",
      disableProgressBar:"on",
      parallax: {
        levels:[5,2,3,4,5,6,7,8,9,10,11,48,49,50,51,30],
        type:"scroll",
        origo:"slideCenter",
        speed:0,
        speedls:"1000ms"
      },
      sbtimeline: {
        set:true
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });

    // @ts-ignore
    window.jQuery("#rev_slider_3_1").show().revolution({
			jsFileLocation:"js/",
			sliderLayout:"fullwidth",
			visibilityLevels:"1240,1024,778,480",
			gridwidth:"1240,1024,778,480",
			gridheight:"900,768,500,500",
			minHeight:"",
			spinner:"spinner0",
			editorheight:"900,768,500,500",
			responsiveLevels:"1240,1024,778,480",
			disableProgressBar:"on",
			navigation: {
				onHoverStop:false
			},
			fallbacks: {
				allowHTML5AutoPlayOnAndroid:true
			},
    });
    
    // @ts-ignore
    window.jQuery("#rev_slider_4_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,778,480",
      gridwidth:"1600,1024,778,480",
      gridheight:"850,500,500,400",
      minHeight:"",
      spinner:"spinner0",
      editorheight:"850,500,500,400",
      responsiveLevels:"1240,1024,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });

    // @ts-ignore
    window.jQuery("#rev_slider_5_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1240,778,480",
      gridwidth:"1240,1240,778,480",
      gridheight:"450,450,400,400",
      minHeight:"",
      spinner:"spinner0",
      editorheight:"450,768,400,400",
      responsiveLevels:"1240,1240,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });

    // @ts-ignore
    window.jQuery("#rev_slider_6_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1240,778,480",
      gridwidth:"1600,1600,776,480",
      gridheight:"700,700,600,500",
      minHeight:"",
      spinner:"spinner0",
      editorheight:"700,768,600,500",
      responsiveLevels:"1240,1240,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });

    // @ts-ignore
    window.jQuery("#rev_slider_7_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1240,778,480",
      gridwidth:"1600,1600,778,480",
      gridheight:"700,700,550,500",
      minHeight:"",
      spinner:"spinner0",
      editorheight:"700,768,550,500",
      responsiveLevels:"1240,1240,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });

    // @ts-ignore
    window.jQuery("#rev_slider_8_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1240,778,480",
      gridwidth:"1600,1600,778,480",
      gridheight:"850,850,700,500",
      minHeight:"",
      spinner:"spinner0",
      editorheight:"850,768,700,500",
      responsiveLevels:"1240,1240,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });

    // @ts-ignore
    window.jQuery("#rev_slider_9_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1240,778,480",
      gridwidth:"1240,1240,778,480",
      gridheight:"1000,1000,600,550",
      minHeight:"",
      spinner:"spinner0",
      editorheight:"1000,768,600,550",
      responsiveLevels:"1240,1240,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });
  }
}
