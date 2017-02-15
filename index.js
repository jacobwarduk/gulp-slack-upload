'use strict';

var through = require('through2');
var Slack = require('node-slack-upload');
var gutil = require('gulp-util');
var errors = require('./errors');

function upload(token, config) {
  if (!token || !config) {
    gutil.log(gutil.colors.red('Error (gulp-slack-upload): token and config arguments are required'));
    return false;
  }
  
  var slack = new Slack(token);
  
  slack.uploadFile(config, function(error, data) {
    if (data && data.ok === true) {
      gutil.log(gutil.colors.green('Success (gulp-slack-upload): Uploaded ' + data.file.name));
    } else if (error) {
      gutil.log(gutil.colors.red('Error (gulp-slack-upload): ' + errors.hasOwnProperty(error) ? errors[error] : error));
    } else {
      gutil.log(gutil.colors.orange('Warning (gulp-slack-upload): No valid response'))
    }
  });
  
  return through.obj(function(file, enc, callback) {
    return callback();
  })
}

module.exports = upload;
