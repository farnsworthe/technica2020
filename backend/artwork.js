const axios = require("axios");

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

/*$(function (){
let endpoint = 'https://collectionapi.metmuseum.org'
let medInput = "Paintings"
let geoInput = "China"
let date1 = 100
let date2 = 1500*/


$.ajax({
    url: "https://collectionapi.metmuseum.org/public/collection/v1/search",
    type: "POST",
    dataType: "json",
    data: { medium: "Paintings", q: "art"},

    success: function(result)
    {
      console.log("AJAX Success:" + result);
      var obj = JSON.parse(result); //Response from the server (must be json)
      //obj.name; use dot notation to access the result parsed
    },
    error: function(error)
    {
      console.log("AJAX Error:" + error);
    }
  })