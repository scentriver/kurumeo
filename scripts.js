/*!
    * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
 
    
        ScrollReveal().reveal('.box1', { delay: 600, distance: '50px', opacity: 0 });
        ScrollReveal().reveal('.box2', { delay: 900, distance: '50px', opacity: 0 });
        ScrollReveal().reveal('.box3', { delay: 1200, distance: '50px', opacity: 0 });
        ScrollReveal().reveal('.box4', { delay: 1500, distance: '50px', opacity: 0 });
        


      
        ScrollReveal().reveal('.demand1', { delay: 700, distance: '50px', origin: 'left', duration: 1500 });
        ScrollReveal().reveal('.demand2', { delay: 1000, distance: '50px', origin: 'left', duration: 1500});
        ScrollReveal().reveal('.demand3', { delay: 1300, distance: '50px', origin: 'left', duration: 1500 });
        ScrollReveal().reveal('.demand4', { delay: 1600, distance: '50px', origin: 'left', duration: 1500 });
        ScrollReveal().reveal('.demand5', { delay: 1900, distance: '50px', origin: 'left', duration: 1500 });
        ScrollReveal().reveal('.demand6', { delay: 2200, distance: '50px', origin: 'left', duration: 1500});


        ScrollReveal().reveal('.num1', { delay: 700, distance: '50px', origin: 'left', duration: 1000});
        ScrollReveal().reveal('.num2', { delay: 900, distance: '50px', origin: 'left', duration: 1000});
        ScrollReveal().reveal('.num3', { delay: 1100, distance: '50px', origin: 'left', duration: 1000});


        // ScrollReveal().reveal('.', { delay: 700, distance: '50px', origin: 'left', duration: 2000});
        // ScrollReveal().reveal('.demand6', { delay: 700, distance: '50px', origin: 'left', duration: 2000});
        // ScrollReveal().reveal('.demand6', { delay: 700, distance: '50px', origin: 'left', duration: 2000});


        ScrollReveal().reveal('.soudan1', { delay: 700, distance: '50px', origin: 'left', duration: 2000});
        ScrollReveal().reveal('.soudan2', { delay: 1000, distance: '50px', origin: 'left', duration: 2000});
        ScrollReveal().reveal('.soudan3', { delay: 1300, distance: '50px', origin: 'left', duration: 2000});
        ScrollReveal().reveal('.soudan4', { delay: 1600, distance: '50px', origin: 'left', duration: 2000});

        ScrollReveal().reveal('.it1', { delay: 700, distance: '50px', origin: 'left', duration: 2000});
        ScrollReveal().reveal('.it2', { delay: 1000, distance: '50px', origin: 'left', duration: 2000});
        ScrollReveal().reveal('.it3', { delay: 1300, distance: '50px', origin: 'left', duration: 2000});
        ScrollReveal().reveal('.it4', { delay: 1600, distance: '50px', origin: 'left', duration: 2000});
        ScrollReveal().reveal('.it5', { delay: 1900, distance: '50px', origin: 'left', duration: 2000});
        ScrollReveal().reveal('.it6', { delay: 2200, distance: '50px', origin: 'left', duration: 2000});
        ScrollReveal().reveal('.it7', { delay: 2500, distance: '50px', origin: 'left', duration: 2000});
        ScrollReveal().reveal('.it8', { delay: 2800, distance: '50px', origin: 'left', duration: 2000});
        ScrollReveal().reveal('.it9', { delay: 3100, distance: '50px', origin: 'left', duration: 2000});
   

        ScrollReveal().reveal('.spin', { delay: 1000, distance: '50px', scale: '2' });
   
    

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
      // Closes responsive menu when a scroll trigger link is clicked

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  
