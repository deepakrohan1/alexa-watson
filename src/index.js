var Alexa = require('alexa-sdk');
var topSongs = require('./getSongs');

const secretId = '133d88843e926be0643f385fbfcb8e14';
let searchString = 'tylor swift';
let numberOfEntries = '10'
let linkGetTop = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+SEARCH_STRING+'&api_key='+
    secretId+'&format=json';


    topSongs.getData(searchString, linkGetTop);

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },

    'HelloWorldIntent': function () {
        this.emit('SayHello');
    },

    'SayHello': function () {
        this.emit(':tell', 'Hello World!');
    }
}