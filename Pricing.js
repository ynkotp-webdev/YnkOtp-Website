(function () {
"use strict";
const {
  SectionHeading,
  ScrollReveal,
  PricingCard
} = window.YnkotpDevDesignSystem_59759c;
function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    className: "lp-pricing"
  }, /*#__PURE__*/React.createElement("style", null, `
        .lp-pricing{padding:var(--section-gap-mobile) 0}
        @media(min-width:1024px){.lp-pricing{padding:var(--section-gap-desktop) 0}}
        .lp-pricing-grid{display:grid;grid-template-columns:1fr;gap:20px;margin-top:32px;align-items:start}
        @media(min-width:768px){.lp-pricing-grid{grid-template-columns:repeat(3,1fr)}}
        .lp-pricing-note{font-family:var(--font-body);font-size:13px;color:var(--text-mid);text-align:center;margin-top:32px}
        .lp-pricing-calc{font-family:var(--font-body);font-size:14px;color:var(--text-mid);margin-top:16px;max-width:640px}
      `), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Ціни",
    title: "Чесна вартість, без прихованих платежів"
  })), /*#__PURE__*/React.createElement("div", {
    className: "lp-pricing-grid"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(PricingCard, {
    name: "Старт",
    priceFrom: "від $150",
    description: "Сайт-візитка, 1–3 сторінки",
    features: ['Адаптивний дизайн', 'Кастомний код', "Форма зв'язку", 'Базове SEO-налаштування', 'Деплой']
  })), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(PricingCard, {
    name: "Бізнес",
    priceFrom: "від $270",
    description: "Сайт-каталог, 5–10 сторінок",
    featured: true,
    badge: "Оптимальний",
    features: ['Усе з тарифу «Старт»', 'Структура каталогу чи послуг', 'Розширене SEO', 'Оптимізація під мобільний трафік']
  })), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(PricingCard, {
    name: "Бізнес + Супровід",
    priceFrom: "від $270 + $30–60/міс",
    description: "Для тих, хто не хоче думати про сайт після запуску",
    features: ['Усе з тарифу «Бізнес»', 'Щомісячна технічна підтримка', 'Дрібні правки']
  }))), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("p", {
    className: "lp-pricing-note"
  }, "Супровід можна докупити окремо в будь-який момент, навіть якщо сайт зроблений за тарифом «Старт» чи «Бізнес» — без обов'язкового тарифу «Бізнес + Супровід».")), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("p", {
    className: "lp-pricing-calc"
  }, "Точна вартість залежить від обсягу. Напишіть, що потрібно, і я порахую конкретну суму.")));
}
window.Pricing = Pricing;
})();
