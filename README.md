ORANGEBOX

A simple library for message dropdowns.

Demo: http://orangebox-demo.meteor.com

Usage

Simply call:

```javascript
OrangeBox.showMsg({title: "Title", msg: "Description", buttons: {"Button Name": callback, "Button #2": callback2}, noClose: false, keyup: keyupFunction});
```

It will insert itself into the dom and display itself with this call. The noClose option allows enabling or disabling the X button on the message box. keyup allows you to add some code to close if enter is pressed.

```javascript
window.alert = function(msg) {
  OrangeBox.showMsg({
    msg: msg, 
    buttons: {"Okay": OrangeBox.hideMsg}, 
    noClose: true, 
    keyup: function(event) {
      if (event.which === 13) {
        OrangeBox.hideMsg();
      }
    }
  });
}
```

To theme the OrangeBox:

```javascript
var themeObj = {
  backColor: '#000000', //background color
  fontColor: '#FFFFFF', //font color
  font: "serif", //font
  fontSize: "10px", //font size
  height: "100px", //window height
  width: "200px", //window width
  buttonTextColor: "white", //button text color
  buttonBorder: "1px solid #333" //button border
  titleFont: "verdana", // title font
  titleFontColor: "white", // title font color
  titleFontSize: "16px" // title font size
}
OrangeBox.showMsg({msg: "Description", theme: themeObj, buttons: {"Button Name": callback, "Button #2": callback2}, noClose: false, keyup: keyupFunction});
```

To add a fade in, use:

```
OrangeBox.showMsg({fade: true, msg: "Example message"});
```

To hide all messageboxes

```javascript
OrangeBox.hideMsg();
```

It will destroy the messagebox div if this is called, so it can be rebuilt next time.