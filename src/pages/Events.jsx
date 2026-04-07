import { useState } from 'react';
import './Events.css';

const categories = ['All', 'Academic', 'Certamen', 'Creative Arts', 'Spirit', 'Athletics'];

const events = [
  // Academic Tests
  { name: 'Latin I Grammar & Translation', category: 'Academic', description: 'First-year Latin reading comprehension and grammar test.', rules: 'Individual. 45 minutes. One entry per chapter.', prizes: '1st–3rd place ribbons' },
  { name: 'Latin II Grammar & Translation', category: 'Academic', description: 'Second-year Latin reading comprehension and grammar test.', rules: 'Individual. 45 minutes. One entry per chapter.', prizes: '1st–3rd place ribbons' },
  { name: 'Latin III/IV/V', category: 'Academic', description: 'Advanced Latin prose and poetry translation with commentary.', rules: 'Individual. 60 minutes. One entry per chapter.', prizes: '1st–3rd place ribbons' },
  { name: 'Mythology', category: 'Academic', description: 'Comprehensive test on Greek and Roman mythology.', rules: 'Individual. 45 minutes. Multiple entries allowed.', prizes: '1st–3rd place ribbons' },
  { name: 'Roman Life & Culture', category: 'Academic', description: 'Test covering daily life, customs, and society in ancient Rome.', rules: 'Individual. 45 minutes.', prizes: '1st–3rd place ribbons' },
  { name: 'Classical Art & Architecture', category: 'Academic', description: 'Identification and analysis of classical artworks and buildings.', rules: 'Individual. 45 minutes.', prizes: '1st–3rd place ribbons' },
  { name: 'Roman History', category: 'Academic', description: 'Chronological test covering Roman history from the founding through the fall.', rules: 'Individual. 45 minutes.', prizes: '1st–3rd place ribbons' },
  { name: 'Latin Derivatives', category: 'Academic', description: 'English vocabulary derived from Latin roots.', rules: 'Individual. 30 minutes.', prizes: '1st–3rd place ribbons' },
  // Certamen
  { name: 'Certamen — Novice', category: 'Certamen', description: 'Team quiz bowl in Latin grammar, mythology, and classical culture for first-year students.', rules: 'Teams of 4. Round-robin then elimination bracket.', prizes: 'Trophy for top 3 teams' },
  { name: 'Certamen — Intermediate', category: 'Certamen', description: 'Team quiz bowl for second and third year Latin students.', rules: 'Teams of 4. Round-robin then elimination bracket.', prizes: 'Trophy for top 3 teams' },
  { name: 'Certamen — Advanced', category: 'Certamen', description: 'Highly competitive team quiz bowl for advanced Latin scholars.', rules: 'Teams of 4. Double elimination.', prizes: 'Trophy for top 3 teams + individual medals' },
  // Creative Arts
  { name: 'Latin Original Oratory', category: 'Creative Arts', description: 'Deliver an original speech composed in Latin.', rules: '3–5 minutes. Judged on pronunciation, grammar, and delivery.', prizes: '1st–3rd place' },
  { name: 'Latin Recitation', category: 'Creative Arts', description: 'Memorize and perform a selection from Latin literature.', rules: 'Maximum 4 minutes. Classical or medieval Latin texts accepted.', prizes: '1st–3rd place' },
  { name: 'Classical Art', category: 'Creative Arts', description: 'Create original artwork inspired by classical antiquity.', rules: '2D or 3D media. Submitted prior to competition.', prizes: '1st–3rd place + Best in Show' },
  { name: 'Classical Poetry', category: 'Creative Arts', description: 'Submit original poetry in Latin or English inspired by the classics.', rules: 'Maximum 50 lines. Judged on form, content, and classical inspiration.', prizes: '1st–3rd place' },
  { name: 'Classical Prose', category: 'Creative Arts', description: 'Submit an original essay or short story with classical themes.', rules: 'Maximum 1,000 words.', prizes: '1st–3rd place' },
  { name: 'Dramatic Performance', category: 'Creative Arts', description: 'Perform a scene from ancient drama or an original play in a classical setting.', rules: 'Groups up to 10. Maximum 10 minutes.', prizes: '1st–3rd place' },
  // Spirit
  { name: 'Chapter Banner', category: 'Spirit', description: 'Design and display a banner representing your chapter and its theme.', rules: 'Max 4 ft × 6 ft. Must include chapter name.', prizes: 'Best Banner award' },
  { name: 'Chapter Cheer', category: 'Spirit', description: "Lead the crowd in a cheer representing your chapter's pride.", rules: 'Maximum 2 minutes. Props allowed.', prizes: 'Best Cheer award' },
  { name: 'Toga Design Competition', category: 'Spirit', description: 'Show off your most creative toga at the Roman Banquet.', rules: 'Individual or group. Judged on creativity and historical accuracy.', prizes: '1st–3rd place' },
  // Athletics
  { name: 'Chariot Races', category: 'Athletics', description: 'Team relay race inspired by Roman circus games.', rules: 'Teams of 4. Held on the sports complex track.', prizes: 'Laurel wreath crown + ribbon' },
  { name: 'Discus Throw', category: 'Athletics', description: 'Test your might in this classic Olympic event.', rules: 'Individual. 3 throws. Best distance counts.', prizes: 'Laurel wreath crown + ribbon' },
  { name: 'Tug of War', category: 'Athletics', description: 'Chapter vs. chapter in this ancient test of strength.', rules: 'Teams of 8. Single elimination.', prizes: 'Laurel wreath crown + ribbon' },
];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = events.filter(e => {
    const matchCat = activeCategory === 'All' || e.category === activeCategory;
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      <div className="page-header">
        <h1>Events &amp; Contests</h1>
        <p>Compete, create, and celebrate at the 2026 JCL National Convention</p>
      </div>

      <div className="container section">
        {/* Filters */}
        <div className="events-controls">
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Search events…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <p className="results-count">
          Showing <strong>{filtered.length}</strong> of {events.length} events
        </p>

        <div className="events-grid">
          {filtered.map(ev => (
            <div key={ev.name} className="event-card card">
              <div className="event-card-header card-header">
                <span className="event-category-badge">{ev.category}</span>
                <h3>{ev.name}</h3>
              </div>
              <div className="event-card-body card-body">
                <p className="event-desc">{ev.description}</p>
                <div className="event-meta">
                  <div className="event-meta-row">
                    <span className="meta-label">📋 Rules</span>
                    <span>{ev.rules}</span>
                  </div>
                  <div className="event-meta-row">
                    <span className="meta-label">🏆 Awards</span>
                    <span>{ev.prizes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-results">
            <p>No events match your search. Try a different filter or keyword.</p>
          </div>
        )}
      </div>
    </div>
  );
}
