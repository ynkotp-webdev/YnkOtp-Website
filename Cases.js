(function () {
"use strict";
const {
  SectionHeading,
  ScrollReveal,
  CaseCard
} = window.YnkotpDevDesignSystem_59759c;
function Cases() {
  return /*#__PURE__*/React.createElement("section", {
    id: "cases",
    className: "lp-cases"
  }, /*#__PURE__*/React.createElement("style", null, `
        .lp-cases{padding:var(--section-gap-mobile) 0}
        @media(min-width:1024px){.lp-cases{padding:var(--section-gap-desktop) 0}}
        .lp-cases-stack{display:flex;flex-direction:column;gap:32px;margin-top:40px}
      `), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Кейси",
    title: "Реальні проекти"
  })), /*#__PURE__*/React.createElement("div", {
    className: "lp-cases-stack"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(CaseCard, {
    eyebrow: "Кейс · Готель",
    title: "ArcadaHotel",
    description: "Сайт для готелю, який за перші секунди передає відчуття преміального відпочинку, а не просто показує список номерів. Власна дизайн-система на палітрі Navy · Bronze · Gold · Cream, шрифти Playfair Display та Inter. Шість сторінок, повністю адаптивна верстка.",
    href: "https://ynkotp-webdev.github.io/ArcadaHotel/",
    device: "laptop",
    imageSrc: "assets/case-studies/arcada-hotel-desktop.webp",
    imageAlt: "ArcadaHotel"
  })), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(CaseCard, {
    eyebrow: "Кейс · Автодетейлінг",
    title: "ApexDetailing",
    description: "Сторінка не гальмує на мобільному, а це саме той канал, звідки приходить клієнт студії детейлінгу: з телефону, дорогою до запису. Self-hosted шрифти, PageSpeed 96/95/100/100 на мобільному.",
    href: "https://ynkotp-webdev.github.io/ApexDetailing/",
    device: "phone",
    imageSrc: "assets/case-studies/apex-detailing-mobile-home.webp",
    imageAlt: "ApexDetailing",
    imagePosition: "side"
  })), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(CaseCard, {
    eyebrow: "Кейс · Концепт",
    title: "«Сама Ліпила»",
    description: "Повноцінний кошик і оформлення замовлення через Viber або Telegram. Кошик на localStorage, 51 позиція у 8 категоріях, 17 сторінок, повна українська локалізація.",
    href: "https://ynkotp-webdev.github.io/sama-lypyla-concept/",
    device: "laptop",
    imageSrc: "assets/case-studies/sama-lypyla-desktop.webp",
    imageAlt: "Сама Ліпила концепт",
    note: "Навчальний концепт-редизайн існуючого бренду, виконаний без замовлення від власників."
  }))));
}
window.Cases = Cases;
})();
