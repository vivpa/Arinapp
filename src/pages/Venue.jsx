import './Venue.css';

const venues = [
  {
    name: 'JW Marriott Indianapolis',
    role: 'Official Convention Hotel',
    address: '10 S West St, Indianapolis, IN 46204',
    phone: '+1 (317) 860-5800',
    notes: 'All delegate rooms, convention registration, opening/closing ceremonies, and banquets take place here. Use the NJCL room block when booking.',
    mapUrl: 'https://maps.google.com/?q=JW+Marriott+Indianapolis',
    emoji: '🏨',
  },
  {
    name: 'Grand Ballroom (JW Marriott)',
    role: 'Main Events Venue',
    address: 'Level 3, JW Marriott Indianapolis',
    phone: null,
    notes: 'Opening Ceremonies, Closing Ceremonies, Certamen Finals, Spirit Events, and Convention Dance.',
    mapUrl: null,
    emoji: '🏛️',
  },
  {
    name: 'Wabash Ballrooms A & B',
    role: 'Academic & Meeting Rooms',
    address: 'Level 2, JW Marriott Indianapolis',
    phone: null,
    notes: 'Business meetings, officer forums, and sponsor briefings.',
    mapUrl: null,
    emoji: '📋',
  },
  {
    name: 'Academic Testing Rooms (201–220)',
    role: 'Academic Competitions',
    address: 'Level 2, JW Marriott Indianapolis',
    phone: null,
    notes: 'All individual academic tests. Check event schedule for specific room assignments.',
    mapUrl: null,
    emoji: '📝',
  },
  {
    name: 'Indiana Convention Center',
    role: 'Overflow & Exhibition Hall',
    address: '100 S Capitol Ave, Indianapolis, IN 46225',
    phone: null,
    notes: 'Chapter Banner Display and Exhibition Hall events. Connected via sky bridge to the JW Marriott.',
    mapUrl: 'https://maps.google.com/?q=Indiana+Convention+Center',
    emoji: '🏟️',
  },
  {
    name: 'IUPUI Sports Complex',
    role: 'Athletics Events',
    address: '799 W Michigan St, Indianapolis, IN 46202',
    phone: null,
    notes: 'Chariot Races, Discus Throw, and Tug of War. Shuttle service from the hotel provided.',
    mapUrl: 'https://maps.google.com/?q=IUPUI+Sports+Complex+Indianapolis',
    emoji: '⚔️',
  },
];

const travelInfo = [
  { icon: '✈️', mode: 'By Air', info: 'Fly into Indianapolis International Airport (IND). The hotel is approximately 20 minutes from the airport by rideshare or taxi.' },
  { icon: '🚗', mode: 'By Car', info: 'The JW Marriott is located in downtown Indianapolis. Valet parking is available at the hotel. Use I-70 or I-65 to reach downtown.' },
  { icon: '🚌', mode: 'By Bus / Charter', info: 'Charter buses may drop off at the hotel main entrance. Coordinate drop-off times with the convention logistics team.' },
  { icon: '🚕', mode: 'Rideshare & Transit', info: 'Uber, Lyft, and IndyGo public transit serve downtown Indianapolis. The hotel is on multiple bus lines.' },
];

export default function Venue() {
  return (
    <div>
      <div className="page-header">
        <h1>Venue &amp; Maps</h1>
        <p>Everything you need to navigate the 2026 JCL Convention</p>
      </div>

      <div className="container section">
        {/* Venue Cards */}
        <h2 className="section-title">Convention Venues</h2>
        <div className="divider"></div>
        <div className="venues-grid">
          {venues.map(v => (
            <div key={v.name} className="venue-card card">
              <div className="venue-emoji">{v.emoji}</div>
              <div className="venue-info">
                <div className="venue-role badge badge-crimson">{v.role}</div>
                <h3 className="venue-name">{v.name}</h3>
                <p className="venue-address">📍 {v.address}</p>
                {v.phone && <p className="venue-phone">📞 {v.phone}</p>}
                <p className="venue-notes">{v.notes}</p>
                {v.mapUrl && (
                  <a href={v.mapUrl} target="_blank" rel="noreferrer" className="btn btn-outline venue-map-btn">
                    Open in Maps ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Travel */}
        <h2 className="section-title" style={{ marginTop: '3rem' }}>Getting There</h2>
        <div className="divider"></div>
        <div className="travel-grid">
          {travelInfo.map(t => (
            <div key={t.mode} className="travel-card">
              <div className="travel-icon">{t.icon}</div>
              <div>
                <h3 className="travel-mode">{t.mode}</h3>
                <p className="travel-info">{t.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Shuttle */}
        <div className="shuttle-notice card">
          <div className="card-header">
            <h3>🚌 Convention Shuttle Service</h3>
          </div>
          <div className="card-body">
            <p>
              Free shuttle service will run between the JW Marriott and all off-site venues throughout
              the convention. Shuttle schedules will be posted at the hotel concierge desk and on the
              convention bulletin boards. Watch for announcements regarding exact pickup times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
