import './Announcements.css';

const announcements = [
  {
    id: 1,
    date: 'April 1, 2026',
    title: 'Registration Now Open!',
    tag: 'Important',
    tagType: 'crimson',
    body: `Registration for the 2026 JCL National Convention is now officially open! Delegates, sponsors, and chaperones can register through the NJCL website. The early-bird deadline is May 1, 2026, and the final deadline is June 1, 2026. Don't miss your spot!`,
  },
  {
    id: 2,
    date: 'March 20, 2026',
    title: 'Hotel Reservation Block Now Available',
    tag: 'Logistics',
    tagType: 'dark',
    body: `A block of rooms has been reserved at the JW Marriott Indianapolis for convention delegates and chaperones. Please book through the NJCL convention room block to receive the special group rate. Rooms will be released May 15, so book early!`,
  },
  {
    id: 3,
    date: 'March 10, 2026',
    title: 'Certamen Packet Changes for 2026',
    tag: 'Academic',
    tagType: 'gold',
    body: `The 2026 Certamen packets have been updated to include expanded Classical Art & Architecture content at the Advanced level. Review the updated study guides on the NJCL website. Practice packets will be available by April 15.`,
  },
  {
    id: 4,
    date: 'February 28, 2026',
    title: 'Creative Arts Submission Guidelines Posted',
    tag: 'Arts',
    tagType: 'gold',
    body: `Guidelines for all Creative Arts categories — including Classical Art, Latin Poetry, Prose, and Dramatic Performance — have been posted on the NJCL website. All submissions must be uploaded digitally by July 20, 2026. Physical submissions for 3D art must arrive by July 15.`,
  },
  {
    id: 5,
    date: 'February 14, 2026',
    title: 'Convention Theme Announced: "Aeternum"',
    tag: 'General',
    tagType: 'dark',
    body: `This year's convention theme is "Aeternum" — Latin for "eternal." Chapter spirit events, banners, and decorations are encouraged to reflect themes of timelessness, legacy, and the eternal influence of classical civilization. Let your creativity flow!`,
  },
  {
    id: 6,
    date: 'January 30, 2026',
    title: 'Officer Candidate Applications Open',
    tag: 'Elections',
    tagType: 'crimson',
    body: `Aspiring NJCL officers can now apply to run for national office. Applications are due April 1, 2026. Campaign materials may be distributed at the convention beginning July 27. Review the candidate requirements and platform guidelines on the NJCL website.`,
  },
];

const tagColors = {
  crimson: '#8b0000',
  gold: '#c9a227',
  dark: '#1a1008',
};

export default function Announcements() {
  return (
    <div>
      <div className="page-header">
        <h1>Announcements</h1>
        <p>Stay up to date with the latest convention news</p>
      </div>

      <div className="container section">
        <div className="announcements-list">
          {announcements.map((ann) => (
            <article key={ann.id} className="announcement-card card">
              <div className="announcement-meta">
                <span
                  className="announcement-tag"
                  style={{ background: tagColors[ann.tagType] || '#333' }}
                >
                  {ann.tag}
                </span>
                <span className="announcement-date">📅 {ann.date}</span>
              </div>
              <h2 className="announcement-title">{ann.title}</h2>
              <p className="announcement-body">{ann.body}</p>
            </article>
          ))}
        </div>

        <div className="announcement-note card">
          <div className="card-body">
            <p>
              <strong>📢 Stay Connected:</strong> For the most up-to-date information, visit the{' '}
              <a href="https://www.njcl.org" target="_blank" rel="noreferrer">NJCL official website</a>{' '}
              and follow your state JCL chapter for local updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
