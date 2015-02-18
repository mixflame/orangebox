OrangeBox = {

  prepareOverlay: function() {
    $('.overlay').css('top', window.pageYOffset);
    $('.overlay').css('left', window.pageXOffset);
    $('.overlay').show();
  },

  lockBody: function() {
    $('body').css("width", "100%");
    $('body').css("height", "100%");
    $('body').css('overflow', 'hidden');
  },

  showMsg: function(msg, buttons, options) {
    if($('.orangeBox').size() == 0){
      $('body').prepend(Blaze.toHTML(Template.orangebox))
    }
    $('.orangeBoxWindow').css("display", "block");
    this.prepareOverlay();
    $('.orangeBox').addClass("orangeBox-show");
    $('.orangeBoxText').html(msg);
    $('.orangeCloseButton').click(this.hideMsg);
    if(buttons!=null){
      _.map(buttons, function(val, key){
        var buttonName = key;
        var buttonCallback = val;
        $('ul.orangeBoxButtons').append("<li><span class='" + buttonName.toLowerCase() + "'>"+buttonName+"</span></li>");
        $('.'+buttonName.toLowerCase()).click(buttonCallback);
      });
    }
    if(options!=null){
      if(options["noClose"] == true) {
        $('.orangeCloseButton').remove();
      }
    }
    this.lockBody();
  },

  hideMsg: function() {
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