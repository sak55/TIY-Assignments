

var assert = require('assert');

var events = require('../apis/github/users/sak55/events.json');

function answer(){
    return {
        'total': events.length
        'PushEvent': {
        
    };
    };
}

console.log(events.length);
var theAnswer = answer();

    it('should have events', function () {
        assert(events);
    });
    it('should have answer', function () {
        assert(answer);
    });
    it('should have a length', function () {
        assert(events.length === 30);
    });
    it('should return the length of events when calling answer', function(){
        assert.equal(theAnswer.total, 30); 
    });

    it('should have "pushEvent"', function(){
        assert(theAnswer.PushEvent);
    });

//function answer(){
//  return {
//  'total': events.length,
//  };
//} // END answer
//
//console.log(answer());
//
//describe('the setup', function(){
//    it('should have events', function(){
//        assert(events);
//    });
//    it('should return an "answer" events', function(){
//        assert(answer);
//        assert(typeof answer == 'function');
//    });
//});
//
//describe('the answer', function(){
//    var theAnswer = answer();
//    
//    it ('should have 30 total events', function(){
//        assert(theAnswer.total === 30);
//    });
//    
//    
//    it('should have some "PushEvent" entries', function(){
//        assert(theAnswer.PushEvents.total);
//    });
//});