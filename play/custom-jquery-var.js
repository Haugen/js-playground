'use strict';

// Learning a bit more about including jQuery. Here we have an IIFE, where we
// include jQuery as a whole object. We can then name our function if we want, or
// use it anonymously, and then pass an argument. This argument will be the new
// variable whith which to use jQuery with.
jQuery(function jQueryFunc(_custom_) {
  _custom_('#headline').click(function() {
    _custom_('#headline').html(Math.random());
  });
})(jQuery);
