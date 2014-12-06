var test = require('tape');
var $    = window.jQuery = require('jquery');

// Load Plugins
require('jquery.inputmask');
require('./src/phoneAU.js');

function createInput (val) {
  $('body').html('<input type="tel" id="tel">');

  return $('#tel')
    .inputmask('phoneAU')
    .val(val || '')
    .blur();
}

function createTest (name, opts) {
  return test(name, function (t) {
    var $tel = createInput(opts.input);

    t.equal($tel.length, 1, 'Mask is initialised correctly');
    t.equal($tel.inputmask('getemptymask').join(''), '__ ____ ____', 'Empty mask is correct');
    t.false($tel.inputmask('hasMaskedValue'), 'Returned value is not masked');

    if(typeof opts.display !== 'undefined') {
      t.equal($tel.get(0).value, opts.display, 'Masked value is displayed correctly');
    }

    if(typeof opts.output !== 'undefined') {
      t.equal($tel.inputmask('unmaskedvalue'), opts.output, 'Unmasked value is correct');
      t.equal($tel.val(), opts.output, 'el.val() returns unmasked input');
    }

    return opts.extra ? opts.extra(t, $tel) : t.end();
  });
}

createTest('Landline Number (Complete)', {
  input:'02123 456 78',
  output: '0212345678',
  display: '02 1234 5678',
  extra: function(t, $tel) {
    t.true($tel.inputmask('isComplete'), 'Value is complete');
    t.end();
  }
});

createTest('Landline Number (Incomplete)', {
  input:'02123 456',
  output: '02123456',
  display: '02 1234 56__',
  extra: function(t, $tel) {
    t.false($tel.inputmask('isComplete'), 'Value is incomplete');
    t.end();
  }
});

createTest('Mobile Number (Complete)', {
  input:'0401 234 567',
  output: '0401234567',
  display: '0401 234 567',
  extra: function(t, $tel) {
    t.true($tel.inputmask('isComplete'), 'Value is complete');
    t.end();
  }
});

createTest('Mobile Number (Incomplete)', {
  input:'0401 234 5',
  output: '04012345',
  display: '0401 234 5__',
  extra: function(t, $tel) {
    t.false($tel.inputmask('isComplete'), 'Value is incomplete');
    t.end();
  }
});

createTest('Invalid Number', {
  input:'what is this i don\'t even. $%@#$@#%``___()*',
  output: '',
  display: '',
  extra: function(t, $tel) {
    t.false($tel.inputmask('isComplete'), 'Value is incomplete');
    t.end();
  }
});

test('Done!', function (t) {
  t.end();
  setTimeout(function () {
    window.close();
  });
});
