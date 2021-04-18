import * as MODEL from "../model/model.js";

// removing home hero image
function init() {
  let currentHeroImage = "home";
  let currentNav = "home";

  // this is a click listener

  $("nav a").click(function (event) {
    let btnId = this.id;
    let contentID = btnId + "Content";

    // if/else statement for removing home hero image

    if (btnId == "home") {
      $(".hero")
        .removeClass(`${currentHeroImage}-hero-image`)
        .addClass(`${btnId}-hero-image`);
      currentHeroImage = btnId;
    } else {
      $(".hero").removeClass(`${currentHeroImage}-hero-image`);
      currentHeroImage = btnId;
    }

    if (btnId == "home") {
      $("nav").removeClass(`${currentNav}-white`)
      addClass(`${btnId}-white`);
      currentNav = btnId;
    } else {
      $("nav").removeClass(`${currentNav}-white');
      currentNav = btnId;
    

    MODEL.getPageContent(contentID);
  });
}

// this checks for all elements to be ready by the browser

$(document).ready(function () {
  init();
});
