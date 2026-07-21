const { SectionHeading, ScrollReveal } = window.YnkotpDevDesignSystem_59759c;
function About(){
  return (
    <section id="about" className="lp-about">
      <style>{`
        .lp-about{padding:var(--section-gap-mobile) 0}
        @media(min-width:1024px){.lp-about{padding:var(--section-gap-desktop) 0}}
        .lp-about p{font-family:var(--font-body);font-size:var(--text-body);color:var(--text-mid);line-height:var(--lh-body);max-width:640px;margin:16px 0 0}
      `}</style>
      <ScrollReveal><SectionHeading eyebrow="Про мене" title="Один спеціаліст, а не студія" /></ScrollReveal>
      <ScrollReveal><p>Ви працюєте напряму зі мною: без акаунт-менеджерів, без підрядників, без прошарків. Я веду кожен проект особисто, від першого макета до запуску.</p></ScrollReveal>
      <ScrollReveal><p>Стек — Astro і Tailwind: кастомний код, не конструктор. Сайт не залежить від щомісячної підписки на платформу, як буває з Wix чи Tilda, і не обмежений тим, що дозволяє шаблон.</p></ScrollReveal>
    </section>
  );
}
window.About = About;
