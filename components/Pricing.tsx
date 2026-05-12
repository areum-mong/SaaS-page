"use client";

import { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "0",
      description: "개인 사용자를 위한 시작 단계",
      features: ["월 5개 문서 생성", "기본 문법 검사", "기본 템플릿 제공", "이메일 지원"],
      cta: "무료로 시작하기",
      highlight: false,
    },
    {
      name: "Pro",
      price: isYearly ? "15" : "19",
      description: "전문적인 글쓰기를 위한 최적의 선택",
      features: ["무제한 문서 생성", "고급 AI 컨텍스트 분석", "브랜드 목소리 학습", "API 액세스", "24/7 우선 지원"],
      cta: "Pro 시작하기",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "49",
      description: "대규모 팀과 기업을 위한 솔루션",
      features: ["Pro 전체 기능 포함", "맞춤형 AI 모델 학습", "보안 및 컴플라이언스", "SSO 연동", "전담 어카운트 매니저"],
      cta: "영업팀 문의",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>합리적인 요금제</h2>
          <p>모든 규모의 팀을 위한 맞춤형 플랜</p>

          <div className="toggle-wrapper">
            <span className={!isYearly ? "active" : ""}>Monthly</span>
            <button className={`toggle ${isYearly ? "yearly" : ""}`} onClick={() => setIsYearly(!isYearly)}>
              <div className="toggle-thumb"></div>
            </button>
            <span className={isYearly ? "active" : ""}>Yearly <span className="discount">-20%</span></span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.highlight ? "highlighted" : ""}`}>
              {plan.highlight && <div className="popular-badge">가장 인기 있는</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>
              <p className="plan-desc">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.highlight ? "btn-primary" : "btn-outline"} btn-full`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing {
          padding: 100px 0;
          background: var(--surface);
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .pricing-header p {
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }

        .toggle-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 8px;
          background: white;
          border-radius: 100px;
          border: 1px solid var(--border);
        }

        .toggle-wrapper span {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .toggle-wrapper span.active {
          color: var(--text);
        }

        .discount {
          background: var(--primary-light);
          color: var(--primary);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          margin-left: 4px;
        }

        .toggle {
          width: 50px;
          height: 26px;
          background: var(--primary);
          border-radius: 100px;
          border: none;
          position: relative;
          cursor: pointer;
          transition: background 0.3s;
        }

        .toggle-thumb {
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 3px;
          left: 3px;
          transition: transform 0.3s;
        }

        .toggle.yearly .toggle-thumb {
          transform: translateX(24px);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .pricing-card {
          background: white;
          padding: 3rem 2.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .pricing-card.highlighted {
          border-color: var(--primary);
          box-shadow: var(--shadow-lg);
          transform: scale(1.05);
          z-index: 2;
        }

        .popular-badge {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--primary);
          color: white;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.8125rem;
          font-weight: 700;
        }

        h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .price {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 1rem;
        }

        .amount {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text);
        }

        .period {
          color: var(--text-muted);
        }

        .plan-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          height: 3rem;
        }

        .plan-features {
          margin-bottom: 3rem;
          flex-grow: 1;
        }

        .plan-features li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1rem;
          font-size: 0.95rem;
          color: var(--text);
        }

        .plan-features svg {
          color: var(--primary);
        }

        .btn-full {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .pricing-card.highlighted {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
