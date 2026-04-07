import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-col">
          <h4>🏛️ JCL Convention</h4>
          <p>Celebrating the legacy of the classical world through scholarship, leadership, and service.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="https://www.njcl.org" target="_blank" rel="noreferrer">NJCL Website</a></li>
            <li><a href="#schedule">Convention Schedule</a></li>
            <li><a href="#events">Events &amp; Contests</a></li>
            <li><a href="#venue">Venue &amp; Maps</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Questions? Reach out to your state JCL sponsor or the convention committee.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          <span className="ornament">⚜</span>
          {' '}&copy; {year} Junior Classical League Convention{' '}
          <span className="ornament">⚜</span>
        </p>
        <p className="footer-motto">
          <em>Artes, Mores, Lingua Latina</em>
        </p>
      </div>
    </footer>
  );
}
