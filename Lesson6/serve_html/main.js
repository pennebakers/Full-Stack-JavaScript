"use strict";

//Creating the port in which we will view it on our local host
//importing the modules http, httpStatus and fs
const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs");

//getting the url from the views folder
const getViewUrl = url => {
  return `views${url}.html`;
};


//Creating HTTP server and listening to the port we declared above
http
  //creating the server
  .createServer((req, res) => {
    //assigning the viewUrl to the getViewUrl function to get the URL being called
    let viewUrl = getViewUrl(req.url);

    //reaing in the file
    fs.readFile(viewUrl, (error, data) => {
      //checking if the url is valid
      if (error) {
        //if file isnt found, give it a status code while displaying
        //file not found on the page
        res.writeHead(httpStatus.NOT_FOUND);
        res.write("<h1>ERROR 404 - FILE NOT FOUND</h1>");
      } else {
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/html"
        });

        //writes the data from the html page
        res.write(data);
      }
      //ends the response
      res.end();
    });
  })
  //listen to the port for any incoming data
  .listen(port);

console.log(`The server has started and is listening on port number: ${port}`);
