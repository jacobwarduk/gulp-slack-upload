'use strict';

var upload = require('../');
console.log(upload);

describe('upload', function() {
  // Set up in here
  
  describe('when invoked', function() {
  
    it('should confirm both token and config arguments are passed', function() {
      expect(upload()).toEqual(false);
      expect(upload(null)).toEqual(false);
      expect(upload('singleParam')).toEqual(false);
    });
  
    it('should confirm valid token', function() {
      // Specs in here
      
    });
  
    it('should confirm valid config', function() {
      // Specs in here
    });
  
    it('should create a new instance of Slack using token', function() {
      // Specs in here
    });
    
    it('should invoke uploadFile method using config', function() {
      // Specs in here
    });

    it('should return through.obj thingy-ma-jiggy', function() {
  
    });
  });
});
