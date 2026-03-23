import s from './Footer.module.scss';
const go = (e,h) => { e.preventDefault(); document.querySelector(h)?.scrollIntoView({behavior:'smooth'}); };

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.col1}>
          <div className={s.brand}>
            <img src="/usina-factory-logo.png" alt="USINA" className={s.logo}/>
            <span className={s.brandName}>USINA</span>
          </div>
          <p className={s.tagline}>
            Software Factory ágil. Aliados en<br/>Transformación Digital. Construimos software<br/>con foco en valor real de negocio.
          </p>
          <div className={s.socials}>
            {/* LinkedIn */}
            <a href="#" className={s.social} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* GitHub */}
            <a href="#" className={s.social} aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className={s.social} aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4l16 16M4 20L20 4"/></svg>
            </a>
          </div>
        </div>

        <div className={s.col}>
          <h5 className={s.colHead}>SERVICIOS</h5>
          <ul>
            {['Páginas Institucionales','Software a Medida','Consultoría IT','R&D / Prototipado'].map(l=>(
              <li key={l}><a href="#servicios" onClick={e=>go(e,'#servicios')}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div className={s.col}>
          <h5 className={s.colHead}>EMPRESA</h5>
          <ul>
            {[['Sobre USINA','#nosotros'],['Portfolio','#portfolio'],['Ubicación','#ubicacion'],['Contacto','#contacto']].map(([l,h])=>(
              <li key={l}><a href={h} onClick={e=>go(e,h)}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div className={s.col}>
          <h5 className={s.colHead}>PRESENCIA</h5>
          <ul>
            <li><a href="https://maps.google.com/?q=Buenos+Aires+Argentina" target="_blank" rel="noopener noreferrer">Buenos Aires, AR</a></li>
            <li><a href="https://maps.google.com/?q=Mendoza+Argentina" target="_blank" rel="noopener noreferrer">Mendoza, AR</a></li>
          </ul>
        </div>
      </div>

      <div className={s.bottom}>
        <span className={s.copy}>© {new Date().getFullYear()} USINA Software Factory. Todos los derechos reservados.</span>
        <span className={s.motto}>Operamos localmente, trabajamos globalmente.</span>
      </div>
    </footer>
  );
}
