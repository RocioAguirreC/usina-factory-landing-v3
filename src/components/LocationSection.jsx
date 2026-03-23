import { useScrollReveal } from '../hooks/useScrollReveal';
import s from './LocationSection.module.scss';

const OFFICES = [
  {
    city: 'Buenos Aires',
    country: 'Argentina',
    desc: 'Centro de operaciones principal. Hub tecnológico del Río de la Plata.',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209571.11530748268!2d-58.70551505!3d-34.6144825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar',
    mapsUrl: 'https://maps.google.com/?q=Buenos+Aires+Argentina',
  },
  {
    city: 'Mendoza',
    country: 'Argentina',
    desc: 'Nodo estratégico en Cuyo. Talento técnico en crecimiento constante.',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221432.06785963!2d-69.0778767!3d-32.8896247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09124bf2e5a9%3A0x5e7b67e1c4d5b1b0!2sMendoza!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar',
    mapsUrl: 'https://maps.google.com/?q=Mendoza+Argentina',
  },
];

const COUNTRIES = ['AR','US','EU','BR','…'];

export default function LocationSection() {
  const ref = useScrollReveal();
  return (
    <section id="ubicacion" className={s.section} ref={ref}>
      <div className={s.inner}>
        <div className={s.header}>
          <p className={`${s.label} reveal`}>DÓNDE ESTAMOS</p>
          <h2 className={`${s.h2} reveal rd1`}>Ubicación</h2>
          <p className={`${s.subtitle} reveal rd2`}>
            Presencia en Argentina, alcance global. 100% remoto, sin fronteras.
          </p>
        </div>

        <div className={`${s.grid} reveal rd1`}>
          {OFFICES.map(o => (
            <div key={o.city} className={s.card}>
              <div className={s.mapWrap}>
                <iframe
                  title={o.city}
                  src={o.mapSrc}
                  className={s.map}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className={s.mapOverlay} />
                <a href={o.mapsUrl} target="_blank" rel="noopener noreferrer" className={s.openMaps}>
                  Abrir en Maps ↗
                </a>
              </div>
              <div className={s.cardInfo}>
                <div className={s.cityPin}>
                  <span className={s.pinIcon}><span className={s.pinRing}/></span>
                </div>
                <div>
                  <h4 className={s.cityName}>{o.city}</h4>
                  <span className={s.cityCountry}>{o.country}</span>
                  <p className={s.cityDesc}>{o.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${s.remoteBar} reveal rd2`}>
          <div className={s.remoteLeft}>
            <div className={s.remoteIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <div>
              <h4 className={s.remoteTitle}>Modalidad 100% Remota</h4>
              <p className={s.remoteDesc}>Trabajamos con clientes de cualquier país. Sin restricciones geográficas.</p>
            </div>
          </div>
          <div className={s.countryChips}>
            {COUNTRIES.map(c => (
              <span key={c} className={s.chip}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
