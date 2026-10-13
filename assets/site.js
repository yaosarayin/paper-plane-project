// English / 中文 toggle backed by the Google Translate website widget.
// The widget reads the "googtrans" cookie on load, so the choice carries across pages.
// The button stays hidden unless the widget loads (it is blocked in mainland China).
(function () {
  var btn = document.getElementById("lang-toggle");
  if (!btn) return;
  var EN = "/zh-CN/en";

  function isEnglish() {
    return document.cookie.indexOf("googtrans=" + EN) !== -1;
  }

  function setCookie(value) {
    var expiry = value ? "" : ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
    var host = location.hostname;
    var parent = host.replace(/^www\./, "");
    document.cookie = "googtrans=" + (value || "") + ";path=/" + expiry;
    if (host.indexOf(".") !== -1) {
      document.cookie = "googtrans=" + (value || "") + ";path=/;domain=" + host + expiry;
      document.cookie = "googtrans=" + (value || "") + ";path=/;domain=." + parent + expiry;
    }
  }

  btn.textContent = isEnglish() ? "中文" : "English";
  // Fixed English labels for navigation and the name, instead of machine translation.
  if (isEnglish()) {
    document.querySelectorAll("[data-en]").forEach(function (el) {
      el.textContent = el.dataset.en;
    });
  }
  btn.setAttribute("lang", isEnglish() ? "zh-CN" : "en");
  btn.addEventListener("click", function () {
    setCookie(isEnglish() ? null : EN);
    location.reload();
  });

  window.gtInit = function () {
    new google.translate.TranslateElement({ pageLanguage: "zh-CN", autoDisplay: false }, "gt-el");
    btn.hidden = false;
  };

  var s = document.createElement("script");
  s.src = "https://translate.google.com/translate_a/element.js?cb=gtInit";
  s.async = true;
  document.head.appendChild(s);
})();

// Category filter on the article list.
(function () {
  var bar = document.querySelector(".filters");
  if (!bar) return;
  var buttons = bar.querySelectorAll("button");
  var cards = document.querySelectorAll("[data-cat]");
  var years = document.querySelectorAll("[data-year]");

  function apply(cat) {
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.filter === cat));
    });
    cards.forEach(function (c) {
      c.hidden = cat !== "all" && c.dataset.cat !== cat;
    });
    years.forEach(function (y) {
      y.hidden = !y.querySelector("[data-cat]:not([hidden])");
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      apply(b.dataset.filter);
      history.replaceState(null, "", b.dataset.filter === "all" ? location.pathname : "#" + b.dataset.filter);
    });
  });

  var initial = decodeURIComponent(location.hash.slice(1));
  if (initial && bar.querySelector('[data-filter="' + initial + '"]')) apply(initial);
})();
