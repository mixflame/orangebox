ORANGEBOX

A simple library for message dropdowns.

Demo: http://orangebox-demo.meteor.com

Usage

Simply call:

```
OrangeBox.showMsg({msg: "Description", buttons: {"Button Name": callback, "Button #2": callback2}, noClose: false, keyup: keyupFunction});
```

It will insert itself into the dom and display itself with this call. The noClose option allows enabling or disabling the X button on the message box. keyup allows you to add some code to close if enter is pressed.

```
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

To hide all messageboxes

```
OrangeBox.hideMsg();
```

It will destroy the messagebox div if this is called, so it can be rebuilt next time.