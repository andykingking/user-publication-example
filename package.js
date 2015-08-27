Package.describe({
  name: 'user-publication',
  version: '0.0.1',
  summary: 'Used to show an issue with Meteor user publications',
  git: 'git://github.com/andykingking/user-publication-example',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
});

Package.onTest(function(api) {
  api.use([
    'sanjo:jasmine@0.18.0',
    'user-publication',
    'autopublish',
    'accounts-password'
  ]);
  api.addFiles('tests/user-publication-tests.js', 'client');
  api.addFiles('tests/fixtures.js', 'server');
});
