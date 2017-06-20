/**
 * Created by rohan on 6/10/17.
 */
let fs = require('fs');


module.exports = (() => {

    return {
         getLinksFromApple : new Promise((resolve, reject) => {
             var jsonLinks;
             console.log("Inside the ReadFile Method trying to read the file");
             fs.readFile(__dirname + "/links.json", function read(err, data) {
                if (err) {
                    var reason = new Error("Unable to read file");
                    reject(reason);
                }
                //var content = data;
                jsonLinks = JSON.parse(data);
                console.log("Read Successfull");
                // console.log(jsonLinks);
                // return jsonLinks;
                 resolve(jsonLinks);
             });


        }),
    }
})();
