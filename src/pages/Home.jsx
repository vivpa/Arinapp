import { Link } from 'react-router-dom';
import './Home.css';

const highlights = [
  {
    icon: '📜',
    title: 'Certamen',
    desc: 'Test your knowledge of Latin, mythology, and classical civilization in competitive quiz rounds.',
    link: '/events',
  },
  {
    icon: '🎭',
    title: 'Creative Arts',
    desc: 'Show off your talents in art, poetry, prose, and dramatic performance inspired by the ancient world.',
    link: '/events',
  },
  {
    icon: '⚔️',
    title: 'Academic Tests',
    desc: 'Demonstrate mastery in Latin grammar, derivatives, classical history, and mythology.',
    link: '/events',
  },
  {
    icon: '🏛️',
    title: 'Spirit Events',
    desc: 'Celebrate camaraderie through chapter spirit, banner displays, and group competitions.',
    link: '/events',
  },
];

const quickInfo = [
  { label: 'Dates', value: 'July 27–31, 2026' },
  { label: 'Location', value: 'Indianapolis, IN' },
  { label: 'Hotel', value: 'JW Marriott Indianapolis' },
  { label: 'Registration Deadline', value: 'June 1, 2026' },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-eyebrow">Welcome to the</p>
          <h1 className="hero-title">JCL National Convention</h1>
          <p className="hero-subtitle">
            Junior Classical League &bull; Indianapolis, Indiana &bull; July 2026
          </p>
          <div className="hero-divider"></div>
          <p className="hero-motto"><em>Artes, Mores, Lingua Latina</em></p>
          <div className="hero-actions">
            <Link to="/schedule" className="btn btn-gold">View Schedule</Link>
            <Link to="/events" className="btn btn-outline-light">Explore Events</Link>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="quick-info-bar">
        {quickInfo.map(({ label, value }) => (
          <div key={label} className="quick-info-item">
            <span className="quick-info-label">{label}</span>
            <span className="quick-info-value">{value}</span>
          </div>
        ))}
      </section>

      {/* Welcome */}
      <section className="section container">
        <div className="welcome-block">
          <h2 className="section-title">Salvete, Delegates!</h2>
          <div className="divider"></div>
          <p>
            Welcome to the <strong>2026 Junior Classical League National Convention</strong> — one of
            the largest student classics conventions in the world! Whether you are competing in
            Certamen, displaying your chapter's spirit, entering creative arts, or simply soaking in the
            culture of the ancient world, this week is <em>yours</em>.
          </p>
          <p>
            Use this app to navigate the schedule, find event locations, read announcements from
            convention staff, and make the most of your experience.
          </p>
          <Link to="/schedule" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            See Full Schedule →
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="section highlights-section">
        <div className="container">
          <h2 className="section-title text-center">Convention Highlights</h2>
          <div className="divider"></div>
          <div className="highlights-grid">
            {highlights.map(({ icon, title, desc, link }) => (
              <Link to={link} key={title} className="highlight-card card">
                <div className="highlight-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown placeholder */}
      <section className="section container">
        <div className="countdown-block">
          <h2 className="section-title">Convention Is Coming!</h2>
          <div className="divider"></div>
          <p>
            Mark your calendars — the convention runs <strong>July 27–31, 2026</strong> in Indianapolis,
            Indiana. Check the <Link to="/venue">Venue</Link> page for hotel and travel information.
          </p>
          <div className="cta-row">
            <Link to="/announcements" className="btn btn-primary">Latest Announcements</Link>
            <Link to="/venue" className="btn btn-outline">Venue &amp; Maps</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
