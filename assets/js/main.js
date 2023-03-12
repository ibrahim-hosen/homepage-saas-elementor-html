(function($){
      var swiper = new Swiper(".testimonial", {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        spaceBetween: 60,
        slidesPerGroup: 1,
        hashNavigation: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      });
        $(".humberger").on('click', function(){
        $("body .nav-menu-item").toggleClass('opener');
      });
 /////Menu
      $(".humberger").on('click', function(){
        $(".dropdown-menu-irem").toggleClass('opener');
      });
})(jQuery);
