import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) throw new Error("Server error");

      const json = await response.json();

      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        props.showAlert("Logged in successfully", "success");
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

        .login-root {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: linear-gradient(145deg, #e8ddd0 0%, #d6c9b8 40%, #c9b9a5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .display-font { font-family: 'Playfair Display', serif; }

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

        @keyframes cardRise {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .login-card {
          background: #ede0d0;
          border: 2px solid #1c1917;
          border-radius: 28px;
          padding: 44px 40px;
          width: 100%;
          max-width: 420px;
          position: relative;
          z-index: 10;
          box-shadow: 8px 12px 0px 0px #1c1917;
          animation: cardRise 0.65s cubic-bezier(.22,1,.36,1) both;
        }

        .login-brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        .login-brand-name {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 1.6rem;
          color: #1c1917;
          letter-spacing: -0.02em;
        }
        .login-subtitle {
          text-align: center;
          color: #78716c;
          font-size: 0.9rem;
          margin-bottom: 28px;
        }

        .login-divider {
          height: 2px;
          background: linear-gradient(to right, transparent, #c9b5a0, transparent);
          margin: 0 0 28px;
        }

        .badge-row { text-align: center; }
        .login-badge {
          background: #FBBF24;
          color: #1c1917;
          font-weight: 700;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 50px;
          display: inline-block;
          margin: 0 auto 16px;
        }

        .creamy-label {
          font-weight: 700;
          color: #1c1917;
          font-size: 0.82rem;
          letter-spacing: 0.04em;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .creamy-input {
          background: #f5ebe0 !important;
          border: 2px solid #c9b5a0 !important;
          border-radius: 14px !important;
          padding: 12px 16px !important;
          font-size: 0.95rem !important;
          color: #1c1917 !important;
          font-family: 'DM Sans', sans-serif !important;
          transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
          width: 100%;
        }
        .creamy-input:focus {
          border-color: #FBBF24 !important;
          box-shadow: 0 0 0 3px rgba(251,191,36,0.2) !important;
          outline: none !important;
          background: #fdf6ec !important;
        }
        .creamy-input::placeholder { color: #a8a29e !important; }

        .btn-login {
          width: 100%;
          background: #1c1917;
          color: #FBBF24;
          font-weight: 700;
          font-size: 1rem;
          padding: 14px;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.2s ease;
          margin-top: 8px;
          letter-spacing: 0.02em;
        }
        .btn-login:hover:not(:disabled) {
          background: #2c2416;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(28,25,23,0.28);
        }
        .btn-login:disabled {
          background: #c9b5a0;
          color: #a8a29e;
          cursor: not-allowed;
          transform: none;
        }
        .btn-login:active:not(:disabled) { transform: translateY(0); }

        /* Loading spinner dots */
        @keyframes loadingDot {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
          40%            { opacity: 1;   transform: scale(1);   }
        }
        .loading-dots span {
          display: inline-block;
          width: 6px; height: 6px;
          background: #a8a29e;
          border-radius: 50%;
          margin: 0 2px;
          animation: loadingDot 1.2s ease-in-out infinite;
        }
        .loading-dots span:nth-child(2) { animation-delay: 0.2s; }
        .loading-dots span:nth-child(3) { animation-delay: 0.4s; }

        .signup-link {
          text-align: center;
          margin-top: 20px;
          font-size: 0.875rem;
          color: #78716c;
        }
        .signup-link a {
          color: #d97706;
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
          cursor: pointer;
        }
        .signup-link a:hover { color: #b45309; }
      `}</style>

      <div className="login-root">
        <div className="grain-overlay" />
        <div className="blob-tl" />
        <div className="blob-br" />
        <div className="blob-mid" />

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

        {/* ── LOGIN CARD ── */}
        <div className="login-card">

          {/* Brand */}
          <div className="login-brand">
            <span style={{ fontSize: '2rem' }}>📝</span>
            <span className="login-brand-name">NoteNest</span>
          </div>
          <p className="login-subtitle">Welcome back. Your notes await.</p>

          <div className="badge-row">
            <span className="login-badge">🔐 Sign in to continue</span>
          </div>

          <div className="login-divider" />

          {/* Form */}
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="creamy-label"><span>📧</span> Email Address</label>
              <input
                type="email"
                className="creamy-input"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={credentials.email}
                onChange={onChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="creamy-label"><span>🔒</span> Password</label>
              <input
                type="password"
                className="creamy-input"
                id="password"
                name="password"
                placeholder="Your password"
                value={credentials.password}
                onChange={onChange}
                required
              />
            </div>

            <button type="submit" className="btn-login" disabled={loading}>
              {loading ? (
                <span className="d-flex align-items-center justify-content-center gap-2">
                  Logging in
                  <span className="loading-dots">
                    <span /><span /><span />
                  </span>
                </span>
              ) : (
                '🔓 Login to NoteNest'
              )}
            </button>

          </form>

          <div className="signup-link">
            Don't have an account?{' '}
            <a onClick={() => navigate('/Signup')}>Sign up free →</a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;