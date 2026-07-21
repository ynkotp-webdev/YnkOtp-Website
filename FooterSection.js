(function () {
"use strict";
function FooterSection() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "lp-footer"
  }, /*#__PURE__*/React.createElement("style", null, `
        .lp-footer{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding:40px 0;border-top:1px solid var(--border);font-family:var(--font-mono);font-size:12px;color:var(--text-low)}
        .lp-footer a{color:var(--text-low);text-decoration:none}
        .lp-footer a:hover{color:var(--copper)}
        .lp-footer b{color:var(--copper);font-weight:500}
      `), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/ynkotp228",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "github.com/ynkotp228"), " · ", /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/ynkotp_dev",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "@ynkotp_dev")), /*#__PURE__*/React.createElement("span", null, "© 2026 · ", /*#__PURE__*/React.createElement("b", null, "ynkotp_dev"), " · Львів, Україна"));
}
window.FooterSection = FooterSection;
})();
