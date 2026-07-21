(function () {
"use strict";
const {
  SectionHeading,
  ScrollReveal
} = window.YnkotpDevDesignSystem_59759c;
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "lp-about"
  }, /*#__PURE__*/React.createElement("style", null, `
        .lp-about{padding:var(--section-gap-mobile) 0}
        @media(min-width:1024px){.lp-about{padding:var(--section-gap-desktop) 0}}
        .lp-about p{font-family:var(--font-body);font-size:var(--text-body);color:var(--text-mid);line-height:var(--lh-body);max-width:640px;margin:16px 0 0}
      `), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Про мене",
    title: "Один спеціаліст, а не студія"
  })), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("p", null, "Ви працюєте напряму зі мною: без акаунт-менеджерів, без підрядників, без прошарків. Я веду кожен проект особисто, від першого макета до запуску.")), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("p", null, "Стек — Astro і Tailwind: кастомний код, не конструктор. Сайт не залежить від щомісячної підписки на платформу, як буває з Wix чи Tilda, і не обмежений тим, що дозволяє шаблон.")));
}
window.About = About;
})();
