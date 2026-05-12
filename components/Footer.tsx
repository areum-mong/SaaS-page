"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 24L16 8L24 24" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18H20" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>WriteFlow</span>
            </Link>
            <p>AI 기술로 전 세계 모든 창작자들의 글쓰기 경험을 혁신합니다.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <Link href="#">Features</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">Security</Link>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <Link href="#">About</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Blog</Link>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <Link href="#">Help Center</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Privacy</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 WriteFlow AI. All rights reserved.</p>
          <div className="legal-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 80px 0 40px;
          background: white;
          border-top: 1px solid var(--border);
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 60px;
          gap: 4rem;
        }

        .footer-brand {
          max-width: 300px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text);
          margin-bottom: 1rem;
        }

        .footer-brand p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .footer-links {
          display: flex;
          gap: 4rem;
        }

        .footer-column h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .footer-column a {
          display: block;
          margin-bottom: 0.75rem;
          color: var(--text-muted);
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .footer-column a:hover {
          color: var(--primary);
        }

        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        .legal-links {
          display: flex;
          gap: 2rem;
        }

        .legal-links a:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            gap: 3rem;
          }
          .footer-links {
            gap: 2rem;
            flex-wrap: wrap;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
