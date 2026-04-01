import { useScrollReveal } from '../hooks/useScrollReveal';
import s from './PortfolioSection.module.scss';
import dicomImage from '../assets/dicom-viewer.png'; // O .png según la imagen adjunta
import telemImage from '../assets/telemetria.png'; // O .png según la imagen adjunta

// DICOM card - brain visualization
function DicomVisual() {
  return (
    <div className={s.dicomVisual}>
      <img src={dicomImage} alt="Visualizador DICOM" className={s.dicomSvg} />
    </div>
  );
}

// Telemetry dashboard card
function TelemetryVisual() {
  return (
    <div className={s.telemVisual}>
      <img src={telemImage} alt="Dashboard de Telemetría" className={s.telemImg} />
    </div>
  );
}

export default function PortfolioSection() {
  const ref = useScrollReveal();
  const go = (e) => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior:'smooth' }); };

  return (
    <section id="portfolio" className={s.section} ref={ref}>
      <div className={s.inner}>
        <div className={s.header}>
          <div className={s.headerLeft}>
            <p className={`${s.label} reveal`}>CAPACIDAD TÉCNICA</p>
            <h2 className={`${s.h2} reveal rd1`}>Portfolio</h2>
            <p className={`${s.subtitle} reveal rd2`}>
              Diversidad de dominios, profundidad técnica. Adaptabilidad<br/>y versatilidad en cualquier nicho.
            </p>
          </div>
          <p className={`${s.casosLabel} reveal rd2`}>Casos reales de USINA</p>
        </div>

        <div className={s.grid}>
          {/* DICOM */}
          <div className={`${s.card} reveal rd1`}>
            <div className={s.cardVisual}>
              <span className="tag-pill" style={{position:'absolute',top:'1rem',left:'1rem',zIndex:2}}>Healthcare Tech</span>
              <DicomVisual />
            </div>
            <div className={s.cardInfo}>
              <h3 className={s.cardTitle}>Visualizador DICOM</h3>
              <p className={s.cardDesc}>
                Procesamiento y visualización de imágenes médicas de alta precisión. Herramienta técnica de diagnóstico con enfoque en performance y exactitud.
              </p>
              <div className={s.tags}>
                <span className="tag-pill">Procesamiento en tiempo real</span>
                <span className="tag-pill">Compatibilidad estándar DICOM</span>
                <span className="tag-pill">Interfaz clínica optimizada</span>
              </div>
            </div>
          </div>

          {/* Telemetry */}
          <div className={`${s.card} reveal rd2`}>
            <div className={s.cardVisual}>
              <TelemetryVisual />
            </div>
            <div className={s.cardInfo}>
              <h3 className={s.cardTitle}>Procesador de Telemetría</h3>
              <p className={s.cardDesc}>
                Análisis de datos de telemetría de Fórmula 1 en tiempo real. Alto volumen de información, performance extrema y visualización analítica precisa.
              </p>
              <div className={s.tags}>
                <span className="tag-pill">Alto volumen de datos</span>
                <span className="tag-pill">Latencia sub-segundo</span>
                <span className="tag-pill">Dashboards analíticos</span>
              </div>
            </div>
          </div>
        </div>

        <p className={`${s.cta} reveal rd2`}>
          ¿Querés ver más? Hablemos —{' '}
          <a href="#contacto" className={s.ctaLink} onClick={go}>contanos tu desafío</a>
        </p>
      </div>
    </section>
  );
}
