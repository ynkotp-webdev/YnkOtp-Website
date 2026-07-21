function FooterSection(){
  return (
    <footer className="lp-footer">
      <style>{`
        .lp-footer{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding:40px 0;border-top:1px solid var(--border);font-family:var(--font-mono);font-size:12px;color:var(--text-low)}
        .lp-footer a{color:var(--text-low);text-decoration:none}
        .lp-footer a:hover{color:var(--copper)}
        .lp-footer b{color:var(--copper);font-weight:500}
      `}</style>
      <span><a href="https://github.com/ynkotp228" target="_blank" rel="noopener noreferrer">github.com/ynkotp228</a> · <a href="https://instagram.com/ynkotp_dev" target="_blank" rel="noopener noreferrer">@ynkotp_dev</a></span>
      <span>© 2026 · <b>ynkotp_dev</b> · Львів, Україна</span>
    </footer>
  );
}
window.FooterSection = FooterSection;
