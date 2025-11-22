import Spline from '@splinetool/react-spline';

export default function Hero({ onOpenContact }) {
  return (
    <section className="hero-section">
      <div className="hero-content fade-in-up">
        <h1 className="hero-title">
          Intelligent Automation for the <span className="text-gradient">Future of Business</span>
        </h1>
        <p className="hero-subtitle">
          Flowbotics AI helps businesses harness the power of artificial intelligence to accelerate growth, streamline operations, and deliver superior customer experiences.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onOpenContact}>Get Started</button>
          <button className="btn" style={{ background: 'white', border: '1px solid var(--text-tertiary)', marginLeft: '1rem' }}>Learn More</button>
        </div>
      </div>
      <div className="hero-spline">
        <Spline scene="https://prod.spline.design/oiOVyQkjOrar0fRG/scene.splinecode" />
      </div>

      <style>{`
        .hero-section {
        display: flex;
          flex-direction: column-reverse;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 6rem 2rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin-top: 2rem;
        }

        .hero-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-spline {
          width: 100vw;
          height: 100vh;
          position: relative;
          z-index: 1;
          left: 290px;
        }

        @media (min-width: 1024px) {
          .hero-section {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
            padding: 0 4rem;
          }

          .hero-content {
            width: 50%;
            text-align: left;
            margin-top: 0;
          }

          .hero-subtitle {
            margin-left: 0;
            margin-right: 0;
          }

          .hero-spline {
            width: 100vw;
            height: 100vh;
            padding-top:100px;
            padding-left: 100px;
            position: absolute;
            right: 0;
            top: 0;
            left: 290px;
          }
        }
      `}</style>
    </section>
  );
}
