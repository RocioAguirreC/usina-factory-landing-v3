import { useScrollReveal } from '../hooks/useScrollReveal';
import s from './AboutSection.module.scss';

const PILLARS = [
  { title:'Foco en valor',      desc:'No construimos código por construir. Cada decisión técnica responde a un objetivo de negocio.',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> },
  { title:'Mentalidad global',  desc:'Somos un equipo cercano con prácticas, herramientas y estándares de clase mundial.',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { title:'Ejecución ágil',     desc:'Ciclos cortos, entrega continua, comunicación clara. Transparencia en cada etapa.',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { title:'Calidad comprobada', desc:'Arquitecturas sólidas, code reviews, testing. Construimos para durar.',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
];

export default function AboutSection() {
  const ref = useScrollReveal();
  return (
    <section id="nosotros" className={s.section} ref={ref}>
      <div className={s.inner}>
        {/* Left */}
        <div className={s.left}>
          <p className={`${s.label} reveal`}>QUIÉNES SOMOS</p>
          <h2 className={`${s.h2} reveal rd1`}>
            Sobre<br/><span className={s.accent}>USINA</span>
          </h2>
          <p className={`${s.body} reveal rd2`}>
            USINA es una Software Factory ágil orientada a la construcción de soluciones tecnológicas de alto valor. No somos un proveedor técnico más: somos el socio estratégico que convierte necesidades reales en software funcional, rápido y escalable.
          </p>
          <p className={`${s.body} reveal rd2`}>
            Conectamos empresas con talento técnico confiable. Trabajamos con equipos que combinan disciplina de ingeniería con comprensión del negocio, porque creemos que el mejor software es el que resuelve problemas reales.
          </p>
          <p className={`${s.body} reveal rd2`}>
            Potenciamos la región con estándares internacionales. Desde Argentina, para el mundo.
          </p>
          <blockquote className={`${s.quote} reveal rd3`}>
            "Operamos localmente, trabajamos globalmente."
          </blockquote>
          <div className={`${s.logoWrap} reveal rd3`}>
            <img src="/usina-factory-logo.png" alt="USINA Factory" className={s.logo} />
          </div>
        </div>

        {/* Right */}
        <div className={s.right}>
          <div className={`${s.pillarsGrid} reveal rd1`}>
            {PILLARS.map(p => (
              <div key={p.title} className={s.pillar}>
                <div className={s.pillarIcon}>{p.icon}</div>
                <h4 className={s.pillarTitle}>{p.title}</h4>
                <p className={s.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className={`${s.missionBox} reveal rd2`}>
            <p>
              USINA no busca ser el más grande. Busca ser el más{' '}
              <strong>confiable</strong> para cada proyecto que decide tomar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
