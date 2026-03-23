import { useEffect, useRef } from 'react'
import s from './CircuitBg.module.scss'

export default function CircuitBg() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Generate nodes
    const nodes = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.8,
      phase: Math.random() * Math.PI * 2,
    }))

    // Find edges under threshold
    const edges = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
        if (d < 200) edges.push({ a: nodes[i], b: nodes[j], d })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Edges
      edges.forEach(({ a, b, d }) => {
        const alpha = (1 - d / 200) * 0.22
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = `rgba(0,229,255,${alpha})`
        ctx.lineWidth = 0.6
        ctx.stroke()
      })
      // Nodes
      nodes.forEach(n => {
        n.phase += 0.018
        const glow = (Math.sin(n.phase) * 0.5 + 0.5) * 0.55 + 0.12
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,229,255,${glow})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} className={s.canvas} />
}
