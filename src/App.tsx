import HeroSnow from './components/HeroSnow'

const features = [
  {
    title: 'App-Connected Control',
    description:
      'Fine-tune your environment with the ThermoSync app. Real-time temperature adjustments from 20 C to 55 C.',
    accent: 'Live Sync Active',
  },
  {
    title: '24h Battery Life',
    description:
      'Engineered for endurance. Our graphene-ion core provides a full day of warmth on a single USB-C charge.',
    accent: '100% Charge',
  },
  {
    title: 'Premium Materials',
    description:
      'Triple-layer construction featuring breathable nanopores, waterproof membrane, and ultra-soft thermal lining.',
    accent: '3 Layer Build',
  },
]

const reviews = [
  {
    quote:
      "I used the Pro version during a 3-day trek in the Alps. The Bluetooth control is a game-changer when you're moving between shade and direct sun.",
    name: 'Marcus Thorne',
    role: 'Professional Climber',
  },
  {
    quote:
      "The materials feel incredibly premium. It's the first smart jacket I've owned that actually looks like high-end fashion rather than a gadget.",
    name: 'Elena Vance',
    role: 'Creative Director',
  },
  {
    quote:
      'Cold morning commutes are finally tolerable. The battery actually lasts all week for my 40-minute daily use. Highly recommended.',
    name: 'Julian Ross',
    role: 'Tech Analyst',
  },
]

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbar-content">
          <div className="brand">
            <span className="brand-dot" />
            <span>THERMOSYNC</span>
          </div>
          <button className="btn btn-primary">BUY NOW</button>
        </div>
      </header>

      <main>
        <section className="hero container">
          <HeroSnow />
          <h1>
            Master the <span>Elements</span>
          </h1>
          <p>
            Bluetooth-controlled warmth for the modern explorer. Experience
            precise thermal regulation at your fingertips.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Shop ThermoSync</button>
            <button className="btn btn-glass">Technical Specs</button>
          </div>
          <div className="hero-image-wrap">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbHpm_2bzcrDPrhAtk9bOMBKnsGGro166gIv-z_ZoT67rF2tltpo1WkHfpd7d9bpjUi-0NuNzXTueWB5X3ogXXrAFv_bfdg35fIEFWYy48mr9iPyQMxjmDJyF4TR0ngV4Sgn7YJZoDbRFP_4oXBXDgfthOIENy_noOsc19-pthEkekOWEu_LnUAY25Mv6mMjKn1V5Bz30jPYVK3tgBk6ELLbuGW_w_iL50JGErQuEMngvK_-Oe8xYoaGXsr0gG384i2xSy8MWdYiY"
              alt="ThermoSync smart jacket"
            />
          </div>
        </section>

        <section className="features container">
          {features.map((feature) => (
            <article className="card glass" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <small>{feature.accent}</small>
            </article>
          ))}
        </section>

        <section className="lineup">
          <div className="container">
            <h2>The Lineup</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>ThermoSync Core</th>
                    <th>ThermoSync Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Max Temp</td>
                    <td>45 C</td>
                    <td>55 C (Boost Mode)</td>
                  </tr>
                  <tr>
                    <td>Battery Life</td>
                    <td>12 Hours</td>
                    <td>24 Hours</td>
                  </tr>
                  <tr>
                    <td>Colors</td>
                    <td>2 Options</td>
                    <td>5 Options + Limited</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>$299</td>
                    <td className="price-accent">$449</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="reviews container">
          <h2>Proven in the Field</h2>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="card glass" key={review.name}>
                <div className="stars">★★★★★</div>
                <p className="quote">"{review.quote}"</p>
                <div className="author">
                  <strong>{review.name}</strong>
                  <small>{review.role}</small>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <strong>THERMOSYNC</strong>
            <p>2024 THERMOSYNC KINETICS. ENGINEERED FOR EXTREMES.</p>
          </div>
          <nav>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Technical Specs</a>
            <a href="#">Support</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
