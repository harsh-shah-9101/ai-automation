export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Flowbotics <span className="text-gradient">AI</span></h3>
                        <p>Intelligent Automation for the Future of Business</p>
                    </div>
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Company</h4>
                            <a href="#overview">About</a>
                            <a href="#divisions">Services</a>
                            <a href="#process">Process</a>
                        </div>
                        <div className="link-group">
                            <h4>Connect</h4>
                            <a href="#">LinkedIn</a>
                            <a href="#">Twitter</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Flowbotics AI. All rights reserved.</p>
                </div>
            </div>
            <style>{`
        .footer {
          background: var(--bg-secondary);
          padding: 4rem 0 2rem;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .footer-brand h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .footer-links {
          display: flex;
          gap: 4rem;
          flex-wrap: wrap;
        }
        .link-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .link-group h4 {
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(0,0,0,0.05);
          font-size: 0.9rem;
          color: var(--text-tertiary);
        }
        @media (min-width: 768px) {
          .footer-content {
            flex-direction: row;
            justify-content: space-between;
          }
        }
      `}</style>
        </footer>
    );
}
