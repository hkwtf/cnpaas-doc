---
---

$(function() {
  var setLoggedIn = function(user_slug) {
    $(".user-login-user_slug").text(user_slug);
    $(".user-login").removeClass("user-login-false").addClass("user-login-true");
  }
  var setLoggedOut = function() {
    $(".user-login").removeClass("user-login-true").addClass("user-login-false");
  }

  $.getJSON("{{ site._env.dashboard_url }}" + "/u/current.js?callback=?", function(user) {
    if (user) {
      var user_slug = user.user_slug;
      $("head").append("<meta name='csrf-param' content='" + user["csrf-param"] + "'/>");
      $("head").append("<meta name='csrf-token' content='" + user["csrf-token"] + "'/>");
      setLoggedIn(user_slug);
    } else {
      setLoggedOut();
    }

  }).fail(function () {
    setLoggedOut();
  });
});
