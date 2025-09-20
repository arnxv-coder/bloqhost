import Button from "../components/Button";
import { motion } from "framer-motion"; // for animations

export default function Landing() {
  return (
    <motion.section
      className="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">BloqHost</h1>
          <p className="hero-subtitle">
            Professional Minecraft server hosting made simple.
          </p>
          <Button text="Get Started" link="/pricing" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <h2 className="section-title">Why Choose BloqHost?</h2>
        <div className="features-grid">
          <div className="feature-card glass">
            <h3>Reliable Servers</h3>
            <p>99.9% uptime with low-latency performance worldwide.</p>
          </div>
          <div className="feature-card glass">
            <h3>Easy Setup</h3>
            <p>Start your server in minutes with one-click installation.</p>
          </div>
          <div className="feature-card glass">
            <h3>Customizable</h3>
            <p>Full control over mods, plugins, and server settings.</p>
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="pricing-teaser glass">
        <h2 className="section-title">Plans for Everyone</h2>
        <p>Flexible pricing starting at just $1.99/mo.</p>
        <Button text="View Pricing" link="/pricing" />
      </section>

      {/* ABOUT TEASER */}
      <section className="about-teaser glass">
        <h2 className="section-title">About BloqHost</h2>
        <p>
          We provide professional hosting solutions for Minecraft players and
          communities. Simple, secure, and reliable.
        </p>
        <Button text="Learn More" link="/about" />
      </section>

      {/* CTA */}
      <section className="cta-section glass">
        <h2>Start Your Server Today</h2>
        <Button text="Get Started" link="/pricing" />
      </section>
    </motion.section>
  );
}
