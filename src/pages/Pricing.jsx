import Card from "../components/Card";
import Button from "../components/Button";

export default function Pricing() {
  return (
    <section className="pricing-section">
      {/* Page Header */}
      <div className="pricing-header">
        <h1 className="section-title">Choose Your Plan</h1>
        <p className="pricing-subtitle">
          Flexible plans for small to large Minecraft communities.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        <Card
          title="Dirt"
          price="$1.99/mo"
          description="2GB RAM, 8 players, DDoS protection."
        />
        <Card
          title="Stone"
          price="$2.99/mo"
          description="4GB RAM, 15 players, mod support."
        />
        <Card
          title="Iron"
          price="$3.99/mo"
          description="6GB RAM, 25 players, premium support."
        />
        <Card
          title="Gold"
          price="$4.99/mo"
          description="8GB RAM, 35 players, premium DDoS Protection."
        />
        <Card
          title="Diamond"
          price="$5.99/mo"
          description="12GB RAM, 55 players, premium support, DDoS protection."
        />
        <Card
          title="Netherite"
          price="$11.99/mo"
          description="24GB RAM, 150 players, premium support, DDoS protection, Server Setup from us."
        />
      </div>

      {/* CTA */}
      <div className="pricing-cta">
        <p>Need a custom plan? Contact us for a tailored solution.</p>
        <Button text="Contact Us" link="/contact" />
      </div>
    </section>
  );
}
