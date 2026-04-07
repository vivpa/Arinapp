import './About.css';

const faq = [
  {
    q: 'What is the Junior Classical League (JCL)?',
    a: 'The Junior Classical League is a national student organization for middle and high school students interested in Latin, classical Greek, and the ancient world. Founded in 1936, JCL promotes the study and appreciation of Greco-Roman language, history, and culture.',
  },
  {
    q: 'What is the National JCL Convention?',
    a: 'The NJCL Annual Convention is the flagship event of the Junior Classical League, bringing together thousands of students from across the country for academic competitions, creative arts, spirit events, and leadership activities. It is held every summer at a different host city.',
  },
  {
    q: 'Who can attend?',
    a: 'Any student who is a current member of a chartered JCL chapter is eligible to attend the National Convention. Delegates are accompanied by certified adult sponsors and chaperones.',
  },
  {
    q: 'What is Certamen?',
    a: 'Certamen (Latin: "contest") is JCL\'s signature quiz bowl competition. Teams of four students compete in timed rounds covering Latin grammar and translation, mythology, Roman history, classical culture, and more. Certamen is offered at Novice, Intermediate, and Advanced levels.',
  },
  {
    q: 'Are there academic tests at the convention?',
    a: 'Yes! Individual academic tests cover Latin grammar and translation at multiple levels, mythology, Roman history, classical art and architecture, Latin derivatives, and Roman life and culture. Students may enter multiple tests.',
  },
  {
    q: 'How can I run for NJCL office?',
    a: 'Students interested in running for national office must submit a candidate application by the published deadline (April 1, 2026 for this year\'s convention). Candidates may campaign at the convention and will be voted on by chapter delegates at the Business Meeting.',
  },
  {
    q: 'What should I bring to the convention?',
    a: 'Pack casual and dressy clothing for the banquets and dances, comfortable shoes for walking, a toga or materials to make one, study materials, your chapter\'s spirit supplies, and plenty of enthusiasm! Check with your chapter sponsor for a detailed packing list.',
  },
];

const exec = [
  { role: 'President', name: 'Julia Fabia Maxima', state: 'Virginia' },
  { role: 'Vice President', name: 'Marcus Quintus Servius', state: 'Texas' },
  { role: 'Secretary', name: 'Octavia Lucia Varro', state: 'Ohio' },
  { role: 'Treasurer', name: 'Publius Caelius Rufus', state: 'Illinois' },
  { role: 'Editor', name: 'Claudia Sempronia', state: 'New York' },
];

export default function About() {
  return (
    <div>
      <div className="page-header">
        <h1>About JCL</h1>
        <p>Promoting the legacy of classical civilization since 1936</p>
      </div>

      <div className="container section">
        {/* Mission */}
        <div className="about-mission card">
          <div className="card-header"><h3>Our Mission</h3></div>
          <div className="card-body">
            <p>
              The Junior Classical League fosters scholarship, good citizenship, and a love for the
              classical languages and cultures of Greece and Rome. Through academic achievement, creative
              expression, leadership, and service, JCL members carry on the timeless traditions of the
              ancient world and apply them to life today.
            </p>
            <div className="motto-block">
              <span className="ornament">⚜</span>
              <em> Artes, Mores, Lingua Latina </em>
              <span className="ornament">⚜</span>
            </div>
            <p className="motto-translation">
              "Skills, Character, the Latin Language" — The NJCL motto
            </p>
          </div>
        </div>

        {/* Officers */}
        <h2 className="section-title" style={{ marginTop: '2.5rem' }}>2025–2026 NJCL Executive Officers</h2>
        <div className="divider"></div>
        <div className="officers-grid">
          {exec.map(o => (
            <div key={o.role} className="officer-card card">
              <div className="officer-icon">🏛️</div>
              <div>
                <div className="officer-role badge badge-gold">{o.role}</div>
                <div className="officer-name">{o.name}</div>
                <div className="officer-state">{o.state}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="section-title" style={{ marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
        <div className="divider"></div>
        <div className="faq-list">
          {faq.map((item, i) => (
            <details key={i} className="faq-item card">
              <summary className="faq-question">{item.q}</summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>

        {/* Links */}
        <div className="external-links card" style={{ marginTop: '2rem' }}>
          <div className="card-header"><h3>🔗 Useful Links</h3></div>
          <div className="card-body links-grid">
            <a href="https://www.njcl.org" target="_blank" rel="noreferrer" className="ext-link">NJCL Official Website</a>
            <a href="https://www.njcl.org/convention" target="_blank" rel="noreferrer" className="ext-link">Convention Home</a>
            <a href="https://www.njcl.org/certamen" target="_blank" rel="noreferrer" className="ext-link">Certamen Study Guides</a>
            <a href="https://www.njcl.org/membership" target="_blank" rel="noreferrer" className="ext-link">Membership Info</a>
          </div>
        </div>
      </div>
    </div>
  );
}
