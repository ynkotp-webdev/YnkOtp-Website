const { SectionHeading, ScrollReveal } = window.YnkotpDevDesignSystem_59759c;
function Process(){
  const steps = [
    { n: '01', title: 'Макет у Figma', desc: 'узгоджуємо структуру і зовнішній вигляд, перш ніж писати код.' },
    { n: '02', title: 'Кастомний код на Astro', desc: 'верстаю сайт з нуля, без шаблонів і конструкторів.' },
    { n: '03', title: 'Запуск і передача', desc: 'деплою сайт, передаю доступи, показую, де що знаходиться.' }
  ];
  return (
    <section id="process" className="lp-process">
      <style>{`
        .lp-process{padding:var(--section-gap-mobile) 0}
        @media(min-width:1024px){.lp-process{padding:var(--section-gap-desktop) 0}}
        .lp-process-grid{display:grid;grid-template-columns:1fr;gap:24px;margin-top:32px}
        @media(min-width:768px){.lp-process-grid{grid-template-columns:repeat(3,1fr)}}
        .lp-step{border-top:1px solid var(--border);padding-top:16px}
        .lp-step .n{font-family:var(--font-mono);font-size:13px;color:var(--copper);margin:0 0 8px}
        .lp-step h3{font-family:var(--font-display);font-weight:500;font-size:20px;color:var(--text-hi);margin:0 0 8px}
        .lp-step p{font-family:var(--font-body);font-size:14px;color:var(--text-mid);line-height:1.5;margin:0}
        .lp-process-note{font-family:var(--font-body);font-size:14px;color:var(--text-mid);max-width:640px;margin-top:32px;line-height:1.6}
      `}</style>
      <ScrollReveal><SectionHeading eyebrow="Як я працюю" title="Прозорий процес від макета до запуску" /></ScrollReveal>
      <ScrollReveal as="div" className="lp-process-grid">
        {steps.map(s => <div className="lp-step" key={s.n}><p className="n">{s.n}</p><h3>{s.title}</h3><p>{s.desc}</p></div>)}
      </ScrollReveal>
      <ScrollReveal><p className="lp-process-note">Оплата поетапна: частина на старті, частина після здачі. Технічні питання після запуску теж на мені, ви не лишаєтесь сам на сам зі своїм сайтом.</p></ScrollReveal>
    </section>
  );
}
window.Process = Process;
