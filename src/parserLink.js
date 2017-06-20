/**
 * Created by rohan on 6/11/17.
 * Reads from the file using getLinksModule (Promise)
 * Once the promise is returned (JSON)
 *
 * A function with type and number is passed which calls this function
 * to dynamically generate an URL which describes the number and type of the file
 */

//TODO: Should we make this entire thing as an export module?
let fs = require('fs');
let http = require('http');
let linksModule = require('./getLinksModule');
let resultObject = {};
const LIMIT = '/limit=';
const TYPE_JSON = '/json';

    var getLink = function (type, qty) {

        linksModule.getLinksFromApple
            .then(function (fulfilled) {
                resultObject = fulfilled["APPLE_LINKS"][type]+LIMIT+qty+TYPE_JSON;
                console.log(resultObject);
                /**
                 * http get method is used get the JSON response from Apple API
                 */
                http.get(resultObject,  (res) => {
                    let statusCode = res.statusCode;
                    let contentType = res.headers['content-type'];

                    if(statusCode !== 200){
                        console.log("Something is wrong");
                    }

                    res.setEncoding('utf8');
                    let rawData = '';
                    res.on('data', (chunk) => rawData += chunk);
                    res.on('end', () => {
                        try {
                            let parsedData = JSON.parse(rawData);
                            console.log("Data Received");
                            /**
                             * Loop through the JSON data and get just the names
                             */
                            for(let i=0; i < parsedData['feed']['entry'].length; i ++) {
                                console.log(parsedData['feed']['entry'][i]['im:name']['label'])
                                resultObject.title = parsedData['feed']['entry'][i]['im:name']['label'];

                            }

                        } catch (e) {
                            console.log(e.message);
                        }
                    }).on('error',(e) => {
                        console.log('Error parsing data')
                    });

                });


            })
            .catch(function (error) {
                console.log(error.message)
            })

    };

    getLink("APPS", 10);






