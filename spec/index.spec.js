'use strict';

var upload = require('../');
var chalk = {
  red: jasmine.createSpy(),
  green: jasmine.createSpy(),
  orange: jasmine.createSpy()
};

describe('upload', function() {
  beforeEach(function() {
    
  });
  
  describe('when invoked', function() {
    
    describe('with invalid arguments', function() {
      it('should print error message', function() {
        upload();
        expect(chalk.red).toHaveBeenCalled();
      });
      
      it('should return false', function() {
        expect(upload()).toEqual(false);
        expect(upload(null)).toEqual(false);
        expect(upload('singleParam')).toEqual(false);
      });
    });
  
    describe('with valid arguments', function() {
      it('should create a new instance of Slack using token', function() {
        // Specs in here
      });
  
      it('should invoke uploadFile method of slack using config', function() {
        // Specs in here
      });
  
      it('should call the callback function thingy with error/data', function() {
    
      });
  
      it('should return through.obj thingy-ma-jiggy', function() {
    
      });
      
      // should print messages and stuff!
    });
    
    
  
    
  });
});
