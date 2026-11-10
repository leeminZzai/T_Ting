// 테마 전환: 저장된 선택 → 없으면 기기 설정(라이트/다크)
(function () {
  var KEY = "tting-theme";
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function system() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function apply(theme) {
    root.setAttribute("data-theme", theme);
  }

  apply(saved() || system());

  window.TTingTheme = {
    get: function () { return root.getAttribute("data-theme"); },
    set: function (theme) {
      apply(theme);
      try { localStorage.setItem(KEY, theme); } catch (e) {}
    },
    toggle: function () { this.set(this.get() === "dark" ? "light" : "dark"); }
  };
})();
