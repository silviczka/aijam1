import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

function HeroSnow() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setReady(true)
    })
  }, [])

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: false },
          onHover: { enable: false },
        },
      },
      particles: {
        number: {
          value: 70,
          density: { enable: true, area: 900 },
        },
        color: {
          value: ['#ffffff', '#e6f7ff', '#c5f5ff'],
        },
        opacity: {
          value: { min: 0.2, max: 0.65 },
        },
        size: {
          value: { min: 1, max: 4.5 },
        },
        move: {
          enable: true,
          direction: 'bottom',
          speed: 0.8,
          random: true,
          outModes: { default: 'out' },
          straight: false,
        },
        shape: {
          type: 'circle',
        },
      },
      background: {
        color: 'transparent',
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    [],
  )

  return (
    <div className="hero-snow" aria-hidden="true">
      {ready ? <Particles id="hero-snow-particles" options={options} /> : null}
    </div>
  )
}

export default HeroSnow
