$(function() {
  var setLoggedIn = function(user_slug) {
    $(".user-login-user_slug").text(user_slug);
    $(".user-login").removeClass("user-login-false").addClass("user-login-true");
  }
  var setLoggedOut = function() {
    $(".user-login").removeClass("user-login-true").addClass("user-login-false");
  }


  $.getJSON("http://dashboard.cnpaas.io" + "/users/current.js?callback=?", function(user) {
    if (user && (user_slug = user.user_slug)) {
      setLoggedIn(user_slug);
    } else {
      setLoggedOut();
    }
  }).fail(function () {
    setLoggedOut();
  });
});
