ORANGEBOX

A simple library for message dropdowns.

Usage

Simply call:

```
show_msgbox("Description", [["Button Name", callback], ["Button #2", callback2]], {noClose: false});
```

It will insert itself into the dom and display itself with this call.


To hide all messageboxes

```
hide_msgbox();
```

It will destroy the messagebox div if this is called, so it can be rebuilt next time.