import s from './HeroSection.module.scss';

const go = (e, href) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); };

export default function HeroSection() {
  return (
    <section id="hero" className={s.hero}>
      {/* Code panel backgrounds */}
      <div className={s.codePanelLeft}>
        {codeLines.slice(0, 20).map((l, i) => <div key={i} className={s.codeLine} style={{ opacity: 0.15 + (i % 5) * 0.07 }}>{l}</div>)}
      </div>
      <div className={s.codePanelRight}>
        {codeLines.slice(20).map((l, i) => <div key={i} className={s.codeLine} style={{ opacity: 0.12 + (i % 4) * 0.06 }}>{l}</div>)}
      </div>
      <div className={s.centerGradient} />

      <div className={s.inner}>
        {/* Badge */}
        <div className={s.badge} style={{ animationDelay: '0.1s' }}>
          <span className={s.badgeDot} />
          SOFTWARE FACTORY
        </div>

        {/* Title */}
        <h1 className={s.title} style={{ animationDelay: '0.25s' }}>
          <span className={s.titleWhite}>Aliados en</span>
          <span className={s.titleTurquesa}>Transformación</span>
          <span className={s.titleWhite}>Digital</span>
        </h1>

        {/* Subtitle */}
        <p className={s.subtitle} style={{ animationDelay: '0.4s' }}>
          Construimos software enfocado en potenciar tus operaciones.<br />
          Ejecución ágil, estándares internacionales, y un gran equipo cerca tuyo.
        </p>

        {/* CTAs */}
        <div className={s.ctas} style={{ animationDelay: '0.5s' }}>
          <a href="#contacto" className={s.btnPrimary} onClick={e => go(e, '#contacto')}>
            Hablemos de tu proyecto
          </a>
          <a href="#servicios" className={s.btnSecondary} onClick={e => go(e, '#servicios')}>
            Ver servicios
          </a>
        </div>

        {/* Stats */}
        <div className={s.stats} style={{ animationDelay: '0.65s' }}>
          <div className={s.stat}>
            <span className={s.statVal}>100%</span>
            <span className={s.statLbl}>Remoto</span>
          </div>
          <div className={s.statDiv} />
          <div className={s.stat}>
            <span className={s.statVal}>2+</span>
            <span className={s.statLbl}>Oficinas en Argentina</span>
          </div>
          <div className={s.statDiv} />
          <div className={s.stat}>
            <span className={s.statVal}>Global</span>
            <span className={s.statLbl}>Alcance</span>
          </div>
        </div>

        {/* Scroll hint */}
        <div className={s.scrollHint} style={{ animationDelay: '1s' }}>
          <span className={s.scrollText}>SCROLL</span>
          <span className={s.scrollArrow}>↓</span>
        </div>
      </div>
    </section>
  );
}

const codeLines = [
  'import { useState } from "react"',
  'const factory = new SoftwareFactory()',
  'factory.build({ quality: "enterprise" })',
  'async function deploy(app) {',
  '  await ci.run(tests)',
  '  return production.push(app)',
  '}',
  'class USINAFactory extends Agency {',
  '  constructor() {',
  '    this.stack = ["React","Node","AWS"]',
  '  }',
  '  async deliver(project) {',
  '    return await this.build(project)',
  '  }',
  '}',
  'const pipeline = createPipeline({',
  '  stages: ["dev","qa","prod"],',
  '  quality: true,',
  '})',
  'export default USINAFactory',
  '// Transformación Digital',
  'git commit -m "feat: launch v2"',
  'npm run build:production',
  'docker build -t usina/app .',
  'kubectl apply -f deployment.yml',
  'terraform apply --auto-approve',
  'const result = await api.post("/build")',
  'console.log("Deployed ✓")',
  'while(true) { innovate() }',
  'return { success: true }',
  'module.exports = { USINA }',
  '// Argentina → Global',
  'git push origin main',
  'npm install @usina/core',
  'yarn build && yarn deploy',
  'SELECT * FROM solutions',
  'WHERE quality = "high"',
  'AND client = "satisfied"',
  'COMMIT; -- Done',
  'ssh usina@prod.server.ar',
];
