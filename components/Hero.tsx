"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge">
            <span className="badge-icon">✨</span>
            <span>화제의 AI 글쓰기 도구</span>
          </div>
          <h1>아름 AI와 함께 <span>더 빠르고, 더 잘</span> 쓰세요</h1>
          <p>
            당신의 아이디어를 아름ai가 완벽한 문장으로 바꿔드립니다. 블로그, 이메일, 마케팅 카피까지 WriteFlow가 당신의 글쓰기를 혁신합니다.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary btn-lg">무료 체험 시작</button>
            <button className="btn btn-outline btn-lg">데모 보기</button>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in delay-2">
          <div className="hero-image-inner">
            <Image
              src="/hero-laptop.png"
              alt="WriteFlow Dashboard"
              width={1000}
              height={600}
              priority
              className="hero-image"
            />
          </div>
          <div className="hero-glow"></div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 160px 0 100px;
          background: radial-gradient(circle at 50% -20%, var(--primary-light) 0%, white 50%);
          text-align: center;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: var(--primary-light);
          border: 1px solid var(--primary);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 2rem;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);
        }

        h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        h1 span {
          color: var(--primary);
          background: linear-gradient(to right, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        p {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 700px;
          margin: 0 auto 3rem;
        }

        .hero-btns {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 5rem;
        }

        .btn-lg {
          padding: 1rem 2.5rem;
          font-size: 1.125rem;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .hero-image-inner {
          position: relative;
          z-index: 2;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: var(--primary);
          filter: blur(120px);
          opacity: 0.15;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 60px;
          }
          .hero-btns {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
}
