"use strict";

const httpStatus = require("http-status-codes"),
  htmlContentType = {
    "Content-Type": "text/html"
  },

  //a routes object to store routes mapped to POST and GET requests.
  routes = {
    GET: {
      //GET route for localhost:3000/info
      "/info": (req, res) => {
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/plain"
        });
        res.end("Welcome to the Info Page!");
      }
    },
    POST: {}
  };

//This function accesses the routes object by the request’s HTTP method,
//using routes[req.method], and then finds the corresponding callback
//function through the request’s target URL, using [req.url]. If you make a
//GET request for the /index.html URL path, for example, routes["GET"]["/index.html"]
//gives you the callback function predefined in your routes object.
exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
      res.end("<h1>No such file exists</h1>");
    }
  } catch (ex) {
    console.log("error: " + ex);
  }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
