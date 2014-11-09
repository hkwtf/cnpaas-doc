---
---

$(function() {
  var setLoggedIn = function(user_slug) {
    $(".user-login-user_slug").text(user_slug);
    $(".user-login").removeClass("user-login-false").addClass("user-login-true");
    $("a.brand").attr("href", "{{ site._env.dashboard_url }}")
  }
  var setLoggedOut = function() {
    $(".user-login").removeClass("user-login-true").addClass("user-login-false");
    $("a.brand").attr("href", "{{ site._env.www_url }}")
  }


  $.getJSON("{{ site._env.dashboard_url }}" + "/users/current.js?callback=?", function(user) {
    if (user && (user_slug = user.user_slug)) {
      setLoggedIn(user_slug);
    } else {
      setLoggedOut();
    }

    var csrfParam, csrfToken;
    if (csrfParam = user["csrf-param"]) {
      $("head").append("<meta name='csrf-param' content='" + csrfParam + "'/>");
    }
    if (csrfToken = user["csrf-token"]) {
      $("head").append("<meta name='csrf-token' content='" + csrfToken + "'/>");
    }

  }).fail(function () {
    setLoggedOut();
  });
});
