$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

//testimonial carousel

$('#testimonial_box').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
})

//case study carousel

$('#case_study_box').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText: ["<img src='assets/img/icon.png'>", "<img src='assets/img/icon.png'>"],
  dots: false,
  margin: 30,
  loop:false,
  navRewind:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:4
      }
  }
})
