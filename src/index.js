var Alexa = require('alexa-sdk');
var getLinks = require('./getLinksModule');

const secretId = '133d88843e926be0643f385fbfcb8e14';
let searchString = 'tylor swift';
let numberOfEntries = '10'
let linkGetTop = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+searchString+'&api_key='+
    secretId+'&format=json';


    getLinks.getLinksFromApple();

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

// var handlers = {
//     'LaunchRequest': function () {
//        this.attributes['speechOutput']= this.t("WELCOME_MESSAGE", this.t("SKILL_NAME"));
//         this.attributes['repromptSpeech'] = this.t('WELCOME_REPROMPT');
//         this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
//     },
//
//     'RecipieIntent': function () {
//         this.emit('SayHello');
//     },
//
//     'SayHello': function () {
//         this.emit(':tell', 'Hello World!');
//     },
//     //AMAZON Own Intents to help
//
//     'AMAZON.HelpIntent': function () {
//         this.attributes['speechOutput'] = this.t("HELP_MESSAGE");
//         this.attributes['repromptSpeech'] = this.t("HELP_REPROMPT");
//         this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
//     },
//     'AMAZON.RepeatIntent': function () {
//         this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
//     },
//     'AMAZON.StopIntent': function () {
//         this.emit('SessionEndedRequest');
//     },
//     'AMAZON.CancelIntent': function () {
//         this.emit('SessionEndedRequest');
//     },
//     'SessionEndedRequest':function () {
//         this.emit(':tell', this.t("STOP_MESSAGE"));
//     },
//     'Unhandled': function () {
//         this.attributes['speechOutput'] = this.t("HELP_MESSAGE");
//         this.attributes['repromptSpeech'] = this.t("HELP_REPROMPT");
//         this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
//     }
// };
//
//
//     var languageStrings = {
//         'en' : {
//             'translation' : {
//                 'SKILL_NAME': 'BayMax',
//                 'WELCOME_MESSAGE': 'Welcome to %s. You can ask questions like , what\'s the latest album of a singer, ' +
//                                     'Get the top list of songs.',
//                 'WELCOME_REPROMPT': 'Please give an instruction',
//                 "DISPLAY_CARD_TITLE": "%s  - Recipe for %s.",
//                 "HELP_MESSAGE": "You can ask questions such as, what\'s the recipe, or, you can say exit...Now, what can I help you with?",
//                 "HELP_REPROMPT": "You can say things like, what\'s the recipe, or you can say exit...Now, what can I help you with?",
//                 "STOP_MESSAGE": "Goodbye!",
//                 "RECIPE_REPEAT_MESSAGE": "Try saying repeat.",
//                 "RECIPE_NOT_FOUND_MESSAGE": "I\'m sorry, I currently do not know ",
//                 "RECIPE_NOT_FOUND_WITH_ITEM_NAME": "the recipe for %s. ",
//                 "RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME": "that recipe. ",
//                 "RECIPE_NOT_FOUND_REPROMPT": "What else can I help with?"
//
//
//
//
//             }
//         }
//     }
// }