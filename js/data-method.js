$(function() {
  $("a[data-method]").click(function (e) {
    var link = $(this);
    if (link.data("method")) {
      var href   = link.attr("href"),
          method = link.data("method"),
          target = link.attr("target"),
          csrfParam = $("meta[name=csrf-param]").attr("content"),
          csrfToken = $("meta[name=csrf-token]").attr("content");

      var form = $("<form method='post' action='" + href + "'></form>");
      var metadataInput = "<input name='_method' value='" + method + "' type='hidden'/>";
      if (csrfParam !== undefined && csrfToken !== undefined) {
        metadataInput += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden'/>";
      }
      if (target) {
        form.attr("target", target);
      }
      form.hide().append(metadataInput).appendTo("body");
      form.submit();
      return false;
    }
  });
});
