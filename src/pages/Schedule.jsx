import './Schedule.css';

const days = [
  {
    date: 'Sunday, July 27',
    label: 'Arrival Day',
    events: [
      { time: '12:00 PM – 6:00 PM', title: 'Delegate Registration & Check-In', location: 'Grand Foyer, Level 1', type: 'logistics' },
      { time: '2:00 PM – 5:00 PM', title: 'Campus & Hotel Orientation Tours', location: 'Meet at Main Entrance', type: 'logistics' },
      { time: '5:00 PM – 7:00 PM', title: 'Sponsor & Chaperone Meeting', location: 'Wabash Ballroom A', type: 'logistics' },
      { time: '7:00 PM – 9:00 PM', title: 'Opening Ceremonies & Torch Lighting', location: 'Grand Ballroom', type: 'ceremony' },
      { time: '9:00 PM – 10:30 PM', title: 'Chapter Meet & Greet Social', location: 'Poolside Pavilion', type: 'social' },
    ],
  },
  {
    date: 'Monday, July 28',
    label: 'Competition Day I',
    events: [
      { time: '7:00 AM – 8:30 AM', title: 'Breakfast', location: 'Main Dining Hall', type: 'logistics' },
      { time: '8:30 AM – 12:00 PM', title: 'Academic Testing — Latin I, II, III', location: 'Rooms 201–215', type: 'academic' },
      { time: '8:30 AM – 12:00 PM', title: 'Certamen Preliminaries — Novice & Intermediate', location: 'Rooms 301–310', type: 'certamen' },
      { time: '12:00 PM – 1:30 PM', title: 'Lunch Break', location: 'Main Dining Hall', type: 'logistics' },
      { time: '1:30 PM – 5:00 PM', title: 'Academic Testing — Latin IV/V, Mythology, Roman Life', location: 'Rooms 201–220', type: 'academic' },
      { time: '1:30 PM – 5:00 PM', title: 'Creative Arts Submission Window', location: 'Arts Room, Level 2', type: 'arts' },
      { time: '6:00 PM – 8:00 PM', title: 'Roman Banquet & Toga Competition', location: 'Grand Ballroom', type: 'social' },
      { time: '8:00 PM – 10:00 PM', title: 'Chapter Banner Display', location: 'Exhibition Hall', type: 'spirit' },
    ],
  },
  {
    date: 'Tuesday, July 29',
    label: 'Competition Day II',
    events: [
      { time: '7:00 AM – 8:30 AM', title: 'Breakfast', location: 'Main Dining Hall', type: 'logistics' },
      { time: '8:30 AM – 12:00 PM', title: 'Certamen — Advanced & Elimination Rounds', location: 'Rooms 301–310', type: 'certamen' },
      { time: '8:30 AM – 12:00 PM', title: 'Academic Testing — Classical Art & Architecture, Roman History', location: 'Rooms 201–215', type: 'academic' },
      { time: '12:00 PM – 1:30 PM', title: 'Lunch & Chapter Caucus', location: 'Main Dining Hall', type: 'logistics' },
      { time: '1:30 PM – 4:30 PM', title: 'Spirit Events — Cheer, Song, Dance', location: 'Grand Ballroom', type: 'spirit' },
      { time: '1:30 PM – 4:30 PM', title: 'Academic Testing — Latin Derivatives, Grammar', location: 'Rooms 201–208', type: 'academic' },
      { time: '5:00 PM – 7:00 PM', title: 'Officer Election Forum', location: 'Wabash Ballroom B', type: 'logistics' },
      { time: '7:30 PM – 10:00 PM', title: 'Talent Show & Entertainment Night', location: 'Main Stage', type: 'social' },
    ],
  },
  {
    date: 'Wednesday, July 30',
    label: 'Final Competition & Tours',
    events: [
      { time: '7:00 AM – 8:30 AM', title: 'Breakfast', location: 'Main Dining Hall', type: 'logistics' },
      { time: '8:30 AM – 10:00 AM', title: 'Certamen Finals', location: 'Grand Ballroom', type: 'certamen' },
      { time: '10:00 AM – 12:00 PM', title: 'Chariot Races & Olympic Games', location: 'Sports Complex', type: 'spirit' },
      { time: '12:00 PM – 1:30 PM', title: 'Lunch', location: 'Main Dining Hall', type: 'logistics' },
      { time: '1:30 PM – 5:00 PM', title: 'City Tours — Art Museum & Monuments (Optional)', location: 'Hotel Main Entrance (Bus Boarding)', type: 'social' },
      { time: '1:30 PM – 5:00 PM', title: 'NJCL Business Meeting', location: 'Wabash Ballroom A', type: 'logistics' },
      { time: '5:30 PM – 7:00 PM', title: 'Officer Elections & Voting', location: 'Grand Ballroom', type: 'logistics' },
      { time: '7:30 PM – 11:00 PM', title: 'Convention Dance', location: 'Grand Ballroom', type: 'social' },
    ],
  },
  {
    date: 'Thursday, July 31',
    label: 'Closing Day',
    events: [
      { time: '7:00 AM – 9:00 AM', title: 'Breakfast & Checkout', location: 'Main Dining Hall', type: 'logistics' },
      { time: '9:00 AM – 10:30 AM', title: 'Final Chapter Meetings & Sponsor Briefing', location: 'Wabash Ballroom B', type: 'logistics' },
      { time: '10:30 AM – 12:00 PM', title: 'Awards Ceremony — Academic & Creative Arts', location: 'Grand Ballroom', type: 'ceremony' },
      { time: '12:00 PM – 2:00 PM', title: 'Closing Banquet & Farewells', location: 'Grand Ballroom', type: 'ceremony' },
      { time: '2:00 PM onward', title: 'Delegate Departure', location: 'Hotel Entrance', type: 'logistics' },
    ],
  },
];

const typeConfig = {
  logistics: { label: 'Logistics', color: '#6b7280' },
  ceremony:  { label: 'Ceremony',  color: '#7c3aed' },
  social:    { label: 'Social',    color: '#059669' },
  academic:  { label: 'Academic',  color: '#1d4ed8' },
  certamen:  { label: 'Certamen', color: '#b45309' },
  arts:      { label: 'Arts',      color: '#db2777' },
  spirit:    { label: 'Spirit',    color: '#dc2626' },
};

export default function Schedule() {
  return (
    <div>
      <div className="page-header">
        <h1>Convention Schedule</h1>
        <p>July 27–31, 2026 &bull; Indianapolis, Indiana</p>
      </div>

      <div className="container section">
        {/* Legend */}
        <div className="legend">
          {Object.entries(typeConfig).map(([key, { label, color }]) => (
            <span key={key} className="legend-item">
              <span className="legend-dot" style={{ background: color }}></span>
              {label}
            </span>
          ))}
        </div>

        {/* Day Sections */}
        {days.map((day) => (
          <div key={day.date} className="day-block">
            <div className="day-header">
              <h2 className="day-date">{day.date}</h2>
              <span className="day-label badge badge-gold">{day.label}</span>
            </div>
            <div className="events-table">
              {day.events.map((ev, i) => {
                const cfg = typeConfig[ev.type] || typeConfig.logistics;
                return (
                  <div key={i} className="event-row" style={{ borderLeftColor: cfg.color }}>
                    <div className="event-time">{ev.time}</div>
                    <div className="event-info">
                      <div className="event-title">{ev.title}</div>
                      <div className="event-location">📍 {ev.location}</div>
                    </div>
                    <div className="event-type-badge" style={{ background: cfg.color }}>
                      {cfg.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
