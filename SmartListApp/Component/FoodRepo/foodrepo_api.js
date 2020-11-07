var request = require('request');

var headers = {
    'Content-Type': 'application/vnd.api+json',
    'Accept': 'application/json',
    'Authorization': 'Token token="d1ece869991df2c072511162c5cdd481"'
};

var options = {
    url: 'https://www.foodrepo.org/api/v3/products/2663',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

function anan(){
  return(request(options, callback))};

  export {anan};
