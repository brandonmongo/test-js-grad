/**
 * Make the following POST request with either axios or node-fetch:

POST url: http://ambush-api.inyourarea.co.uk/ambush/intercept
BODY: {
    "url": "https://api.npms.io/v2/search/suggestions?q=react",
    "method": "GET",
    "return_payload": true
}

 *******

The results should have this structure:
{
    "status": 200.0,
    "location": [
      ...
    ],
    "from": "CACHE",
    "content": [
      ...
    ]
}

 ******

 *  With the results from this request, inside "content", count
 *  the number of packages that have a MAJOR semver version 
 *  greater than 10.x.x
 */

module.exports = async function countMajorVersionsAbove10() {
  // TODO

  return count
};


const fetch = require("node-fetch");

let url = "https://api.npms.io/v2/search/suggestions?q=react";

let jsondata;  

let vers = []


fetch(url).then(
        function(u){ return u.json();}
      ).then(
        function(json){
          jsondata = json;

          const isObject = function(i){
            if (i === null) {
              return false;
            }
            return (typeof i === 'object')
          }
          const objProps = function(obj) {
            for (let i in obj){
              if (isObject(obj[i])) {
                objProps(obj[i]);
              } else if (i === "version") {
                // console.log(obj[i])
                ve = obj[i]
                ve = ve.split('.')[0]
                // console.log(ve);
                if (ve > 10) {
                  vers.push(ve);
                }
                // vers.push(obj[i]);
                }
               else {
              //   console.log(i, obj[i]);
               }
            }
            return vers
          };
          
          
          vers = objProps(jsondata); 

          console.log(vers);
          count = vers.length
          console.log(count)
        });