import * as MODEL from "../model/model.js";

// this is a click listener

function init() {
  $("nav a").click(function (event) {
    let btnId = this.id;
    let contentID = btnId + "Content";

    MODEL.getPageContent(contentID);
  });
}

// this checks for all elements to be ready by the browser

$(document).ready(function () {
  init();
});
