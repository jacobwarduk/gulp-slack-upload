# gulp-slack-upload

Gulp plugin to upload files to [Slack](http://slack.com/).

## Usage

You will need an API key from [Slack Web API](https://api.slack.com/web).

```
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
