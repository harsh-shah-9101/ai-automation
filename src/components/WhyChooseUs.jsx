export default function WhyChooseUs() {
  const reasons = [
    { title: "End-to-End Partner", desc: "From strategy to execution and optimization." },
    { title: "Tech-Agnostic", desc: "We select the best model and platform for your use case." },
    { title: "ROI-Centric", desc: "Every solution is built for measurable impact." },
    { title: "Custom Integrations", desc: "Designed to fit into your existing tools & workflows." },
    { title: "Industry Expertise", desc: "Experience across e-commerce, healthcare, finance, real estate, SaaS, and more." },
    { title: "Scalable Solutions", desc: "Grow your business without scaling headcount." },
    { title: "24/7 Automation", desc: "Continuous customer support, operations, and insights." }
  ];

  return (
    <section id="why-us" className="section">
      <div className="container">
        <h2 className="text-center">Why Businesses Choose <span className="text-gradient">Flowbotic AI</span></h2>
        <div className="grid grid-2" style={{ marginTop: '3rem' }}>
          {reasons.map((reason, index) => (
            <div key={index} className="glass-card reason-card">
              <div className="check-icon">✅</div>
              <div>
                <h4>{reason.title}</h4>
                <p>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .reason-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .check-icon {
          font-size: 1.5rem;
        }
        .reason-card h4 {
          margin-bottom: 0.5rem;
        }
        .reason-card p {
          margin-bottom: 0;
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
}
