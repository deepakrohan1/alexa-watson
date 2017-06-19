/**
 * Created by rohan on 6/11/17.
 */
let fs = require('fs');
let http = require('http');
let linksModule = require('./getLinksModule');
let resultObject = {};

    http.get("http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topsongs/limit=10/json",  (res) => {
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
                console.log(parsedData);
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




