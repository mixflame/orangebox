Package.describe({
  name: 'jsilvermdx:orangebox',
  version: '0.0.34',
  // Brief, one-line summary of the package.
  summary: 'A simple, lightweight message box library',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jsilverMDX/orangebox',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles(['orangebox.js', "orangebox.css", "orangebox.html", "cross.png"]);
  api.use(['templating'], 'client');
  api.export(['OrangeBox'], ['client']);
});