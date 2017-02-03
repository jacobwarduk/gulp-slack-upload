'use strict';

var through = require('through2');
var Slack = require('node-slack-upload');
var fs = require('fs');
var path = require('path');

function upload(token, config) {
  var slack = new Slack(token);
  
  slack.uploadFile(config, function error(error, data) {
    if (error) {
      // LOG OUT ERROR
      console.log('Error: ', error);
    } else {
      // LOG OUT DETAILS
      console.log('Success: ', data);
    }
  });
  
  return through.obj(function(file, enc, callback) {
    return callback();
  })
}

module.exports = upload;
