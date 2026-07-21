const { SectionHeading, ScrollReveal, FormField, Button } = window.YnkotpDevDesignSystem_59759c;
const FORM_ENDPOINT = 'https://formspree.io/f/xdaqdnwz';
function ContactSection(){
  const [values, setValues] = React.useState({ name: '', contact: '', message: '' });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState('idle');
  function update(field){ return (e) => setValues(v => ({ ...v, [field]: e.target.value })); }
  async function submit(e){
    e.preventDefault();
    const form = e.target;
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Заповніть це поле';
    if (!values.contact.trim()) nextErrors.contact = 'Заповніть це поле';
    if (!values.message.trim()) nextErrors.message = 'Заповніть це поле';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    if (form.elements._gotcha.value) return; // honeypot tripped — silently drop
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }
  return (
    <section id="contact" className="lp-contact">
      <style>{`
        .lp-contact{padding:var(--section-gap-mobile) 0 160px}
        @media(min-width:1024px){.lp-contact{padding:var(--section-gap-desktop) 0 160px}}
        .lp-contact-body{font-family:var(--font-body);font-size:var(--text-body);color:var(--text-mid);max-width:560px;margin:16px 0 32px;line-height:1.6}
        .lp-contact-form{display:grid;gap:16px;max-width:420px;margin:0 auto}
        .lp-contact-alt{font-family:var(--font-mono);font-size:12px;color:var(--text-low);margin:20px auto 0;max-width:420px;text-align:center}
        .lp-contact-alt a{color:var(--copper)}
        .lp-contact-alt a:hover{color:var(--copper-soft)}
        .lp-contact-sent{font-family:var(--font-display);font-weight:500;font-size:20px;color:var(--copper);max-width:420px}
        .lp-contact-error{font-family:var(--font-body);font-size:13px;color:var(--state-error);margin:0}
      `}</style>
      <ScrollReveal><SectionHeading eyebrow="Зробити перший крок" title="Готові обговорити свій сайт?" /></ScrollReveal>
      <ScrollReveal><p className="lp-contact-body">Розкажіть коротко, який у вас бізнес і що потрібно, я відповім з конкретними наступними кроками.</p></ScrollReveal>
      <ScrollReveal>
        {status === 'sent' ? (
          <p className="lp-contact-sent">Дякую! Відповім найближчим часом.</p>
        ) : (
          <form className="lp-contact-form" onSubmit={submit} action={FORM_ENDPOINT} method="POST">
            <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} />
            <input type="hidden" name="_subject" value="Нова заявка з сайту ynkotp_dev" />
            <FormField label="Ім'я" name="name" value={values.name} onChange={update('name')} error={errors.name} placeholder="Ваше ім'я" />
            <FormField label="Контакт" name="contact" value={values.contact} onChange={update('contact')} error={errors.contact} placeholder="Телефон або email" />
            <FormField label="Коротко про проект" name="message" as="textarea" value={values.message} onChange={update('message')} error={errors.message} placeholder="Який бізнес, що потрібно" />
            {status === 'error' && <p className="lp-contact-error">Щось пішло не так. Спробуйте ще раз або напишіть у Direct нижче.</p>}
            <Button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Надсилаю...' : 'Надіслати'}</Button>
          </form>
        )}
      </ScrollReveal>
      <ScrollReveal><p className="lp-contact-alt">Або напишіть у Direct: <a href="https://instagram.com/ynkotp_dev" target="_blank" rel="noopener noreferrer">@ynkotp_dev</a></p></ScrollReveal>
    </section>
  );
}
window.ContactSection = ContactSection;
