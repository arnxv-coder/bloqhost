export default function Contact() {
  return (
    <section className="contact-section">
      {/* Page Header */}
      <div className="contact-header">
        <h1 className="section-title glow">Contact Us</h1>
        <p className="contact-intro">
          Have questions, suggestions, or want to work with us? Fill out the form below or reach out through any of our social channels. 
          We aim to respond within 24 hours!
        </p>
      </div>

      {/* Contact Methods */}
      <div className="contact-methods glass">
        <h2>Other Ways to Reach Us</h2>
        <ul>
          <li>Email: <a href="mailto:support@bloqhost.com">support@bloqhost.com</a></li>
          <li>Discord: <a href="https://discord.gg/example">Join our server</a></li>
          <li>Twitter: <a href="https://twitter.com/BloqHost">@BloqHost</a></li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="contact-form-wrapper glass">
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>

      {/* Footer CTA */}
      <div className="contact-cta">
        <p>
          We’re always excited to hear from our community. Whether it’s feedback, suggestions, or partnership opportunities, 
          BloqHost is here for you. Let’s build amazing Minecraft experiences together!
        </p>
      </div>
    </section>
  );
}
