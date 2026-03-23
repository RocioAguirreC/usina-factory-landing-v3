import { useScrollReveal } from '../hooks/useScrollReveal';
import s from './ServicesSection.module.scss';

const SERVICES = [
  {
    num: '01', title: 'Páginas Institucionales',
    desc: 'Sitios modernos enfocados en presencia profesional y conversión. Rápida implementación, alta calidad visual y técnica.',
    bullets: ['Diseño minimalista y moderno', 'Optimización SEO desde el día uno', 'Rápida puesta en producción'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  },
  {
    num: '02', title: 'Software a Medida',
    desc: 'Soluciones adaptadas al negocio del cliente. Escalabilidad, mantenibilidad e integración con sistemas existentes.',
    bullets: ['Arquitectura escalable', 'Integración con sistemas legacy', 'Código limpio y documentado'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  },
  {
    num: '03', title: 'Consultoría IT',
    desc: 'Profesionalización de equipos y procesos. Optimización de flujos, buenas prácticas e implementación de estándares.',
    bullets: ['Auditoría de procesos técnicos', 'Implementación de metodologías ágiles', 'Acompañamiento continuo'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>,
  },
  {
    num: '04', title: 'R&D / Prototipado',
    desc: 'Validación rápida de ideas. Desarrollo de MVPs y exploración tecnológica con enfoque en aprendizaje de negocio.',
    bullets: ['MVPs en semanas, no meses', 'Exploración tecnológica guiada', 'Pivotes rápidos basados en datos'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  },
];

const BADGES = [
  'Construimos software con foco en valor y sostenibilidad',
  'Aplicamos estándares y prácticas de calidad internacional',
  'Garantizamos la calidad de nuestros entregables',
];

export default function ServicesSection() {
  const ref = useScrollReveal();
  return (
    <section id="servicios" className={s.section} ref={ref}>
      <div className={s.inner}>
        <div className={s.header}>
          <p className={`${s.label} reveal`}>LO QUE HACEMOS</p>
          <h2 className={`${s.h2} reveal rd1`}>Servicios</h2>
          <p className={`${s.subtitle} reveal rd2`}>
            Soluciones tecnológicas adaptadas al nivel de madurez y<br />necesidades reales de cada negocio.
          </p>
        </div>

        <div className={s.grid}>
          {SERVICES.map((sv, i) => (
            <div key={sv.num} className={`${s.card} reveal rd${i + 1}`}>
              <div className={s.cardTop}>
                <div className={s.iconBox}>{sv.icon}</div>
                <span className={s.num}>{sv.num}</span>
              </div>
              <h3 className={s.cardTitle}>{sv.title}</h3>
              <p className={s.cardDesc}>{sv.desc}</p>
              <ul className={s.bullets}>
                {sv.bullets.map(b => (
                  <li key={b}><span className={s.dot} />{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`${s.badgeRow} reveal rd2`}>
          {BADGES.map(b => (
            <div key={b} className={s.badgePill}>
              <span className={s.pillDot} />{b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
