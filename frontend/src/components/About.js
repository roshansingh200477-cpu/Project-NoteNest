import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const bgIcons = [
    { e: '📝', top: '4%',  left: '2%',   size: '5.5rem', opacity: 0.10, delay: '0s',   duration: '7s'   },
    { e: '📌', top: '7%',  right: '3%',  size: '4.5rem', opacity: 0.09, delay: '1s',   duration: '6s'   },
    { e: '🗂️', top: '20%', left: '88%',  size: '6rem',   opacity: 0.08, delay: '0.5s', duration: '9s'   },
    { e: '✏️', top: '30%', left: '1%',   size: '4rem',   opacity: 0.10, delay: '2s',   duration: '5.5s' },
    { e: '💡', top: '42%', right: '2%',  size: '5.5rem', opacity: 0.09, delay: '1.5s', duration: '8s'   },
    { e: '🔖', top: '55%', left: '3%',   size: '3.5rem', opacity: 0.10, delay: '0.8s', duration: '7.5s' },
    { e: '🗒️', top: '58%', right: '2%',  size: '6rem',   opacity: 0.08, delay: '2.5s', duration: '6.5s' },
    { e: '🏷️', top: '70%', left: '90%',  size: '4rem',   opacity: 0.09, delay: '1.2s', duration: '8.5s' },
    { e: '📋', top: '74%', left: '1%',   size: '5rem',   opacity: 0.08, delay: '3s',   duration: '7s'   },
    { e: '🔍', top: '82%', right: '4%',  size: '4.5rem', opacity: 0.09, delay: '0.3s', duration: '6s'   },
    { e: '🧠', top: '88%', left: '5%',   size: '5rem',   opacity: 0.07, delay: '1.8s', duration: '9.5s' },
    { e: '📎', top: '93%', right: '6%',  size: '3.5rem', opacity: 0.09, delay: '2.2s', duration: '5s'   },
    { e: '⭐', top: '14%', left: '44%',  size: '3rem',   opacity: 0.07, delay: '1s',   duration: '10s'  },
    { e: '📁', top: '60%', left: '46%',  size: '4rem',   opacity: 0.06, delay: '3.5s', duration: '8s'   },
    { e: '🖊️', top: '25%', left: '22%',  size: '3.5rem', opacity: 0.07, delay: '4s',   duration: '7s'   },
    { e: '📓', top: '46%', right: '22%', size: '4rem',   opacity: 0.07, delay: '2.8s', duration: '6s'   },
  ];

  const techStack = [
    { emoji: '⚛️', name: 'React.js',       color: '#38BDF8', desc: 'Component-based frontend SPA'        },
    { emoji: '🎨', name: 'Bootstrap 5',    color: '#A78BFA', desc: 'Responsive styling & layout'         },
    { emoji: '🟢', name: 'Node.js',        color: '#34D399', desc: 'JavaScript runtime for backend'      },
    { emoji: '🚂', name: 'Express.js',     color: '#FB923C', desc: 'REST API framework'                  },
    { emoji: '🍃', name: 'MongoDB',        color: '#34D399', desc: 'NoSQL cloud database via Atlas'      },
    { emoji: '🔐', name: 'JWT Auth',       color: '#FBBF24', desc: 'Secure token-based authentication'   },
    { emoji: '🔒', name: 'bcryptjs',       color: '#F87171', desc: 'Password hashing & security'         },
    { emoji: '▲',  name: 'Vercel',         color: '#e5e7eb', desc: 'Frontend deployment & CDN'           },
    { emoji: '🌀', name: 'Render',         color: '#38BDF8', desc: 'Backend server hosting'              },
  ];

  const howToUse = [
    { step: '01', emoji: '📝', title: 'Create an Account',  desc: 'Sign up with your name, email and a secure password. Your vault is created instantly.' },
    { step: '02', emoji: '🔓', title: 'Log In',             desc: 'Log in securely with JWT authentication. Your session is stored safely in your browser.' },
    { step: '03', emoji: '✏️', title: 'Add Your Notes',     desc: 'Click "Add Note", give it a title, description and tag. Your note is saved to the cloud.' },
    { step: '04', emoji: '🗂️', title: 'Organise & Edit',   desc: 'Edit any note at any time through the modal, or delete ones you no longer need.' },
    { step: '05', emoji: '🔒', title: 'Stay Private',       desc: 'Every note is protected by your JWT token. Nobody else can see or access your notes.' },
  ];

  const features = [
    { emoji: '⚡', title: 'Instant Capture',   desc: 'Add notes in seconds, zero friction.' },
    { emoji: '🔍', title: 'Search & Tag',      desc: 'Tag every note for easy retrieval.'   },
    { emoji: '🛡️', title: 'Private Vault',     desc: 'Your data, nobody else\'s.'           },
    { emoji: '☁️', title: 'Cloud Sync',        desc: 'Access from anywhere, any device.'    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

        .about-root {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: linear-gradient(145deg, #e8ddd0 0%, #d6c9b8 40%, #c9b9a5 100%);
          position: relative;
          overflow-x: hidden;
        }
        .display-font { font-family: 'Playfair Display', serif; }

        /* Blobs */
        .blob-tl {
          position: fixed; top: -100px; left: -80px;
          width: 380px; height: 380px;
          background: #c9a96e; border-radius: 50%;
          opacity: 0.28; filter: blur(70px);
          z-index: 0; pointer-events: none;
        }
        .blob-br {
          position: fixed; bottom: -80px; right: -80px;
          width: 320px; height: 320px;
          background: #b5836a; border-radius: 50%;
          opacity: 0.25; filter: blur(60px);
          z-index: 0; pointer-events: none;
        }
        .blob-mid {
          position: fixed; top: 40%; left: 50%;
          transform: translate(-50%, -50%);
          width: 500px; height: 300px;
          background: #d4bfa0; border-radius: 50%;
          opacity: 0.18; filter: blur(80px);
          z-index: 0; pointer-events: none;
        }
        .grain-overlay {
          position: fixed; inset: 0;
          pointer-events: none; z-index: 0; opacity: 0.5;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
        }
        .z-content { position: relative; z-index: 5; }

        /* Floating bg icons */
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
          position: fixed; pointer-events: none; z-index: 1;
          animation: floatDrift linear infinite, fadeIn 1.5s ease both;
          user-select: none; line-height: 1; filter: blur(0.4px);
        }

        /* Page header */
        .about-header {
          background: #2c2416;
          padding: 44px 0 36px;
          position: relative; overflow: hidden;
        }
        .about-header::before {
          content: '';
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
            45deg, transparent, transparent 30px,
            rgba(251,191,36,0.04) 30px, rgba(251,191,36,0.04) 60px
          );
        }
        .header-badge {
          background: #FBBF24; color: #1c1917;
          font-weight: 700; font-size: 0.7rem;
          letter-spacing: 0.15em; text-transform: uppercase;
          padding: 5px 14px; border-radius: 50px;
          display: inline-block; margin-bottom: 14px;
        }

        /* Nav buttons */
        .btn-nav {
          background-color: #1c1917; color: #FBBF24;
          font-weight: 600; font-size: 0.875rem;
          padding: 10px 22px; border-radius: 50px;
          border: none; cursor: pointer;
          transition: background-color 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-nav:hover { background-color: #3c3025; }

        .btn-nav-ghost {
          background: rgba(255,255,255,0.08); color: #d6c9b8;
          font-weight: 500; font-size: 0.875rem;
          padding: 10px 20px; border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.15); cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-nav-ghost:hover { background: rgba(255,255,255,0.15); color: #fff; }

        /* Section title pill */
        .section-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: #efe5d8; border: 2px solid #1c1917;
          border-radius: 50px; padding: 6px 20px;
          font-weight: 700; font-size: 0.85rem;
          color: #1c1917; margin-bottom: 28px;
        }

        /* About intro card */
        .intro-card {
          background: #ede0d0;
          border: 2px solid #1c1917;
          border-radius: 24px;
          padding: 36px 40px;
          box-shadow: 6px 8px 0px 0px #1c1917;
        }

        /* Tech stack pills */
        .tech-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: #ede0d0;
          border: 2px solid #1c1917;
          border-radius: 14px;
          padding: 10px 16px;
          font-weight: 600; font-size: 0.85rem;
          color: #1c1917;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: default;
        }
        .tech-pill:hover {
          transform: translateY(-3px);
          box-shadow: 3px 5px 0px 0px #1c1917;
        }
        .tech-dot {
          width: 10px; height: 10px; border-radius: 50%;
          display: inline-block; flex-shrink: 0;
        }

        /* How to use steps */
        .step-card {
          background: #ede0d0;
          border: 2px solid #1c1917;
          border-radius: 20px;
          padding: 24px;
          height: 100%;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .step-card:hover {
          transform: translateY(-5px) rotate(-0.3deg);
          box-shadow: 5px 8px 0px 0px #1c1917;
        }
        .step-number {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 900;
          color: #FBBF24;
          opacity: 0.25;
          position: absolute;
          top: -8px; right: 14px;
          line-height: 1;
          pointer-events: none;
        }

        /* Feature mini cards */
        .feature-mini {
          background: #f5ebe0;
          border: 2px solid #c9b5a0;
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          height: 100%;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .feature-mini:hover {
          transform: translateY(-4px);
          border-color: #FBBF24;
        }

        /* Developer card */
        .dev-card {
          background: #2c2416;
          border-radius: 24px;
          padding: 36px 40px;
          border: 2px solid #3c3025;
          position: relative;
          overflow: hidden;
        }
        .dev-card::before {
          content: '';
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
            45deg, transparent, transparent 30px,
            rgba(251,191,36,0.03) 30px, rgba(251,191,36,0.03) 60px
          );
        }
        .dev-avatar {
          width: 80px; height: 80px;
          background: #FBBF24;
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          font-size: 2.2rem;
          border: 3px solid #3c3025;
          flex-shrink: 0;
        }
        .dev-name {
          font-family: 'Playfair Display', serif;
          font-weight: 900; font-size: 1.6rem;
          color: #fdf6ec;
        }
        .dev-role {
          color: #FBBF24; font-size: 0.85rem;
          font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .dev-email {
          color: #FBBF24; font-weight: 600;
          font-size: 0.9rem;
          text-decoration: underline; text-underline-offset: 3px;
        }
        .dev-email:hover { color: #fde68a; }
        .dev-tag {
          background: rgba(251,191,36,0.15);
          border: 1px solid rgba(251,191,36,0.3);
          color: #FBBF24; font-size: 0.75rem;
          font-weight: 600; padding: 4px 12px;
          border-radius: 50px; display: inline-block;
        }

        /* CTA section */
        .cta-section {
          background: #ede0d0;
          border: 2px solid #1c1917;
          border-radius: 24px;
          padding: 40px;
          text-align: center;
          box-shadow: 6px 8px 0px 0px #1c1917;
        }
        .btn-cta-main {
          background: #1c1917; color: #FBBF24;
          font-weight: 700; font-size: 1rem;
          padding: 14px 32px; border-radius: 50px;
          border: none; cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-cta-main:hover {
          background: #2c2416;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(28,25,23,0.28);
        }
        .btn-cta-outline {
          background: transparent; color: #1c1917;
          font-weight: 600; font-size: 1rem;
          padding: 13px 32px; border-radius: 50px;
          border: 2px solid #1c1917; cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-cta-outline:hover {
          background: #1c1917; color: #FBBF24;
        }

        /* Footer */
        .about-footer { border-top: 1px solid #c9b5a0; padding: 32px 0; }
        .footer-email {
          color: #d97706; font-weight: 500; font-size: 0.875rem;
          text-decoration: underline; text-underline-offset: 3px;
        }
        .footer-email:hover { color: #b45309; }

        /* Animations */
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeSlide 0.6s ease both; }
        .fade-in-1 { animation-delay: 100ms; }
        .fade-in-2 { animation-delay: 200ms; }
        .fade-in-3 { animation-delay: 300ms; }
        .fade-in-4 { animation-delay: 400ms; }
        .fade-in-5 { animation-delay: 500ms; }
      `}</style>

      <div className="about-root">
        <div className="grain-overlay" />
        <div className="blob-tl" />
        <div className="blob-br" />
        <div className="blob-mid" />

        {/* ── FLOATING BG ICONS ── */}
        {bgIcons.map((ic, i) => (
          <div key={i} className="bg-icon" style={{
            top: ic.top, left: ic.left, right: ic.right,
            fontSize: ic.size, opacity: ic.opacity,
            animationDelay: ic.delay,
            animationDuration: `${ic.duration}, 1.5s`,
          }}>
            {ic.e}
          </div>
        ))}

        {/* ── NAV ── */}
        <nav className="z-content about-header">
          <div className="container" style={{ maxWidth: '1100px' }}>
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                <span style={{ fontSize: '1.5rem' }}>📝</span>
                <span className="display-font" style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fdf6ec', letterSpacing: '-0.02em' }}>
                  NoteNest
                </span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button className="btn-nav-ghost" onClick={() => navigate('/')}>🏠 Home</button> 
                <button className="btn-nav" onClick={() => navigate('/NotesDisplay')}>📝 My Notes →</button>
              </div>
            </div>

            {/* Hero text in header */}
            <div style={{ marginTop: '28px' }}>
              <span className="header-badge">About This Project</span>
              <h1 className="display-font fade-in fade-in-1" style={{
                color: '#fdf6ec', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 900, lineHeight: 1.1, maxWidth: '600px'
              }}>
                Built for thinkers,<br />
                <span style={{ color: '#FBBF24', fontStyle: 'italic' }}>made by one.</span>
              </h1>
            </div>
          </div>
        </nav>

        {/* ── MAIN CONTENT ── */}
        <div className="z-content">
          <div className="container py-5" style={{ maxWidth: '1100px' }}>

            {/* ── WHAT IS NOTENEST ── */}
            <div className="fade-in fade-in-2 mb-5">
              <div className="section-pill">📖 What is NoteNest?</div>
              <div className="intro-card">
                <div className="row align-items-center g-4">
                  <div className="col-12 col-md-8">
                    <p style={{ color: '#1c1917', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '14px' }}>
                      <strong>NoteNest</strong> is a full-stack, cloud-deployed virtual note-taking platform
                      where you can capture ideas, organise thoughts, pin reminders, and build your personal
                      knowledge vault — all in one clean, distraction-free workspace.
                    </p>
                    <p style={{ color: '#78716c', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                      Every note is <strong>100% private</strong> and secured with JWT authentication —
                      only you can see your notes. Write a shopping list, plan a project, draft your thoughts,
                      or track goals. No limits, no clutter, no distractions.
                    </p>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="d-flex flex-column gap-2">
                      {[
                        { e: '🔒', t: 'Private & Secure'    },
                        { e: '☁️', t: 'Cloud Synced'        },
                        { e: '⚡', t: 'Fast & Lightweight'  },
                        { e: '📱', t: 'Fully Responsive'    },
                      ].map((item, i) => (
                        <div key={i} style={{
                          background: '#f5ebe0', border: '2px solid #c9b5a0',
                          borderRadius: '12px', padding: '10px 16px',
                          display: 'flex', alignItems: 'center', gap: '10px',
                          fontSize: '0.9rem', fontWeight: 600, color: '#1c1917'
                        }}>
                          <span style={{ fontSize: '1.2rem' }}>{item.e}</span> {item.t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── TECH STACK ── */}
            <div className="fade-in fade-in-3 mb-5">
              <div className="section-pill">🛠️ Technologies Used</div>
              <div className="d-flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <div key={i} className="tech-pill">
                    <span className="tech-dot" style={{ background: tech.color }} />
                    <span style={{ fontSize: '1.1rem' }}>{tech.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1c1917' }}>{tech.name}</div>
                      <div style={{ fontWeight: 400, fontSize: '0.72rem', color: '#78716c' }}>{tech.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── FEATURES ── */}
            <div className="fade-in fade-in-3 mb-5">
              <div className="section-pill">✨ Key Features</div>
              <div className="row g-3">
                {features.map((f, i) => (
                  <div className="col-6 col-md-3" key={i}>
                    <div className="feature-mini">
                      <span style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>{f.emoji}</span>
                      <div style={{ fontWeight: 800, color: '#1c1917', fontSize: '0.9rem', marginBottom: '5px' }}>{f.title}</div>
                      <div style={{ color: '#78716c', fontSize: '0.8rem', lineHeight: 1.5 }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── HOW TO USE ── */}
            <div className="fade-in fade-in-4 mb-5">
              <div className="section-pill">🚀 How to Use NoteNest</div>
              <div className="row g-3">
                {howToUse.map((step, i) => (
                  <div className="col-12 col-sm-6 col-lg-4" key={i}>
                    <div className="step-card">
                      <span className="step-number">{step.step}</span>
                      <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '10px' }}>{step.emoji}</span>
                      <h5 style={{ fontWeight: 800, color: '#1c1917', fontSize: '1rem', marginBottom: '7px' }}>{step.title}</h5>
                      <p style={{ color: '#78716c', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── DEVELOPER CARD ── */}
            <div className="fade-in fade-in-4 mb-5">
              <div className="section-pill">👨‍💻 The Developer</div>
              <div className="dev-card">
                <div className="d-flex align-items-start gap-4 flex-wrap" style={{ position: 'relative', zIndex: 2 }}>
                  <div className="dev-avatar">👨‍💻</div>
                  <div className="flex-grow-1">
                    <div className="d-flex align-items-center gap-3 flex-wrap mb-2">
                      <span className="dev-name">Roshan Singh</span>
                      <span className="dev-tag">BCA Final Year — IGNOU Delhi</span>
                    </div>
                    <p className="dev-role mb-3">Full Stack Developer</p>
                    <p style={{ color: '#d6c9b8', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '580px', marginBottom: '16px' }}>
                      Passionate developer building real-world full-stack projects using the MERN stack.
                      NoteNest was built to showcase end-to-end development skills — from designing the
                      REST API and JWT authentication to deploying the frontend on Vercel and backend on Render.
                    </p>
                    <div className="d-flex align-items-center gap-4 flex-wrap">
                      <a href="mailto:roshansingh200477@email.com" className="dev-email">
                        📧 roshansingh200477@email.com
                      </a>
                      <div className="d-flex gap-2 flex-wrap">
                        {['React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap'].map((t, i) => (
                          <span key={i} style={{
                            background: 'rgba(251,191,36,0.12)',
                            border: '1px solid rgba(251,191,36,0.25)',
                            color: '#FBBF24', fontSize: '0.72rem',
                            fontWeight: 700, padding: '3px 10px',
                            borderRadius: '50px'
                          }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CTA ── */}
            <div className="fade-in fade-in-5 mb-5">
              <div className="cta-section">
                <span style={{
                  background: '#FBBF24', color: '#1c1917',
                  fontWeight: 700, fontSize: '0.7rem',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  padding: '5px 14px', borderRadius: '50px',
                  display: 'inline-block', marginBottom: '16px'
                }}>Ready to Start?</span>
                <h2 className="display-font" style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900,
                  color: '#1c1917', lineHeight: 1.1, marginBottom: '12px'
                }}>
                  Your notes are waiting.<br />
                  <span style={{ color: '#d97706', fontStyle: 'italic' }}>Start capturing today.</span>
                </h2>
                <p style={{ color: '#78716c', fontSize: '0.95rem', maxWidth: '420px', margin: '0 auto 28px', lineHeight: 1.6 }}>
                  Jump straight into your workspace or go back home. NoteNest is always just one click away.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <button className="btn-cta-main" onClick={() => navigate('/NotesDisplay')}>
                    📝 Open My Notes →
                  </button>
                  <button className="btn-cta-outline" onClick={() => navigate('/')}>
                    🏠 Back to Home
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="z-content about-footer">
          <div className="container d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3" style={{ maxWidth: '1100px' }}>
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: '1.25rem' }}>📝</span>
              <span className="display-font" style={{ fontWeight: 900, color: '#1c1917' }}>NoteNest</span>
            </div>
            <p style={{ color: '#78716c', fontSize: '0.875rem', margin: 0 }}>
              Developed with ❤️ by <strong style={{ color: '#1c1917' }}>Roshan Singh</strong>
            </p>
            <a href="mailto:roshansingh200477@email.com" className="footer-email">
              roshansingh200477@email.com
            </a>
          </div>
        </footer>

      </div>
    </>
  );
};

export default About;