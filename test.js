const events = require('events')
var eventEmitter = new events.eventEmitter();

// listener #1
    var listener1 = function listener1() {
    console.log('listener1 executed');
}
var listener2 = function listener2() {
    console.log('listener2 executed');
}
