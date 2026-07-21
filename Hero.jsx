const { Tag, Button } = window.YnkotpDevDesignSystem_59759c;
function Hero(){
  return (
    <section id="hero" className="lp-hero">
      <style>{`
        .lp-hero{padding:96px 0 64px;display:flex;flex-direction:column;align-items:flex-start;gap:20px}
        .lp-hero-eyebrow{font-family:var(--font-mono);font-size:var(--text-eyebrow);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--copper);margin:0}
        .lp-hero-h1{font-family:var(--font-display);font-weight:700;font-size:var(--text-h1);line-height:var(--lh-h1);color:var(--text-hi);letter-spacing:-0.02em;margin:0;max-width:14ch}
        .lp-hero-sub{font-family:var(--font-body);font-size:var(--text-body-lg);color:var(--text-mid);line-height:var(--lh-body);max-width:46ch;margin:0}
        .lp-hero-tags{display:flex;gap:10px;flex-wrap:wrap}
        .lp-hero-alt{font-family:var(--font-mono);font-size:12px;color:var(--text-low);margin:0}
        .lp-hero-alt a{color:var(--copper)}
        .lp-hero-alt a:hover{color:var(--copper-soft)}
      `}</style>
      <p className="lp-hero-eyebrow">Веброзробник · Львів</p>
      <h1 className="lp-hero-h1">Роблю сайти, які працюють на бізнес</h1>
      <p className="lp-hero-sub">Кастомний код для малого бізнесу в Україні. Без конструкторів, без шаблонів, без зайвого.</p>
      <div className="lp-hero-tags">
        <Tag>Їжа, кава, бари</Tag><Tag>Краса та відновлення</Tag><Tag>Розваги та дозвілля</Tag>
      </div>
      <Button href="#contact">Обговорити проект</Button>
      <p className="lp-hero-alt">або напишіть у Direct → <a href="https://instagram.com/ynkotp_dev" target="_blank" rel="noopener noreferrer">@ynkotp_dev</a></p>
    </section>
  );
}
window.Hero = Hero;
