export default function Footer() {
  return (
    <footer className="footer glass">
      <p>© {new Date().getFullYear()} BloqHost. All rights reserved.</p>
      <div className="socials">
        <a href="https://github.com/arnxv-coder/bloqhost">GitHub Code</a>
      </div>
    </footer>
  );
}
