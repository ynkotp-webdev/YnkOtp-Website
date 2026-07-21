(function () {
"use strict";
const {
  Tag,
  Button
} = window.YnkotpDevDesignSystem_59759c;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "hero",
    className: "lp-hero"
  }, /*#__PURE__*/React.createElement("style", null, `
        .lp-hero{padding:96px 0 64px;display:flex;flex-direction:column;align-items:flex-start;gap:20px}
        .lp-hero-eyebrow{font-family:var(--font-mono);font-size:var(--text-eyebrow);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--copper);margin:0}
        .lp-hero-h1{font-family:var(--font-display);font-weight:700;font-size:var(--text-h1);line-height:var(--lh-h1);color:var(--text-hi);letter-spacing:-0.02em;margin:0;max-width:14ch}
        .lp-hero-sub{font-family:var(--font-body);font-size:var(--text-body-lg);color:var(--text-mid);line-height:var(--lh-body);max-width:46ch;margin:0}
        .lp-hero-tags{display:flex;gap:10px;flex-wrap:wrap}
        .lp-hero-alt{font-family:var(--font-mono);font-size:12px;color:var(--text-low);margin:0}
        .lp-hero-alt a{color:var(--copper)}
        .lp-hero-alt a:hover{color:var(--copper-soft)}
      `), /*#__PURE__*/React.createElement("p", {
    className: "lp-hero-eyebrow"
  }, "Веброзробник · Львів"), /*#__PURE__*/React.createElement("h1", {
    className: "lp-hero-h1"
  }, "Роблю сайти, які працюють на бізнес"), /*#__PURE__*/React.createElement("p", {
    className: "lp-hero-sub"
  }, "Кастомний код для малого бізнесу в Україні. Без конструкторів, без шаблонів, без зайвого."), /*#__PURE__*/React.createElement("div", {
    className: "lp-hero-tags"
  }, /*#__PURE__*/React.createElement(Tag, null, "Їжа, кава, бари"), /*#__PURE__*/React.createElement(Tag, null, "Краса та відновлення"), /*#__PURE__*/React.createElement(Tag, null, "Розваги та дозвілля")), /*#__PURE__*/React.createElement(Button, {
    href: "#contact"
  }, "Обговорити проект"), /*#__PURE__*/React.createElement("p", {
    className: "lp-hero-alt"
  }, "або напишіть у Direct → ", /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/ynkotp_dev",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "@ynkotp_dev")));
}
window.Hero = Hero;
})();
