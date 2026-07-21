(function () {
"use strict";
const {
  SectionHeading,
  ScrollReveal,
  FormField,
  Button
} = window.YnkotpDevDesignSystem_59759c;
function ContactSection() {
  const [values, setValues] = React.useState({
    name: '',
    contact: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState('idle');
  function update(field) {
    return e => setValues(v => ({
      ...v,
      [field]: e.target.value
    }));
  }
  function submit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Заповніть це поле';
    if (!values.contact.trim()) nextErrors.contact = 'Заповніть це поле';
    if (!values.message.trim()) nextErrors.message = 'Заповніть це поле';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 900);
  }
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "lp-contact"
  }, /*#__PURE__*/React.createElement("style", null, `
        .lp-contact{padding:var(--section-gap-mobile) 0 160px}
        @media(min-width:1024px){.lp-contact{padding:var(--section-gap-desktop) 0 160px}}
        .lp-contact-body{font-family:var(--font-body);font-size:var(--text-body);color:var(--text-mid);max-width:560px;margin:16px 0 32px;line-height:1.6}
        .lp-contact-form{display:grid;gap:16px;max-width:420px;margin:0 auto}
        .lp-contact-alt{font-family:var(--font-mono);font-size:12px;color:var(--text-low);margin:20px auto 0;max-width:420px;text-align:center}
        .lp-contact-alt a{color:var(--copper)}
        .lp-contact-alt a:hover{color:var(--copper-soft)}
        .lp-contact-sent{font-family:var(--font-display);font-weight:500;font-size:20px;color:var(--copper);max-width:420px}
      `), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Зробити перший крок",
    title: "Готові обговорити свій сайт?"
  })), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("p", {
    className: "lp-contact-body"
  }, "Розкажіть коротко, який у вас бізнес і що потрібно, я відповім з конкретними наступними кроками.")), /*#__PURE__*/React.createElement(ScrollReveal, null, status === 'sent' ? /*#__PURE__*/React.createElement("p", {
    className: "lp-contact-sent"
  }, "Дякую! Відповім найближчим часом.") : /*#__PURE__*/React.createElement("form", {
    className: "lp-contact-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Ім'я",
    name: "name",
    value: values.name,
    onChange: update('name'),
    error: errors.name,
    placeholder: "Ваше ім'я"
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "Контакт",
    name: "contact",
    value: values.contact,
    onChange: update('contact'),
    error: errors.contact,
    placeholder: "Телефон або email"
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "Коротко про проект",
    name: "message",
    as: "textarea",
    value: values.message,
    onChange: update('message'),
    error: errors.message,
    placeholder: "Який бізнес, що потрібно"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    disabled: status === 'sending'
  }, status === 'sending' ? 'Надсилаю...' : 'Надіслати'))), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("p", {
    className: "lp-contact-alt"
  }, "Або напишіть у Direct: ", /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/ynkotp_dev",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "@ynkotp_dev"))));
}
window.ContactSection = ContactSection;
})();
