show_msgbox = function(msg, buttons, options) {
  $('.orangeBoxWindow').css("display", "block");
  $('.overlay').show();
  $('.orangeBox').addClass("orangeBox-show");
  $('.orangeBoxText').html(msg);
  $('.icon-close').click(hide_msgbox);
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
      $('.icon-close').remove();
    }
  }
}

hide_msgbox = function() {
  $('.orangeBox').removeClass("orangeBox-show");
  $('.orangeBoxWindow').css("display", "none");
  $('.overlay').hide();
  $('ul.orangeBoxButtons').html("");
}