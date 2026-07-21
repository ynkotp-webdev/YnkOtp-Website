const { SectionHeading, ScrollReveal } = window.YnkotpDevDesignSystem_59759c;
function Niches(){
  const niches = [
    { title: 'Їжа, кава, бари', desc: "кав'ярні, пекарні, кондитерські, бари" },
    { title: 'Краса та відновлення', desc: 'салони краси, барбершопи, перукарні, косметологія' },
    { title: 'Розваги та дозвілля', desc: "комп'ютерні клуби, квест-кімнати, лазертаг, дитячі ігрові кімнати" }
  ];
  return (
    <section id="niches" className="lp-niches">
      <style>{`
        .lp-niches{padding:var(--section-gap-mobile) 0}
        @media(min-width:1024px){.lp-niches{padding:var(--section-gap-desktop) 0}}
        .lp-niches-grid{display:grid;grid-template-columns:1fr;gap:20px;margin-top:32px}
        @media(min-width:768px){.lp-niches-grid{grid-template-columns:repeat(3,1fr)}}
        .lp-niche{border-top:1px solid var(--border);padding-top:16px;display:flex;flex-direction:column;gap:8px}
        .lp-niche h3{font-family:var(--font-display);font-weight:500;font-size:20px;color:var(--text-hi);margin:0}
        .lp-niche p{font-family:var(--font-body);font-size:14px;color:var(--text-mid);line-height:1.5;margin:0}
        .lp-niches-note{font-family:var(--font-body);font-size:14px;color:var(--text-mid);max-width:640px;margin-top:32px;line-height:1.6}
      `}</style>
      <ScrollReveal><SectionHeading eyebrow="Для кого" title="Малий бізнес, якому важлива якість" description="Три напрямки, з якими працюю найчастіше:" /></ScrollReveal>
      <ScrollReveal as="div" className="lp-niches-grid">
        {niches.map(n => <div className="lp-niche" key={n.title}><h3>{n.title}</h3><p>{n.desc}</p></div>)}
      </ScrollReveal>
      <ScrollReveal><p className="lp-niches-note">Якщо ваш бізнес не входить в жоден із напрямків, це не привід не писати. Ніші обрані свідомо широко, головне, щоб сайт відповідав тому, як реально працює ваш бізнес.</p></ScrollReveal>
    </section>
  );
}
window.Niches = Niches;
