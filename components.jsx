/* Shared component library for the landing page, loaded before the section scripts.
   No bundler here — Babel standalone compiles this in-browser, so components are
   plain global functions collected onto window.YnkotpDevDesignSystem_59759c. */

function DeviceMockup({ device = 'laptop', imageSrc, imageAlt = '' }) {
  return (
    <React.Fragment>
      <style>{`
        .dsb-mockup{filter:drop-shadow(0 32px 64px rgba(11,11,13,0.28))}
        .dsb-mockup.laptop .dsb-screen{border:8px solid var(--surface);border-bottom:none;border-radius:12px 12px 0 0;overflow:hidden;background:var(--ink)}
        .dsb-mockup.laptop .dsb-base{height:14px;background:var(--surface);border-radius:0 0 6px 6px;position:relative}
        .dsb-mockup.laptop .dsb-base::after{content:'';position:absolute;left:50%;top:0;transform:translateX(-50%);width:15%;height:100%;background:var(--border);border-radius:0 0 4px 4px}
        .dsb-mockup.phone{border:10px solid var(--surface);border-radius:36px;overflow:hidden;background:var(--ink);position:relative;width:280px;height:460px;margin:0 auto}
        .dsb-mockup.phone::before{content:'';position:absolute;top:10px;left:50%;transform:translateX(-50%);width:70px;height:18px;background:var(--surface);border-radius:10px;z-index:2}
        .dsb-mockup img{width:100%;display:block;object-fit:cover}
        .dsb-mockup.laptop img{aspect-ratio:16/9.2;object-position:top}
        .dsb-mockup.phone img{height:100%;object-position:top}
      `}</style>
      {device === 'phone' ? (
        <div className="dsb-mockup phone"><img src={imageSrc} alt={imageAlt} /></div>
      ) : (
        <div className="dsb-mockup laptop"><div className="dsb-screen"><img src={imageSrc} alt={imageAlt} /></div><div className="dsb-base"></div></div>
      )}
    </React.Fragment>
  );
}

function CaseCard({ eyebrow, title, description, href, device, imageSrc, imageAlt, imagePosition = 'top', note }) {
  const side = imagePosition === 'side';
  return (
    <React.Fragment>
      <style>{`
        .dsb-case{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-card);padding:32px;transition:box-shadow var(--duration-base) var(--ease-standard),transform var(--duration-base) var(--ease-standard);display:flex;flex-direction:column;gap:24px}
        .dsb-case:hover{box-shadow:var(--shadow-card-hover);transform:translateY(-4px)}
        .dsb-case.side{flex-direction:row;align-items:center;gap:48px}
        .dsb-case .dsb-case-body{flex:1;display:flex;flex-direction:column;gap:16px;min-width:0}
        .dsb-case .dsb-case-media{flex:0 0 auto}
        .dsb-case .dsb-note{font-family:var(--font-body);font-style:italic;font-size:13px;color:var(--text-low);border-left:2px solid var(--border);padding-left:12px;margin:0}
        .dsb-case .dsb-eb{font-family:var(--font-mono);font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--copper);margin:0}
        .dsb-case h3{font-family:var(--font-display);font-weight:500;font-size:var(--text-h3);color:var(--text-hi);margin:0}
        .dsb-case p{font-size:16px;color:var(--text-mid);line-height:1.6;margin:0;max-width:56ch}
        .dsb-case a.dsb-link{font-family:var(--font-mono);font-size:13px;color:var(--copper);text-decoration:none}
        .dsb-case a.dsb-link:hover{color:var(--copper-soft)}
        @media(max-width:900px){.dsb-case.side{flex-direction:column}}
      `}</style>
      <div className={`dsb-case ${side ? 'side' : ''}`}>
        {imageSrc && !side && <DeviceMockup device={device} imageSrc={imageSrc} imageAlt={imageAlt} />}
        <div className="dsb-case-body">
          {note && <p className="dsb-note">{note}</p>}
          <p className="dsb-eb">{eyebrow}</p>
          <h3>{title}</h3>
          <p>{description}</p>
          {href && <a className="dsb-link" href={href} target="_blank" rel="noopener noreferrer">{href.replace('https://', '').replace('http://', '')} ↗</a>}
        </div>
        {imageSrc && side && <div className="dsb-case-media"><DeviceMockup device={device} imageSrc={imageSrc} imageAlt={imageAlt} /></div>}
      </div>
    </React.Fragment>
  );
}

function PricingCard({ name, priceFrom, description, features = [], featured, badge }) {
  return (
    <React.Fragment>
      <style>{`
        .dsb-price{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-card);padding:28px;box-shadow:var(--shadow-card);transition:box-shadow var(--duration-base) var(--ease-standard),transform var(--duration-base) var(--ease-standard);display:flex;flex-direction:column;gap:14px}
        .dsb-price:hover{transform:translateY(-2px)}
        .dsb-price.featured{border:2px solid var(--copper)}
        .dsb-price.featured:hover{box-shadow:var(--shadow-card-hover)}
        .dsb-price .dsb-badge{display:inline-block;font-family:var(--font-mono);font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink);background:var(--copper);border-radius:var(--radius-pill);padding:4px 10px;align-self:flex-start}
        .dsb-price h4{font-family:var(--font-display);font-weight:600;font-size:18px;color:var(--text-hi);margin:0}
        .dsb-price .dsb-amount{font-family:var(--font-display);font-weight:700;font-size:24px;color:var(--copper);margin:0}
        .dsb-price .dsb-desc{font-size:13px;color:var(--text-mid);line-height:1.5;margin:0}
        .dsb-price ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
        .dsb-price li{font-size:13px;color:var(--text-mid);line-height:1.4;padding-left:16px;position:relative}
        .dsb-price li::before{content:'\\2014';position:absolute;left:0;color:var(--text-low)}
      `}</style>
      <div className={`dsb-price ${featured ? 'featured' : ''}`}>
        {badge && <span className="dsb-badge">{badge}</span>}
        <h4>{name}</h4>
        <p className="dsb-amount">{priceFrom}</p>
        <p className="dsb-desc">{description}</p>
        {features.length > 0 && <ul>{features.map((f, i) => <li key={i}>{f}</li>)}</ul>}
      </div>
    </React.Fragment>
  );
}

function EyebrowLabel({ children, as = 'p', className = '' }) {
  const Tag = as;
  return (
    <React.Fragment>
      <style>{`.dsb-eyebrow{font-family:var(--font-mono);font-size:var(--text-eyebrow);font-weight:500;letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--copper);margin:0}`}</style>
      <Tag className={`dsb-eyebrow ${className}`}>{children}</Tag>
    </React.Fragment>
  );
}

function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <React.Fragment>
      <style>{`
        .dsb-sh{display:flex;flex-direction:column;gap:12px;text-align:left}
        .dsb-sh-h2{font-family:var(--font-display);font-weight:700;font-size:var(--text-h2);line-height:var(--lh-h2);color:var(--text-hi);margin:0}
        .dsb-sh-p{font-family:var(--font-body);font-size:var(--text-body);color:var(--text-mid);max-width:640px;line-height:var(--lh-body);margin:0}
      `}</style>
      <div className={`dsb-sh ${className}`}>
        {eyebrow && <EyebrowLabel>{eyebrow}</EyebrowLabel>}
        <h2 className="dsb-sh-h2">{title}</h2>
        {description && <p className="dsb-sh-p">{description}</p>}
      </div>
    </React.Fragment>
  );
}

function Button({ children, href, onClick, type = 'button', disabled = false, className = '', ...rest }) {
  const Tag = href ? 'a' : 'button';
  return (
    <React.Fragment>
      <style>{`
        .dsb-btn{display:inline-flex;align-items:center;justify-content:center;background:var(--copper);color:var(--ink);font-family:var(--font-display);font-weight:700;font-size:15px;padding:16px 28px;border-radius:var(--radius-btn);border:none;cursor:pointer;text-decoration:none;transition:background var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}
        .dsb-btn:hover{background:var(--copper-soft);box-shadow:var(--shadow-card-hover)}
        .dsb-btn:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
        .dsb-btn:active{transform:scale(0.98)}
        .dsb-btn[disabled]{opacity:.5;cursor:not-allowed}
      `}</style>
      <Tag className={`dsb-btn ${className}`} href={href} onClick={onClick} type={href ? undefined : type} disabled={!href && disabled ? true : undefined} aria-disabled={disabled || undefined} {...rest}>
        {children}
      </Tag>
    </React.Fragment>
  );
}

function Tag({ children, className = '' }) {
  return (
    <React.Fragment>
      <style>{`.dsb-tag{font-family:var(--font-mono);font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:var(--copper);border:1px solid var(--copper);border-radius:var(--radius-pill);padding:8px 14px;display:inline-block}`}</style>
      <span className={`dsb-tag ${className}`}>{children}</span>
    </React.Fragment>
  );
}

function FormField({ label, name, type = 'text', placeholder, value, onChange, error, disabled, required, as }) {
  const isTextarea = as === 'textarea' || type === 'textarea';
  return (
    <React.Fragment>
      <style>{`
        .dsb-field{display:flex;flex-direction:column;gap:6px}
        .dsb-field label{font-family:var(--font-mono);font-size:11px;color:var(--text-low);text-transform:uppercase;letter-spacing:.05em}
        .dsb-field input,.dsb-field textarea{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-input);color:var(--text-hi);padding:12px 14px;font-family:var(--font-body);font-size:14px;transition:box-shadow var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard);width:100%;resize:vertical}
        .dsb-field input:focus,.dsb-field textarea:focus{outline:none;border-color:var(--copper);box-shadow:var(--shadow-focus)}
        .dsb-field.error input,.dsb-field.error textarea{border-color:var(--state-error);background:var(--state-error-bg)}
        .dsb-field .dsb-err{font-size:12px;color:var(--state-error)}
        .dsb-field input:disabled,.dsb-field textarea:disabled{opacity:.6}
      `}</style>
      <div className={`dsb-field ${error ? 'error' : ''}`}>
        <label htmlFor={`field-${name}`}>{label}</label>
        {isTextarea ? (
          <textarea id={`field-${name}`} name={name} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} required={required} rows={4}></textarea>
        ) : (
          <input id={`field-${name}`} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} required={required} />
        )}
        {error && <span className="dsb-err">{error}</span>}
      </div>
    </React.Fragment>
  );
}

function ScrollReveal({ children, as = 'div', className = '' }) {
  const { useEffect, useRef, useState } = React;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVisible(true); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } });
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  );
}

function MobileNav({ items, current, open, onOpenChange, onNavigate }) {
  return (
    <React.Fragment>
      <style>{`
        .dsb-burger{width:44px;height:44px;border-radius:50%;border:1px solid var(--border);background:var(--surface);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;cursor:pointer;position:relative;z-index:60}
        .dsb-burger span{width:18px;height:1.5px;background:var(--text-hi);transition:transform var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}
        .dsb-burger.open span:nth-child(1){transform:translateY(5.5px) rotate(45deg)}
        .dsb-burger.open span:nth-child(2){opacity:0}
        .dsb-burger.open span:nth-child(3){transform:translateY(-5.5px) rotate(-45deg)}
        .dsb-mobilemenu{position:fixed;inset:0;background:var(--ink);display:flex;flex-direction:column;justify-content:center;gap:28px;padding:32px;z-index:50;opacity:0;pointer-events:none;transition:opacity var(--duration-base) var(--ease-standard)}
        .dsb-mobilemenu.open{opacity:1;pointer-events:auto}
        .dsb-mobilemenu a{display:flex;gap:16px;align-items:baseline;text-decoration:none;font-family:var(--font-display);font-size:28px;font-weight:600;color:var(--text-hi)}
        .dsb-mobilemenu a.current{color:var(--copper)}
        .dsb-mobilemenu .idx{font-family:var(--font-mono);font-size:13px;color:var(--text-low)}
      `}</style>
      <button className={`dsb-burger ${open ? 'open' : ''}`} aria-label="Меню" aria-expanded={open} onClick={() => onOpenChange(!open)}>
        <span></span><span></span><span></span>
      </button>
      <div className={`dsb-mobilemenu ${open ? 'open' : ''}`}>
        {items.map(item => (
          <a key={item.anchor} href={item.anchor} className={item.anchor === current ? 'current' : ''} onClick={(e) => { onOpenChange(false); if (onNavigate) onNavigate(item.anchor, e); }}>
            <span className="idx">{item.index}</span>{item.label}
          </a>
        ))}
      </div>
    </React.Fragment>
  );
}

function PersistentMobileCta({ label = 'Обговорити проект', href = '#contact', visible }) {
  return (
    <React.Fragment>
      <style>{`
        .dsb-pcta{position:fixed;left:0;right:0;bottom:0;padding:14px 20px;background:var(--ink);border-top:1px solid var(--border);z-index:40;transform:translateY(100%);transition:transform var(--duration-base) var(--ease-standard)}
        .dsb-pcta.visible{transform:translateY(0)}
        .dsb-pcta .dsb-btn{width:100%}
      `}</style>
      <div className={`dsb-pcta ${visible ? 'visible' : ''}`}>
        <Button href={href} style={{ width: '100%' }}>{label}</Button>
      </div>
    </React.Fragment>
  );
}

function SideNav({ items, current, onNavigate }) {
  return (
    <React.Fragment>
      <style>{`
        .dsb-sidenav{display:flex;flex-direction:column;gap:18px;font-family:var(--font-mono)}
        .dsb-sidenav a{display:flex;gap:12px;align-items:baseline;font-size:12px;color:var(--text-mid);text-decoration:none;transition:color var(--duration-fast) var(--ease-standard)}
        .dsb-sidenav a:hover{color:var(--text-hi)}
        .dsb-sidenav a.current{color:var(--copper)}
        .dsb-sidenav .idx{color:var(--text-low)}
        .dsb-sidenav a.current .idx{color:var(--copper)}
      `}</style>
      <nav className="dsb-sidenav" aria-label="Секції сторінки">
        {items.map(item => (
          <a key={item.anchor} href={item.anchor} className={item.anchor === current ? 'current' : ''} onClick={onNavigate ? (e) => onNavigate(item.anchor, e) : undefined}>
            <span className="idx">{item.index}</span><span>{item.label}</span>
          </a>
        ))}
      </nav>
    </React.Fragment>
  );
}

window.YnkotpDevDesignSystem_59759c = {
  DeviceMockup, CaseCard, PricingCard, EyebrowLabel, SectionHeading,
  Button, Tag, FormField, ScrollReveal, MobileNav, PersistentMobileCta, SideNav
};
