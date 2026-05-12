"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container header-container">
        <Link href="/" className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 24L16 8L24 24" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 18H20" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>WriteFlow</span>
        </Link>

        <nav className="nav-desktop">
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#company">Company</Link>
        </nav>

        <div className="header-actions">
          <Link href="/login" className="btn btn-ghost">Login</Link>
          <Link href="/signup" className="btn btn-primary">Start Free Trial</Link>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          z-index: 1000;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          background: transparent;
        }

        .header-scrolled {
          height: 70px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid var(--border);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text);
        }

        .nav-desktop {
          display: flex;
          gap: 2.5rem;
        }

        .nav-desktop a {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: color 0.2s;
        }

        .nav-desktop a:hover {
          color: var(--primary);
        }

        .header-actions {
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
