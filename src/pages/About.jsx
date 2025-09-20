import Card from "../components/Card";

export default function About() {
  return (
    <section className="about-section">
      {/* Page Header */}
      <div className="about-header">
        <h1 className="section-title glow">About BloqHost</h1>
        <p className="about-intro">
          At BloqHost, we believe Minecraft hosting should be simple, reliable, 
          and visually stunning. Our mission is to empower gamers with premium servers
          and a smooth, minimal dashboard experience.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We aim to make hosting seamless, so players can focus on building
          and exploring. With cutting-edge technology and optimized servers,
          BloqHost delivers performance and stability.
        </p>

        <h2>Our Vision</h2>
        <p>
          To become the most trusted and developer-friendly Minecraft hosting
          platform, combining simplicity, scalability, and aesthetic design.
        </p>
      </div>

      {/* Key Features */}
      <div className="about-features">
        <h2>Why Choose BloqHost?</h2>
        <div className="features-grid">
          <Card title="High Performance" description="Optimized servers for lag-free gaming." />
          <Card title="Security" description="DDoS protection and safe backups included." />
          <Card title="Easy Management" description="User-friendly dashboard and mod support." />
          <Card title="Community" description="Join a friendly gaming community worldwide." />
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta glass">
        <p>
          Whether you're a casual player or a community admin, BloqHost has
          the perfect plan for you. Experience the difference today!
        </p>
      </div>
    </section>
  );
}
