import { useScrollReveal } from '../hooks/useScrollReveal';
import s from './PortfolioSection.module.scss';

// DICOM card - brain visualization
function DicomVisual() {
  return (
    <div className={s.dicomVisual}>
      <svg viewBox="0 0 320 200" className={s.dicomSvg}>
        <defs>
          <radialGradient id="brainGrad" cx="50%" cy="45%">
            <stop offset="0%" stopColor="#1a6090"/>
            <stop offset="40%" stopColor="#0d4060"/>
            <stop offset="100%" stopColor="#040e18"/>
          </radialGradient>
          <radialGradient id="brainCore" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#2a80b0" stopOpacity="0.9"/>
            <stop offset="60%" stopColor="#1a5070" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        {/* Brain bg glow */}
        <ellipse cx="160" cy="95" rx="110" ry="90" fill="url(#brainGrad)" opacity="0.9"/>
        {/* Brain core */}
        <ellipse cx="160" cy="88" rx="75" ry="68" fill="url(#brainCore)" filter="url(#glow)"/>
        {/* Brain folds - left hemisphere */}
        <path d="M90,80 Q100,60 120,65 Q110,80 105,95 Q95,90 90,80Z" fill="#1e6888" opacity="0.7"/>
        <path d="M95,100 Q108,88 125,93 Q118,108 110,115 Q98,112 95,100Z" fill="#1a5c78" opacity="0.6"/>
        <path d="M102,118 Q115,110 130,114 Q125,128 115,132 Q105,128 102,118Z" fill="#164e65" opacity="0.55"/>
        {/* Brain folds - right hemisphere */}
        <path d="M230,80 Q220,60 200,65 Q210,80 215,95 Q225,90 230,80Z" fill="#1e6888" opacity="0.7"/>
        <path d="M225,100 Q212,88 195,93 Q202,108 210,115 Q222,112 225,100Z" fill="#1a5c78" opacity="0.6"/>
        <path d="M218,118 Q205,110 190,114 Q195,128 205,132 Q215,128 218,118Z" fill="#164e65" opacity="0.55"/>
        {/* Center line */}
        <line x1="160" y1="30" x2="160" y2="165" stroke="#0097b2" strokeWidth="0.8" opacity="0.4" strokeDasharray="3,3"/>
        {/* Corpus callosum */}
        <path d="M130,95 Q145,82 160,80 Q175,82 190,95" fill="none" stroke="#2090c0" strokeWidth="2" opacity="0.6"/>
        {/* Outer glow ring */}
        <ellipse cx="160" cy="95" rx="108" ry="88" fill="none" stroke="#0097b2" strokeWidth="0.8" opacity="0.5"/>
        <ellipse cx="160" cy="95" rx="115" ry="93" fill="none" stroke="#0097b2" strokeWidth="0.4" opacity="0.25"/>
        {/* HUD crosshair */}
        <line x1="50" y1="95" x2="80" y2="95" stroke="#0097b2" strokeWidth="0.8" opacity="0.6"/>
        <line x1="240" y1="95" x2="270" y2="95" stroke="#0097b2" strokeWidth="0.8" opacity="0.6"/>
        <line x1="160" y1="10" x2="160" y2="35" stroke="#0097b2" strokeWidth="0.8" opacity="0.6"/>
        <line x1="160" y1="155" x2="160" y2="178" stroke="#0097b2" strokeWidth="0.8" opacity="0.6"/>
        {/* Corner brackets */}
        <path d="M30,20 L30,35 M30,20 L45,20" stroke="#0097b2" strokeWidth="1.2" fill="none" opacity="0.7"/>
        <path d="M290,20 L290,35 M290,20 L275,20" stroke="#0097b2" strokeWidth="1.2" fill="none" opacity="0.7"/>
        <path d="M30,178 L30,163 M30,178 L45,178" stroke="#0097b2" strokeWidth="1.2" fill="none" opacity="0.7"/>
        <path d="M290,178 L290,163 M290,178 L275,178" stroke="#0097b2" strokeWidth="1.2" fill="none" opacity="0.7"/>
        {/* Labels */}
        <text x="35" y="17" fill="#0097b2" fontSize="8" fontFamily="monospace" opacity="0.8">DICOM 3.0</text>
        <text x="240" y="17" fill="#0097b2" fontSize="8" fontFamily="monospace" opacity="0.8" textAnchor="end">512×512</text>
        <text x="35" y="192" fill="#0097b2" fontSize="7" fontFamily="monospace" opacity="0.6">CT BRAIN · AXIAL</text>
        <text x="290" y="192" fill="#0097b2" fontSize="7" fontFamily="monospace" opacity="0.6" textAnchor="end">SLICE 24/48</text>
      </svg>
    </div>
  );
}

// Telemetry dashboard card
function TelemetryVisual() {
  const bars = [40,72,55,88,63,80,47,70,84,52,92,60,75,48,86,58];
  return (
    <div className={s.telemVisual}>
      {/* Header bar */}
      <div className={s.telemBar}>
        <div className={s.telemBarLeft}>
          <span className={s.telemF1}>F1 · Tornal</span>
          <span className={s.telemLive}><span className={s.liveDot}/>Real-time Data</span>
        </div>
        <div className={s.telemControls}>
          <span className={s.tCtrl}>—</span>
          <span className={s.tCtrl}>□</span>
          <span className={s.tCtrlRed}>✕</span>
        </div>
      </div>

      <div className={s.telemBody}>
        {/* Speedometer */}
        <div className={s.speedoWrap}>
          <svg viewBox="0 0 130 130" className={s.speedo}>
            <defs>
              <radialGradient id="speedoGrad" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(0,151,178,0.15)"/>
                <stop offset="100%" stopColor="rgba(0,20,40,0.8)"/>
              </radialGradient>
            </defs>
            <circle cx="65" cy="65" r="60" fill="url(#speedoGrad)" stroke="rgba(0,151,178,0.2)" strokeWidth="1"/>
            {/* Ticks */}
            {Array.from({length:21},(_,i)=>{
              const a=(i/20)*240-120;const r=a*Math.PI/180;
              const x1=65+48*Math.sin(r),y1=65-48*Math.cos(r);
              const x2=65+(i%5===0?40:44)*Math.sin(r),y2=65-(i%5===0?40:44)*Math.cos(r);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i%5===0?"rgba(0,151,178,0.7)":"rgba(255,255,255,0.2)"} strokeWidth={i%5===0?1.5:0.8}/>;
            })}
            {/* Arc fill */}
            <path d="M22,99 A55,55 0 1,1 108,99" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" strokeLinecap="round"/>
            <path d="M22,99 A55,55 0 0,1 92,28" fill="none" stroke="#0097b2" strokeWidth="6" strokeLinecap="round" opacity="0.9"/>
            {/* Needle */}
            <line x1="65" y1="65" x2="65" y2="22" stroke="#0097b2" strokeWidth="2" strokeLinecap="round" transform="rotate(42,65,65)"/>
            <circle cx="65" cy="65" r="5" fill="#0097b2"/>
            <circle cx="65" cy="65" r="2.5" fill="white"/>
            {/* Value */}
            <text x="65" y="80" textAnchor="middle" fill="white" fontSize="22" fontWeight="700" fontFamily="Rajdhani">30</text>
            <text x="65" y="92" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="8" fontFamily="Share Tech Mono">km/h × 10</text>
          </svg>
          <div className={s.speedoLabel}>
            <span className={s.speedoVal}>7,200</span>
            <span className={s.speedoUnit}>RPM</span>
          </div>
        </div>

        {/* Charts */}
        <div className={s.charts}>
          <div className={s.chartRow}>
            {/* Bar chart */}
            <div className={s.barChart}>
              <div className={s.chartTitle}>
                <span>Speed</span>
                <span className={s.chartVal}>287 km/h</span>
              </div>
              <div className={s.bars}>
                {bars.map((h,i) => (
                  <div key={i} className={s.bar}
                    style={{ height:`${h}%`, animationDelay:`${i*0.1}s`, background: h>75?'#0097b2':'rgba(0,151,178,0.5)' }}/>
                ))}
              </div>
            </div>

            {/* Line chart */}
            <div className={s.lineChart}>
              <div className={s.chartTitle}>
                <span>G-Force</span>
                <span className={s.chartVal}>3.8g</span>
              </div>
              <svg viewBox="0 0 160 60" preserveAspectRatio="none" className={s.lineSvg}>
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0097b2" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#0097b2" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <polyline points="0,50 12,35 24,42 36,18 48,28 60,22 72,38 84,15 96,26 108,40 120,10 132,24 144,18 160,32"
                  fill="none" stroke="#0097b2" strokeWidth="2" strokeLinejoin="round"/>
                <polygon points="0,50 12,35 24,42 36,18 48,28 60,22 72,38 84,15 96,26 108,40 120,10 132,24 144,18 160,32 160,60 0,60"
                  fill="url(#lineGrad)"/>
              </svg>
            </div>
          </div>

          {/* Metrics row */}
          <div className={s.metricsRow}>
            {[['LAP','1:28.342'],['SECTOR','S3 ●'],['GAP','+0.824s']].map(([l,v])=>(
              <div key={l} className={s.metric}>
                <span className={s.metricLbl}>{l}</span>
                <span className={s.metricVal}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
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
