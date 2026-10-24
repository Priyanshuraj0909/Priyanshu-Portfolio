import { MotionToggle } from "@/features/motion";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-bar">
        <span>Systems nexus · Status operational</span>
        <div className="footer-actions"><a href="#core">Back to top <span aria-hidden="true">↑</span></a><MotionToggle placement="footer" /></div>
      </div>
    </footer>
  );
}
