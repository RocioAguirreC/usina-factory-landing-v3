import { motion } from 'framer-motion';
import s from './HeroSection.module.scss';

const go = (e, href) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 15 } }
};

const itemFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

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

      <motion.div
        className={s.inner}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div variants={itemFade} className={s.badge}>
          <span className={s.badgeDot} />
          SOFTWARE FACTORY
        </motion.div>

        {/* Title */}
        <motion.h1 variants={itemUp} className={s.title}>
          <span className={s.titleWhite}>Aliados en</span>
          <span className={s.titleTurquesa}>Transformación</span>
          <span className={s.titleWhite}>Digital</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemUp} className={s.subtitle}>
          Construimos software enfocado en potenciar tus operaciones.<br />
          Ejecución ágil, estándares internacionales, y un gran equipo cerca tuyo.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemUp} className={s.ctas}>
          <a href="#contacto" className={s.btnPrimary} onClick={e => go(e, '#contacto')}>
            Hablemos de tu proyecto
          </a>
          <a href="#servicios" className={s.btnSecondary} onClick={e => go(e, '#servicios')}>
            Ver servicios
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemUp} className={s.stats}>
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
        </motion.div>

        {/* Scroll hint */}
        <motion.div variants={itemFade} className={s.scrollHint}>
          <span className={s.scrollText}>SCROLL</span>
          <span className={s.scrollArrow}>↓</span>
        </motion.div>
      </motion.div>
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
