function onReady() {
  var $checkbox = $('input[type=checkbox]');

  $checkbox.click(function() {
    // $this will contain a reference to the checkbox
    var $this = $(this);

    var led = $(this).attr('id').slice(0,-4);
    var enable = $this.is(':checked') ? 'on' : 'off';
    $.get('/api/' + led + '/' + enable, function(data) {
      console.log(data);
    });
  });
};

$(document).ready( onReady );
