import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const icons = [
    { emoji: '📝', color: '#FBBF24' },
    { emoji: '📌', color: '#F87171' },
    { emoji: '🗂️', color: '#34D399' },
    { emoji: '✏️', color: '#A78BFA' },
    { emoji: '🔖', color: '#FB923C' },
    { emoji: '💡', color: '#FDE047' },
    { emoji: '🗒️', color: '#38BDF8' },
    { emoji: '🔍', color: '#F472B6' },
    { emoji: '📋', color: '#A3E635' },
    { emoji: '🏷️', color: '#F87171' },
    { emoji: '📎', color: '#22D3EE' },
    { emoji: '🧠', color: '#E879F9' },
  ];

  const features = [
    { icon: '⚡', title: 'Instant Capture', desc: 'Jot thoughts before they vanish. Zero friction.' },
    { icon: '🗂️', title: 'Smart Organize', desc: 'Tag, pin, and stack notes your way.' },
    { icon: '🔍', title: 'Search Everything', desc: 'Find any note in milliseconds.' },
    { icon: '🔒', title: 'Yours Forever', desc: 'Your notes, your vault. Private by default.' },
  ];

  const bgIcons = [
    { e: '📝', top: '3%',  left: '1%',   size: '5.5rem', opacity: 0.10, delay: '0s',   duration: '7s'  },
    { e: '📌', top: '6%',  right: '2%',  size: '4.5rem', opacity: 0.09, delay: '1s',   duration: '6s'  },
    { e: '🗂️', top: '20%', left: '89%',  size: '6.5rem', opacity: 0.08, delay: '0.5s', duration: '9s'  },
    { e: '✏️', top: '28%', left: '1%',   size: '4rem',   opacity: 0.10, delay: '2s',   duration: '5.5s'},
    { e: '💡', top: '40%', right: '1%',  size: '5.5rem', opacity: 0.09, delay: '1.5s', duration: '8s'  },
    { e: '🔖', top: '50%', left: '2%',   size: '3.5rem', opacity: 0.10, delay: '0.8s', duration: '7.5s'},
    { e: '🗒️', top: '55%', right: '2%',  size: '6rem',   opacity: 0.08, delay: '2.5s', duration: '6.5s'},
    { e: '🏷️', top: '65%', left: '91%',  size: '4rem',   opacity: 0.09, delay: '1.2s', duration: '8.5s'},
    { e: '📋', top: '70%', left: '1%',   size: '5rem',   opacity: 0.08, delay: '3s',   duration: '7s'  },
    { e: '🔍', top: '78%', right: '3%',  size: '4.5rem', opacity: 0.09, delay: '0.3s', duration: '6s'  },
    { e: '🧠', top: '86%', left: '4%',   size: '5rem',   opacity: 0.07, delay: '1.8s', duration: '9.5s'},
    { e: '📎', top: '91%', right: '5%',  size: '3.5rem', opacity: 0.09, delay: '2.2s', duration: '5s'  },
    { e: '⭐', top: '13%', left: '44%',  size: '3rem',   opacity: 0.07, delay: '1s',   duration: '10s' },
    { e: '📁', top: '58%', left: '46%',  size: '4rem',   opacity: 0.06, delay: '3.5s', duration: '8s'  },
    { e: '🖊️', top: '33%', left: '20%',  size: '3.5rem', opacity: 0.07, delay: '4s',   duration: '7s'  },
    { e: '📓', top: '44%', right: '20%', size: '4rem',   opacity: 0.07, delay: '2.8s', duration: '6s'  },
    { e: '🗺️', top: '75%', left: '30%',  size: '3.5rem', opacity: 0.06, delay: '1.6s', duration: '11s' },
    { e: '📐', top: '18%', left: '28%',  size: '3rem',   opacity: 0.06, delay: '3.2s', duration: '8s'  },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

        body { background-color: #fdf6ec !important; }
        .home-root { font-family: 'DM Sans', sans-serif; background-color: #fdf6ec; min-height: 100vh; overflow-x: hidden; position: relative; }
        .display-font { font-family: 'Playfair Display', serif; }

        .blob-1 {
          position: absolute; top: -80px; right: -80px;
          width: 380px; height: 380px;
          background: #fde68a; border-radius: 50%;
          opacity: 0.45; filter: blur(60px); z-index: 0;
          pointer-events: none;
        }
        .blob-2 {
          position: absolute; bottom: 160px; left: -60px;
          width: 280px; height: 280px;
          background: #fecdd3; border-radius: 50%;
          opacity: 0.35; filter: blur(60px); z-index: 0;
          pointer-events: none;
        }

        .grain-overlay {
          position: fixed; inset: 0; width: 100%; height: 100%; z-index: 0;
          pointer-events: none; opacity: 0.45;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
        }

        /* ── BIG FLOATING BG ICONS ── */
        @keyframes floatDrift {
          0%   { transform: translateY(0px) rotate(0deg); }
          33%  { transform: translateY(-14px) rotate(3deg); }
          66%  { transform: translateY(6px) rotate(-2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .bg-icon {
          position: fixed;
          pointer-events: none;
          z-index: 1;
          animation: floatDrift linear infinite, fadeIn 1.5s ease both;
          user-select: none;
          line-height: 1;
          filter: blur(0.4px);
        }

        @keyframes floatUp {
          0%   { opacity: 0; transform: translateY(28px) scale(0.85); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-4deg) scale(1); }
          50%       { transform: rotate(4deg) scale(1.08); }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0 rgba(251,191,36,0.55); }
          70%  { box-shadow: 0 0 0 14px rgba(251,191,36,0); }
          100% { box-shadow: 0 0 0 0 rgba(251,191,36,0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .icon-tile {
          width: 56px; height: 56px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
          cursor: default; user-select: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          animation: floatUp 0.55s cubic-bezier(.22,1,.36,1) both;
          transition: transform 0.2s ease;
        }
        .icon-tile:hover { animation: wiggle 0.5s ease-in-out; }

        .hero-label { animation: fadeSlide 0.7s ease both; animation-delay: 300ms; }
        .hero-title { animation: fadeSlide 0.7s ease both; animation-delay: 400ms; }
        .hero-sub   { animation: fadeSlide 0.7s ease both; animation-delay: 500ms; }
        .hero-btns  { animation: fadeSlide 0.7s ease both; animation-delay: 600ms; }

        .btn-cta {
          background-color: #FBBF24;
          color: #1c1917;
          font-weight: 700;
          font-size: 1rem;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
          animation: pulseRing 2s ease-out infinite;
          box-shadow: 0 4px 14px rgba(0,0,0,0.12);
        }
        .btn-cta:hover { background-color: #F59E0B; }

        .btn-outline {
          background: transparent;
          color: #1c1917;
          font-weight: 600;
          font-size: 1rem;
          padding: 13px 32px;
          border-radius: 50px;
          border: 2px solid #1c1917;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-outline:hover { background-color: #1c1917; color: #FBBF24; }

        .btn-nav {
          background-color: #1c1917;
          color: #FBBF24;
          font-weight: 600;
          font-size: 0.875rem;
          padding: 10px 22px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .btn-nav:hover { background-color: #292524; }

        .btn-nav-ghost {
          background: transparent;
          color: #57534e;
          font-weight: 500;
          font-size: 0.875rem;
          padding: 10px 20px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-nav-ghost:hover { background-color: #e7e5e4; color: #1c1917; }

        .feature-card {
          background: #ffffff;
          border: 2px solid #1c1917;
          border-radius: 20px;
          padding: 24px;
          cursor: default;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .feature-card:hover {
          transform: translateY(-6px) rotate(-0.5deg);
          box-shadow: 6px 10px 0px 0px #1c1917;
        }

        .marquee-strip {
          background-color: #1c1917;
          padding: 18px 0;
          overflow: hidden;
          position: relative;
          z-index: 10;
        }
        .marquee-inner {
          display: flex;
          gap: 48px;
          white-space: nowrap;
          animation: marquee 18s linear infinite;
        }
        .marquee-item {
          color: #FBBF24;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .home-footer {
          border-top: 1px solid #e7e5e4;
          padding: 36px 0;
        }
        .footer-email {
          color: #d97706;
          font-weight: 500;
          font-size: 0.875rem;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .footer-email:hover { color: #b45309; }

        .z-content { position: relative; z-index: 5; }
      `}</style>

      <div className="home-root">
        <div className="grain-overlay" />
        <div className="blob-1" />
        <div className="blob-2" />

        {/* ── BIG FLOATING BACKGROUND ICONS ── */}
        {bgIcons.map((ic, i) => (
          <div
            key={i}
            className="bg-icon"
            style={{
              top: ic.top,
              left: ic.left,
              right: ic.right,
              fontSize: ic.size,
              opacity: ic.opacity,
              animationDelay: ic.delay,
              animationDuration: `${ic.duration}, 1.5s`,
            }}
          >
            {ic.e}
          </div>
        ))}

        {/* ── NAV ── */}
        <nav className="z-content" style={{ position: 'relative' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px 24px' }}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <span style={{ fontSize: '1.5rem' }}>📝</span>
                <span className="display-font" style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1c1917', letterSpacing: '-0.02em' }}>NoteNest</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button className="btn-nav-ghost" onClick={() => navigate('/About')}>About</button>
                <button className="btn-nav" onClick={() => navigate('/NotesDisplay')}>Open Notes →</button>
              </div>
            </div>
          </div>
        </nav>

        {/* ── ICON GRID ── */}
        <section className="z-content" style={{ position: 'relative' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '12px 24px' }}>
            <div className="d-flex flex-wrap gap-3">
              {icons.map((item, i) => (
                <div
                  key={i}
                  className="icon-tile"
                  style={{ backgroundColor: item.color, animationDelay: `${i * 80}ms` }}
                >
                  {item.emoji}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HERO ── */}
        <section className="z-content" style={{ position: 'relative' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '36px 24px 16px' }}>
            <p className="hero-label" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', color: '#d97706', textTransform: 'uppercase', marginBottom: '12px' }}>
              Your Second Brain, Simplified
            </p>
            <h1 className="display-font hero-title" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 900, color: '#1c1917', lineHeight: 1.05, maxWidth: '700px' }}>
              All the notes<br />
              <span style={{ color: '#F59E0B', fontStyle: 'italic' }}>you'll ever need.</span>
            </h1>
            <p className="hero-sub" style={{ marginTop: '20px', color: '#78716c', fontSize: '1.1rem', maxWidth: '540px', lineHeight: 1.7 }}>
              NoteNest is your virtual workspace for capturing ideas, organizing thoughts,
              pinning reminders, and building your personal knowledge vault — all in one clean,
              distraction-free place. Write a shopping list. Plan your startup. Draft your manifesto.
              No limits. No clutter.
            </p>
            <div className="hero-btns d-flex flex-wrap gap-3" style={{ marginTop: '32px' }}>
              <button className="btn-cta" onClick={() => navigate('/NotesDisplay')}>
                📝 Make Notes Virtually →
              </button>
              <button className="btn-outline" onClick={() => navigate('/About')}>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* ── FEATURE CARDS ── */}
        <section className="z-content" style={{ position: 'relative', padding: '60px 0' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <h2 className="display-font" style={{ fontSize: '2rem', fontWeight: 900, color: '#1c1917', marginBottom: '32px' }}>
              Why NoteNest?
            </h2>
            <div className="row g-4">
              {features.map((f, i) => (
                <div className="col-12 col-sm-6 col-lg-3" key={i}>
                  <div className="feature-card h-100">
                    <span style={{ fontSize: '2rem', display: 'block', marginBottom: '12px' }}>{f.icon}</span>
                    <h3 style={{ fontWeight: 800, color: '#1c1917', fontSize: '1rem', marginBottom: '6px' }}>{f.title}</h3>
                    <p style={{ color: '#78716c', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MARQUEE STRIP ── */}
        <div className="marquee-strip">
          <div className="marquee-inner">
            {Array(8).fill(['📝 Capture', '📌 Pin', '🗂️ Organize', '🔍 Search', '💡 Ideate', '🏷️ Tag']).flat().map((t, i) => (
              <span className="marquee-item" key={i}>{t}</span>
            ))}
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="z-content home-footer" style={{ position: 'relative' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3">
              <div className="d-flex align-items-center gap-2">
                <span style={{ fontSize: '1.25rem' }}>📝</span>
                <span className="display-font" style={{ fontWeight: 900, color: '#1c1917' }}>NoteNest</span>
              </div>
              <p style={{ color: '#78716c', fontSize: '0.875rem', margin: 0 }}>
                Developed with ❤️ by <strong style={{ color: '#1c1917' }}>Roshan Singh</strong>
              </p>
              <a href="mailto:roshansingh@email.com" className="footer-email">
                roshansingh200477@email.com
              </a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Home;