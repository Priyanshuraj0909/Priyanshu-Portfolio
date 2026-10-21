import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-bar">
        <span>Portfolio / {profile.name}</span>
        <a href="#core">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
