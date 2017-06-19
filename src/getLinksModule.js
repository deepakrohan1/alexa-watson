/**
 * Created by rohan on 6/10/17.
 */
let fs = require('fs');


module.exports = (() => {

    return {
         getLinksFromApple : () => {
            fs.readFile(__dirname + "/links.json", function read(err, data) {
                if (err) {
                    throw err;
                }
                content = data;
                var jsonLinks = JSON.parse(data);
                // console.log(jsonLinks);
                return jsonLinks;
            });
        }
    }
})();
