OrangeBox = {

  faded: false,

  lockBody: function() {
    $('body').css("width", "100%");
    $('body').css("height", "100%");
    $('body').css('overflow', 'hidden');
  },

  showMsg: function(options) {
    if($('.orangeBox').size() == 0){
      $('body').prepend(Blaze.toHTML(Template.orangebox))
    }
    $('.orangeBoxWindow').css("display", "block");
    $('.orangeBox-overlay').show();
    $('.orangeBox').addClass("orangeBox-show");
    $('.orangeBoxText').html(options['msg']);
    $('.orangeBoxTitle').html(options['title']);
    $('.orangeCloseButton').click(this.hideMsg);
    var buttons = options["buttons"]
    if(buttons!=null){
      _.map(buttons, function(val, key){
        var buttonName = key;
        var buttonCallback = val;
        var buttonClass = buttonName.toLowerCase().replace(/[^\w]/gi, '')
        $('ul.orangeBoxButtons').append("<li><span class='" + buttonClass + "'>"+buttonName+"</span></li>");
        $('.'+buttonClass).click(buttonCallback);
      });
    }
    if(options["noClose"] == true) {
      $('.orangeCloseButton').remove();
    }
    if(options["keyup"]!=null){
      $(window).keyup(options["keyup"]);
    }
    
	var buttonCount = $('.orangeBoxButtons > li').length; //count the buttons, if there's only one button, make it full width
	if (buttonCount == 1) {
		$('.orangeBoxButtons > li').css('width', '100%');
	}
    
    this.lockBody();
    var theme = options["theme"];
    if(theme){
      var height = theme["height"];
      if(height) $('.orangeBox').css('height', height);
      var width = theme["width"];
      if(width) $('.orangeBox').css('width', width);
      var backColor = theme["backColor"];
      if(backColor) $('.orangeBox').css('background', backColor);
      var font = theme["font"];
      if(font) $('.orangeBoxText').css('font-family', font);
      var fontSize = theme["fontSize"];
      if(fontSize) $('.orangeBoxText').css('font-size', fontSize);
      var fontColor = theme["fontColor"];
      if(fontColor) $('.orangeBoxText').css('color', fontColor);
      var buttonBorder = theme["buttonBorder"];
      if(buttonBorder) $('.orangeBoxWindow ul li span').css("border", buttonBorder);
      var buttonTextColor = theme["buttonTextColor"];
      if(buttonTextColor) $('.orangeBoxWindow ul li span').css('color', buttonTextColor);
      var titleFont = theme["titleFont"];
      if(titleFont) $('.orangeBoxTitle').css('font-family', titleFont);
      var titleFontColor = theme["titleFontColor"];
      if(titleFontColor) $('.orangeBoxTitle').css('color', titleFontColor);
      var titleFontSize = theme["titleFontSize"];
      if(titleFontSize) $('.orangeBoxTitle').css('font-size', titleFontSize);
    }
    var boxHeight = $('.orangeBox').outerHeight();
    $('.orangeBox').css('margin-top', "-" + boxHeight / 2 + "px");
    var boxWidth = $('.orangeBox').outerWidth();
    $('.orangeBox').css('margin-left', "-" + boxWidth / 2 + "px");
    if(options["fade"]==true){
      $('.orangeBox').hide();
      $('.orangeBox').fadeIn('slow');
      OrangeBox.faded = true;
    } else {
      OrangeBox.faded = false;
    }
  },

  hideMsg: function() {
    if(OrangeBox.faded==true){
      $('.orangeBox').fadeOut('slow', function() {
        OrangeBox.destroy()
      });
    } else {
      OrangeBox.destroy();
    }
  },

  destroy: function() {
    $(window).keyup(null);
    $('body').css("width", "");
    $('body').css("height", "");
    $('body').css('overflow', '');
    $('.orangeBox').removeClass("orangeBox-show");
    $('.orangeBoxWindow').css("display", "none");
    $('.orangeBox-overlay').hide();
    $('ul.orangeBoxButtons').html("");
    $('.orangeBox').remove();
    $('.orangeBox-overlay').remove();
  }

}