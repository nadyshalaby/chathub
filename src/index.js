import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./fonts/flaticon.css";
import App from "./components";

ReactDOM.render(<App />, document.getElementById("root"));

/**
 * JQuery Part
 */
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $(".pass_show").append('<span class="ptxt">Show</span>');

  $(document).on("click", ".pass_show .ptxt", function() {
    $(this).text($(this).text() == "Show" ? "Hide" : "Show");

    $(this)
      .prev()
      .attr("type", function(index, attr) {
        return attr == "password" ? "text" : "password";
      });
  });
});
