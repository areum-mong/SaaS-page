"use client";

export default function Features() {
  const features = [
    {
      title: "AI 글쓰기 어시스턴트",
      description: "클릭 한 번으로 아이디어를 확장하고 구조화된 콘텐츠를 생성하세요.",
      icon: "✨",
    },
    {
      title: "문법 검사",
      description: "오탈자와 문법 오류를 실시간으로 잡아내어 언제나 완벽한 문장을 유지합니다.",
      icon: "✍️",
    },
    {
      title: "브랜드 목소리",
      description: "미리 설정한 브랜드 가이드라인에 맞춰 일관된 톤앤매너로 글을 작성합니다.",
      icon: "📢",
    },
    {
      title: "다국어 지원",
      description: "글로벌 비즈니스를 위해 50개 이상의 언어로 자연스럽게 작성하고 번역하세요.",
      icon: "🌐",
    },
    {
      title: "프리미엄 템플릿",
      description: "마케팅 카피, 이메일, 블로그 등 100개 이상의 최적화된 템플릿을 바로 사용하세요.",
      icon: "📄",
    },
    {
      title: "실시간 협업",
      description: "팀원들과 한 문서에서 동시에 작업하고 피드백을 주고받으며 완성도를 높이세요.",
      icon: "👥",
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-header">
          <h2>완벽한 글쓰기를 위한 모든 기능</h2>
          <p>단순한 텍스트 생성을 넘어, 당신의 의도를 이해하고 완벽한 결과물을 만들어줍니다.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .features {
          padding: 100px 0;
          background: white;
        }

        .features-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .features-header p {
          font-size: 1.125rem;
          color: var(--text-muted);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          background: var(--surface);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          text-align: left;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          background: white;
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          width: 60px;
          height: 60px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }

        h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .feature-card p {
          color: var(--text-muted);
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
}
