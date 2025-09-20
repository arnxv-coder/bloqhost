export default function Footer() {
  return (
    <footer className="footer glass">
      <p>© {new Date().getFullYear()} BloqHost. All rights reserved.</p>
      <div className="socials">
        <a href="#">Twitter</a> | <a href="#">Discord</a> | <a href="#">GitHub</a>
      </div>
    </footer>
  );
}
