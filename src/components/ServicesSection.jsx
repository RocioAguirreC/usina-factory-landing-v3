import { motion } from 'framer-motion';
import s from './ServicesSection.module.scss';

const SERVICES = [
  {
    num: '01', title: 'Páginas Institucionales',
    desc: 'Sitios modernos enfocados en presencia profesional y conversión. Rápida implementación, alta calidad visual y técnica.',
    bullets: ['Diseño minimalista y moderno', 'Optimización SEO desde el día uno', 'Rápida puesta en producción'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  },
  {
    num: '02', title: 'Software a Medida',
    desc: 'Soluciones adaptadas al negocio del cliente. Escalabilidad, mantenibilidad e integración con sistemas existentes.',
    bullets: ['Arquitectura escalable', 'Integración con sistemas legacy', 'Código limpio y documentado'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  },
  {
    num: '03', title: 'Consultoría IT',
    desc: 'Profesionalización de equipos y procesos. Optimización de flujos, buenas prácticas e implementación de estándares.',
    bullets: ['Auditoría de procesos técnicos', 'Implementación de metodologías ágiles', 'Acompañamiento continuo'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" /></svg>,
  },
  {
    num: '04', title: 'R&D / Prototipado',
    desc: 'Validación rápida de ideas. Desarrollo de MVPs y exploración tecnológica con enfoque en aprendizaje de negocio.',
    bullets: ['MVPs en semanas, no meses', 'Exploración tecnológica guiada', 'Pivotes rápidos basados en datos'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
  },
];

const BADGES = [
  'Construimos software con foco en valor y sostenibilidad',
  'Aplicamos estándares y prácticas de calidad internacional',
  'Garantizamos la calidad de nuestros entregables',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 15 } }
};

export default function ServicesSection() {
  return (
    <section id="servicios" className={s.section}>
      <motion.div 
        className={s.inner}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
      >
        <div className={s.header}>
<<<<<<< HEAD
          <p className={`${s.label} reveal`}>LO QUE HACEMOS</p>
          <h2 className={`${s.h2} reveal rd1`}>Servicios</h2>
          <p className={`${s.subtitle} reveal rd2`}>
            Soluciones tecnológicas adaptadas al nivel de madurez y necesidades reales de cada negocio.
          </p>
=======
          <motion.p variants={itemUp} className={s.label}>LO QUE HACEMOS</motion.p>
          <motion.h2 variants={itemUp} className={s.h2}>Servicios</motion.h2>
          <motion.p variants={itemUp} className={s.subtitle}>
            Soluciones tecnológicas adaptadas al nivel de madurez y<br />necesidades reales de cada negocio.
          </motion.p>
>>>>>>> 4d33a6a (Agregamos texturas y algunas interacciones)
        </div>

        <div className={s.grid}>
          {SERVICES.map((sv) => (
            <motion.div variants={itemUp} key={sv.num} className={s.card}>
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
            </motion.div>
          ))}
        </div>

        <div className={s.badgeRow}>
          {BADGES.map(b => (
            <motion.div variants={itemUp} key={b} className={s.badgePill}>
              <span className={s.pillDot} />{b}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
