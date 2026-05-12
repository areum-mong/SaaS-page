"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "무료 체험은 어떻게 진행되나요?",
      answer: "신용카드 등록 없이 바로 시작하실 수 있습니다. 7일 동안 Pro 플랜의 모든 기능을 자유롭게 이용해 보세요.",
    },
    {
      question: "언제든지 구독을 취소할 수 있나요?",
      answer: "네, 설정 페이지에서 언제든지 구독 해지가 가능합니다. 해지 후에도 남은 이용 기간까지는 서비스를 계속 이용하실 수 있습니다.",
    },
    {
      question: "제 데이터는 안전한가요?",
      answer: "WriteFlow는 최고 수준의 보안 프로토콜을 사용하며, 사용자의 데이터를 학습용으로 무단 사용하지 않습니다.",
    },
    {
      question: "환불이 가능합니까?",
      answer: "결제 후 7일 이내에 사용량이 일정 수준 미만인 경우 100% 환불해 드립니다. 고객 지원팀으로 문의해 주세요.",
    },
    {
      question: "어떤 결제 수단을 지원하나요?",
      answer: "모든 주요 신용카드(Visa, Mastercard, Amex)와 간편결제(네이버페이, 카카오페이, 토스)를 지원합니다.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq-header">
          <h2>자주 묻는 질문</h2>
          <p>궁금한 점이 있으신가요? 여기서 답변을 확인하세요.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq {
          padding: 100px 0;
          background: white;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .faq-header p {
          color: var(--text-muted);
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 1px solid var(--border);
        }

        .faq-question {
          width: 100%;
          padding: 1.5rem 0;
          background: none;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text);
          cursor: pointer;
          text-align: left;
        }

        .faq-icon {
          font-size: 1.5rem;
          color: var(--text-muted);
          transition: transform 0.3s;
        }

        .faq-item.open .faq-icon {
          transform: rotate(45deg);
          color: var(--primary);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }

        .faq-item.open .faq-answer {
          max-height: 200px;
        }

        .faq-answer-inner {
          padding: 0 0 1.5rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
