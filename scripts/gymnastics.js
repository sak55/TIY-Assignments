

var assert = require('assert');

var events = require('../apis/github/users/sak55/events.json');


function answer(){
    var pushEvents = events.filter(function(item){
        return item.type =='PushEvent';
    });
    
    var payload = pushEvents.filter(function(item){
        return item.type =='payload';
    });
    
    console.log(payload);
//    var days = events.filter(function(item){
//        return item.type == 'updated_at';
//    });
    
    return {
        'total': events.length,
        'PushEvent': {
            'total' : pushEvents.length
//            'avgpurrday': {
//                'total': pushEvents.length,
//            }
        }
        }
    console.log(pushEvents.length);
    }
    


answer();

console.log(answer());
var theAnswer = answer();

    it('should have events', function () {
        assert(events);
    });
    it('should have answer', function () {
        assert(answer);
        assert(events.length === 30);
    });
        it('should return the length of events when calling answer', function(){
        assert.equal(theAnswer.total, 30); 
    });

    it('should have "pushEvent" and has a total count of push', function(){
        assert(theAnswer.PushEvent);
        assert(theAnswer.PushEvent.total);
    });
