export default function EngagementProcess() {
    const steps = [
        "Discovery & Consultation",
        "AI Strategy Development",
        "Solution Design",
        "Development & Integration",
        "Testing & Optimization",
        "Training & Deployment",
        "Ongoing Support"
    ];

    return (
        <section id="process" className="section">
            <div className="container">
                <h2 className="text-center">Our Engagement <span className="text-gradient">Process</span></h2>
                <div className="process-flow" style={{ marginTop: '4rem' }}>
                    {steps.map((step, index) => (
                        <div key={index} className="process-step fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="step-number">{index + 1}</div>
                            <div className="step-content glass-card">
                                <h3>{step}</h3>
                            </div>
                            {index < steps.length - 1 && <div className="step-connector">→</div>}
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .process-flow {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }
        .process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 100%;
          max-width: 500px;
        }
        .step-number {
          width: 40px;
          height: 40px;
          background: var(--accent-gradient);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-bottom: 1rem;
          box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
        }
        .step-content {
          width: 100%;
          text-align: center;
          padding: 1.5rem;
        }
        .step-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0;
        }
        .step-connector {
          display: none;
        }

        @media (min-width: 1024px) {
          .process-flow {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
          }
          .process-step {
            width: 200px;
          }
          .step-connector {
            display: block;
            position: absolute;
            right: -1rem;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.5rem;
            color: var(--accent-primary);
          }
           .process-step:last-child .step-connector {
            display: none;
           }
        }
      `}</style>
        </section>
    );
}
