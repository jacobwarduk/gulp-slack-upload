'use strict';

var through = require('through2');
var Slack = require('node-slack-upload');
var gutil = require('gulp-util');

function upload(token, config) {
  var slack = new Slack(token);
  
  slack.uploadFile(config, function(error, data) {
    if (data && data.ok === true) {
      gutil.log(gutil.colors.green('Success (gulp-slack-upload): Uploaded ' + data.name));
    } else if (error) {
      gutil.log(gutil.colors.red('Error (gulp-slack-upload): ' + error));
    } else {
      gutil.colors.orange('Warning (gulp-slack-upload): No valid response')
    }
  });
  
  return through.obj(function(file, enc, callback) {
    return callback();
  })
}

module.exports = upload;
