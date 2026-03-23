import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import s from './ContactSection.module.scss';

const PERKS = [
  { icon: '⚡', title: 'Respuesta rápida',  desc: 'Respondemos en menos de 24hs hábiles.' },
  { icon: '☕', title: 'Primera reunión',    desc: 'Sin costo, sin compromiso. Solo para conocernos.' },
  { icon: '🔒', title: 'Confidencialidad',  desc: 'Tu información y tus ideas están seguras con nosotros.' },
];

const SERVICES_OPT = [
  'Seleccioná una opción',
  'Páginas Institucionales',
  'Software a Medida',
  'Consultoría IT',
  'R&D / Prototipado',
];

export default function ContactSection() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name:'', company:'', email:'', service:'', message:'' });
  const [sent, setSent] = useState(false);

  const set = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name:'', company:'', email:'', service:'', message:'' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contacto" className={s.section} ref={ref}>
      <div className={s.inner}>
        {/* Left */}
        <div className={s.left}>
          <p className={`${s.label} reveal`}>EMPECEMOS</p>
          <h2 className={`${s.h2} reveal rd1`}>
            Hablemos de<br/><span className={s.accent}>tu proyecto</span>
          </h2>
          <p className={`${s.intro} reveal rd2`}>
            Sin fricción, sin formularios interminables. Contanos brevemente<br/>
            qué necesitás y respondemos rápido.
          </p>
          <div className={s.perks}>
            {PERKS.map((p,i) => (
              <div key={p.title} className={`${s.perk} reveal rd${i+2}`}>
                <div className={s.perkIconWrap}>{p.icon}</div>
                <div>
                  <span className={s.perkTitle}>{p.title}</span>
                  <span className={s.perkDesc}>{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div className={`${s.formCard} reveal rd2`}>
          {sent ? (
            <div className={s.success}>
              <div className={s.successIcon}>✓</div>
              <h3>¡Mensaje enviado!</h3>
              <p>Te contactamos en menos de 24 horas hábiles.</p>
            </div>
          ) : (
            <form className={s.form} onSubmit={submit}>
              <div className={s.row}>
                <div className={s.field}>
                  <label>Nombre <span className={s.req}>*</span></label>
                  <input name="name" type="text" placeholder="Tu nombre" value={form.name} onChange={set} required />
                </div>
                <div className={s.field}>
                  <label>Empresa</label>
                  <input name="company" type="text" placeholder="Tu empresa" value={form.company} onChange={set} />
                </div>
              </div>

              <div className={s.field}>
                <label>Email <span className={s.req}>*</span></label>
                <input name="email" type="email" placeholder="tu@empresa.com" value={form.email} onChange={set} required />
              </div>

              <div className={s.field}>
                <label>Servicio de interés</label>
                <div className={s.selectWrap}>
                  <select name="service" value={form.service} onChange={set}>
                    {SERVICES_OPT.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <span className={s.selectArrow}>▾</span>
                </div>
              </div>

              <div className={s.field}>
                <div className={s.textareaTop}>
                  <label>Mensaje <span className={s.req}>*</span></label>
                  <span className={s.counter}>{form.message.length}/500</span>
                </div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Contanos brevemente sobre tu proyecto o necesidad..."
                  value={form.message}
                  onChange={set}
                  maxLength={500}
                  required
                />
              </div>

              <button type="submit" className={s.submitBtn}>
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
