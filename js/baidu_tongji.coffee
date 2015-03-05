---
---

$ ->
  return unless $("#cnpaas").data("env") in ["staging", "production"]
  window._hmt ||= []
  `(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?6fa169e50a12516a912b994e139b8993";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();`
