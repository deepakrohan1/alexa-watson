//This will be to write a promise to getSongs from letFm

var http = require('http');


//Write a promise to return JSON

module.exports = (() => {

    return {
         getData : (link_get, searchBy) => {
             console.log('Inside Function');
            http.get(link_get, (res) => {
                const statusCode = res.statusCode;
                const contentType = res.headers['content-type'];

                let error;
                if (statusCode !== 200) {
                    error = new Error(`Request Failed.\n` +
                        `Status Code: ${statusCode}`);
                } else if (!/^application\/json/.test(contentType)) {
                    error = new Error(`Invalid content-type.\n` +
                        `Expected application/json but received ${contentType}`);
                }
                if (error) {
                    console.log(error.message);
                    // consume response data to free up memory
                    res.resume();
                    return;
                }

                res.setEncoding('utf8');
                let rawData = '';
                res.on('data', (chunk) => rawData += chunk);
                res.on('end', () => {
                    try {
                        let parsedData = JSON.parse(rawData);
                        console.log(parsedData);
                        console.log(parsedData['toptracks']['track'][0].name)

                    } catch (e) {
                        console.log(e.message);
                    }
                });
            }).on('error', (e) => {
                console.log(`Got error: ${e.message}`);
            });
        }
    }

})();