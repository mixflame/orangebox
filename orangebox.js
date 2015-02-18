OrangeBox = {

  prepare_overlay: function() {
    $('.overlay').css('top', window.pageYOffset);
    $('.overlay').css('left', window.pageXOffset);
    $('.overlay').show();
  },

  lock_body: function() {
    $('body').css("width", "100%");
    $('body').css("height", "100%");
    $('body').css('overflow', 'hidden');
  },

  show_msgbox: function(msg, buttons, options) {
    if($('.orangeBox').size() == 0){
      $('body').prepend(Blaze.toHTML(Template.orangebox))
    }
    $('.orangeBoxWindow').css("display", "block");
    this.prepare_overlay();
    $('.orangeBox').addClass("orangeBox-show");
    $('.orangeBoxText').html(msg);
    $('.orangeCloseButton').click(this.hide_msgbox);
    if(buttons!=null){
      buttons.forEach(function(val, idx) {
        var buttonName = val[0];
        var buttonCallback = val[1];
        $('ul.orangeBoxButtons').append("<li><span class='" + buttonName.toLowerCase() + "'>"+buttonName+"</span></li>");
        $('.'+buttonName.toLowerCase()).click(buttonCallback);
      })
    }
    if(options!=null){
      if(options["noClose"] == true) {
        $('.orangeCloseButton').remove();
      }
    }
    this.lock_body();
  },

  hide_msgbox: function() {
    $('body').css("width", "");
    $('body').css("height", "");
    $('body').css('overflow', '');
    $('.orangeBox').removeClass("orangeBox-show");
    $('.orangeBoxWindow').css("display", "none");
    $('.overlay').hide();
    $('ul.orangeBoxButtons').html("");
    $('.orangeBox').remove();
    $('.overlay').remove();
  }

}