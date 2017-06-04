# gulp-slack-upload

[![NPM](https://nodei.co/npm/gulp-slack-upload.png?compact=true)](https://nodei.co/npm/gulp-slack-upload/)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Gulp plugin to upload files to [Slack](http://slack.com/).

## Installation
```
npm install --save-dev gulp-slack-upload
```

## Usage

You will need an API key from [Slack Web API](https://api.slack.com/web).

```
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

var slackUpload = require('gulp-slack-upload');
var slackApiKey = 'xoxo-0123456789-etc';

var slackUploadOptions = {
    file: fs.createReadStream(path.join(__dirname, 'gulp-build.log')),
    filetype: 'post',
    title: 'Gulp Build Results',
    initialComment: 'Results for the latest Gulp build',
    channels: '#gulp-builds'
}

gulp.task('upload:slack', function() {
    return gulp.src('./src')
        .pipe(someBuildTasks()) // Do some build tasks
        .pipe(slackUpload(slackApiKey, slackUploadOptions));
});
```
