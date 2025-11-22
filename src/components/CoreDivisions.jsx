export default function CoreDivisions() {
    const divisions = [
        {
            title: "AI Chatbot Solutions",
            description: "Revolutionizing customer engagement through intelligent, always-on conversational systems.",
            features: ["Custom LLM Chatbots", "Multi-Channel Deployment", "Intelligent Q&A Systems", "Sales & Lead Automation", "24/7 Availability"]
        },
        {
            title: "Business Process Automation",
            description: "Empowering companies to eliminate manual tasks and increase efficiency.",
            features: ["Spreadsheet Automation", "Email Response Automation", "CRM & Workflow Automation", "Document Intelligence", "Social Media Automation"]
        },
        {
            title: "AI Strategy & Implementation",
            description: "Strategic consulting and full-cycle AI adoption.",
            features: ["AI Readiness Assessment", "Custom Model Development", "Integration Services", "Computer Vision Solutions", "Predictive Analytics"]
        },
        {
            title: "Creative & Marketing AI",
            description: "AI-driven creativity that scales brand reach and engagement.",
            features: ["AI Content Creation", "Marketing Automation", "Image/Video Generation"]
        },
        {
            title: "Training & Enablement",
            description: "Empowering businesses to become AI-native.",
            features: ["AI Workshops & Bootcamps", "Implementation Playbooks", "Ongoing Optimization"]
        }
    ];

    return (
        <section id="divisions" className="section bg-secondary">
            <div className="container">
                <h2 className="text-center">Our Core <span className="text-gradient">Divisions</span></h2>
                <div className="grid grid-3" style={{ marginTop: '3rem' }}>
                    {divisions.map((division, index) => (
                        <div key={index} className="glass-card division-card">
                            <h3>{division.title}</h3>
                            <p>{division.description}</p>
                            <ul className="feature-list">
                                {division.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .bg-secondary {
          background-color: var(--bg-secondary);
        }
        .division-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--accent-primary);
        }
        .feature-list {
          list-style: none;
          margin-top: 1rem;
        }
        .feature-list li {
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .feature-list li::before {
          content: "•";
          color: var(--accent-secondary);
          position: absolute;
          left: 0;
          font-weight: bold;
        }
      `}</style>
        </section>
    );
}
