---
---

$ ->
  $(window).resize ->
    if $('.navbar-collapse.collapse').hasClass('in')
      $('.navbar-header .navbar-toggle').trigger('click')
    return
  return
