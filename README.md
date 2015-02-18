ORANGEBOX

A simple library for message dropdowns.

Demo: http://orangebox-demo.meteor.com

Usage

Simply call:

```
OrangeBox.showMsg("Description", {"Button Name": callback, "Button #2": callback2}, {noClose: false});
```

It will insert itself into the dom and display itself with this call.


To hide all messageboxes

```
OrangeBox.hideMsg();
```

It will destroy the messagebox div if this is called, so it can be rebuilt next time.