
(function ($) {
   $('.menu-bar').on('click', function () {
      $('.mobile-menu').toggleClass('triggered');
      $('.menu').toggleClass('triggered');
   });
})(jQuery);