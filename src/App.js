import React, {Fragment, useEffect} from "react";
// import Instafeed from "instafeed.js";
import "./assets/css/bootstrap.css";
import "./assets/css/main.css";
import "./assets/css/base.css";
// import "./assets/css/flexslider.css";
import HomePage from "./components/HomePage/HomePage";

function App() {
  useEffect(() => {
    window.jQuery(".slider").flexslider({
      animation: "fade",
      slideshow: true,
      directionNav: true,
      controlNav: false,
      pauseOnAction: false,
      animationSpeed: 500,
    });

    window.jQuery(".review-slider").flexslider({
      animation: "fade",
      slideshow: true,
      directionNav: false,
      controlNav: true,
      pauseOnAction: false,
      animationSpeed: 1000,
    });

    // Mobile menu list
    var mobileBtn = window.jQuery(".mobile-but");
    var nav = window.jQuery(".main-nav ul");
    // var navHeight = nav.height();

    window.jQuery(mobileBtn).on("click", function () {
      window.jQuery(".toggle-mobile-but").toggleClass("active");
      nav.slideToggle();
      window.jQuery(".main-nav li a").addClass("mobile");
      return false;
    });

    window.jQuery(window).resize(function () {
      var w = window.jQuery(window).width();
      if (w > 320 && nav.is(":hidden")) {
        nav.removeAttr("style");
        window.jQuery(".main-nav li a").removeClass("mobile");
      }
    });

    window.jQuery(".main-nav li a").on("click", function () {
      if (window.jQuery(this).hasClass("mobile")) {
        nav.slideToggle();
        window.jQuery(".toggle-mobile-but").toggleClass("active");
      }
    });

    window.jQuery(".block-tabs li").on("click", function () {
      if (!window.jQuery(this).hasClass("active")) {
        var tabNum = window.jQuery(this).index();
        var nthChild = tabNum + 1;
        window.jQuery(".block-tabs li.active").removeClass("active");
        window.jQuery(this).addClass("active");
        window.jQuery(".block-tab li.active").removeClass("active");
        window.jQuery(".block-tab li:nth-child(" + nthChild + ")").addClass("active");
      }
    });

    // settup images as a css background
    window.jQuery(".background-img").each(function () {
      var path = window.jQuery(this).children("img").attr("src");
      window
        .jQuery(this)
        .css("background-image", 'url("' + path + '")')
        .css("background-position", "initial");
    });

    // zoom inages on hover
    window.jQuery(".block-gallery li").on("mouseenter", function () {
      window.jQuery(this).closest(".gallery").find(".block-gallery li").removeClass("active");
      window.jQuery(this).addClass("active");
    });

    window.jQuery(".block-ticket").on("mouseenter", function () {
      window.jQuery(this).closest(".tickets").find(".block-ticket").removeClass("active");
      window.jQuery(this).addClass("active");
    });

    // zoom inages on hover
    window.jQuery(".venobox").venobox({
      titleattr: "data-title",
      numeratio: true,
    });
  });
  return (
    <Fragment>
      <HomePage />
    </Fragment>
  );
}

export default App;
