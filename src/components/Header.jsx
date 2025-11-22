export default function Header({ onOpenContact }) {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          Flowbotics <span className="text-gradient">AI</span>
        </div>
        <nav className="nav">
          <a href="#overview" className="nav-link">Overview</a>
          <a href="#divisions" className="nav-link">Divisions</a>
          <a href="#why-us" className="nav-link">Why Us</a>
          <a href="#process" className="nav-link">Process</a>
        </nav>
        <button className="btn btn-primary" onClick={onOpenContact}>Contact Us</button>
      </div>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          padding: 1rem 0;
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .nav {
          display: none;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .nav-link:hover {
          color: var(--accent-primary);
        }

        @media (min-width: 768px) {
          .nav {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
