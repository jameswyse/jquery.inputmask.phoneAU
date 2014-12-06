(function ($) {

  //
  // Log function
  //
  function log (message) {
    if(console && console.warn) {
      console.warn(message);
    }
  }

  //
  // Warn if jQuery was not found
  //
  if(typeof $ === 'undefined') {
    return log('jQuery was not found');
  }

  //
  // Warn if jQuery.inputmask was not found
  //
  if(typeof $.inputmask === 'undefined') {
    return log('jquery.inputmask plugin was not found');
  }

  //
  // Add 'phone' alias
  //
  $.extend($.inputmask.defaults.aliases, {
    phoneAU: {
      mask: '(ZL #### ####)|(ZM## ### ###)',
      placeholder: '_',
      greedy: false,
      autoUnmask: true,
      removeMaskOnSubmit: true,
      clearMaskOnLostFocus: true,
      definitions: {
        '#': {
          validator: '[0-9]',
          cardinality: 1
        },
        'Z': {
          validator: '0',
          cardinality: 1
        },
        'M': {
          validator: '4',
          cardinality: 1
        },
        'L': {
          validator: '(2|3|7|8)',
          cardinality: 1
        }
      },
      oncomplete: function () {
        var $input = $(this);

        $input
          .removeClass('invalid')
          .addClass('valid');
      },
      onincomplete: function () {
        var $input = $(this);

        if($input.val().length) {
          $input
            .removeClass('valid')
            .addClass('invalid');
        }
      },
      oncleared: function () {
        $(this).removeClass('valid invalid');
      }
    }
  });

})(jQuery);
