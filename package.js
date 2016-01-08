Package.describe({
  name: "ckiely91:gridstack"
  summary: "Adds gridstack.js",
  version: "1.0.0",
  git: "https://github.com/ckiely91/meteor-gridstack"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.use('linto:jquery-ui', 'client');
  api.use('underscore', 'client');

  api.addFiles('gridstack.js', 'client');
  api.addFiles('gridstack.css', 'client');
});