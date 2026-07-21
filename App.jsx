const { SideNav, MobileNav, PersistentMobileCta } = window.YnkotpDevDesignSystem_59759c;
const NAV_ITEMS = [
  { index: '01', label: 'Про мене', anchor: '#about' },
  { index: '02', label: 'Ніші', anchor: '#niches' },
  { index: '03', label: 'Кейси', anchor: '#cases' },
  { index: '04', label: 'Процес', anchor: '#process' },
  { index: '05', label: 'Ціни', anchor: '#pricing' },
  { index: '06', label: 'Контакт', anchor: '#contact' }
];
function App(){
  const [current, setCurrent] = React.useState('#about');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [pastHero, setPastHero] = React.useState(false);
  const [contactVisible, setContactVisible] = React.useState(false);

  React.useEffect(() => {
    const heroEl = document.getElementById('hero');
    const contactEl = document.getElementById('contact');
    const heroObs = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0 });
    const contactObs = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting), { threshold: 0.1 });
    if (heroEl) heroObs.observe(heroEl);
    if (contactEl) contactObs.observe(contactEl);

    const sections = NAV_ITEMS.map(i => document.querySelector(i.anchor)).filter(Boolean);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setCurrent('#' + entry.target.id); });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));

    return () => { heroObs.disconnect(); contactObs.disconnect(); spy.disconnect(); };
  }, []);

  function handleNavigate(anchor, e){
    e.preventDefault();
    const el = document.querySelector(anchor);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 24;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  return (
    <React.Fragment>
      <style>{`
        .lp-sidenav-fixed{position:fixed;left:40px;top:50%;transform:translateY(-50%);display:none;z-index:30}
        @media(min-width:1024px){.lp-sidenav-fixed{display:block}}
        .lp-mobilenav-fixed{position:fixed;top:20px;right:20px;z-index:60}
        @media(min-width:1024px){.lp-mobilenav-fixed{display:none}}
      `}</style>
      <div className="lp-sidenav-fixed"><SideNav items={NAV_ITEMS} current={current} onNavigate={handleNavigate} /></div>
      <div className="lp-mobilenav-fixed"><MobileNav items={NAV_ITEMS} current={current} open={menuOpen} onOpenChange={setMenuOpen} onNavigate={handleNavigate} /></div>
      <main className="container">
        <Hero />
        <About />
        <Niches />
        <Cases />
        <Process />
        <Pricing />
        <ContactSection />
      </main>
      <div className="container"><FooterSection /></div>
      <PersistentMobileCta visible={pastHero && !contactVisible} />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
