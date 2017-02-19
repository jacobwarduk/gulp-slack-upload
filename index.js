'use strict';

var through = require('through2');
var Slack = require('node-slack-upload');
var chalk = require('chalk');
var errors = require('./errors');

function upload(token, config) {
  if (!token || !config) {
    chalk.red('Error (gulp-slack-upload): token and config arguments are required');
    return false;
  }
  
  var slack = new Slack(token);
  
  slack.uploadFile(config, function(error, data) {
    if (data && data.ok === true) {
      chalk.green('Success (gulp-slack-upload): Uploaded ' + data.file.name);
    } else if (error) {
      chalk.red('Error (gulp-slack-upload): ' + errors.hasOwnProperty(error) ? errors[error] : error);
    } else {
      chalk.orange('Warning (gulp-slack-upload): No valid response');
    }
  });
  
  return through.obj(function(file, enc, callback) {
    return callback();
  })
}

module.exports = upload;
