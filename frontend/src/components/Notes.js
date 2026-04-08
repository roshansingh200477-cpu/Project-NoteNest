import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  const { notes, getNotes, editNote } = useContext(noteContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      navigate('/login');
    }
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  };

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Updated Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  // Big floating background icons — position, size, opacity, animation delay
  const bgIcons = [
    { e: '📝', top: '4%',  left: '2%',   size: '5rem',  opacity: 0.12, delay: '0s',    duration: '6s'  },
    { e: '📌', top: '8%',  right: '3%',  size: '4rem',  opacity: 0.10, delay: '1s',    duration: '7s'  },
    { e: '🗂️', top: '18%', left: '88%',  size: '6.5rem',opacity: 0.09, delay: '0.5s',  duration: '8s'  },
    { e: '✏️', top: '30%', left: '1%',   size: '4.5rem',opacity: 0.13, delay: '2s',    duration: '5.5s'},
    { e: '💡', top: '38%', right: '2%',  size: '5.5rem',opacity: 0.10, delay: '1.5s',  duration: '9s'  },
    { e: '🔖', top: '52%', left: '3%',   size: '3.5rem',opacity: 0.11, delay: '0.8s',  duration: '7.5s'},
    { e: '🗒️', top: '55%', right: '1%',  size: '6rem',  opacity: 0.09, delay: '2.5s',  duration: '6.5s'},
    { e: '🏷️', top: '68%', left: '90%',  size: '4rem',  opacity: 0.12, delay: '1.2s',  duration: '8.5s'},
    { e: '📋', top: '72%', left: '1%',   size: '5rem',  opacity: 0.10, delay: '3s',    duration: '7s'  },
    { e: '🔍', top: '80%', right: '4%',  size: '4.5rem',opacity: 0.11, delay: '0.3s',  duration: '6s'  },
    { e: '🧠', top: '88%', left: '5%',   size: '5.5rem',opacity: 0.08, delay: '1.8s',  duration: '9.5s'},
    { e: '📎', top: '92%', right: '6%',  size: '3.5rem',opacity: 0.10, delay: '2.2s',  duration: '5s'  },
    { e: '⭐', top: '14%', left: '45%',  size: '3rem',  opacity: 0.08, delay: '1s',    duration: '10s' },
    { e: '📁', top: '60%', left: '47%',  size: '4rem',  opacity: 0.07, delay: '3.5s',  duration: '8s'  },
    { e: '🖊️', top: '25%', left: '22%',  size: '3.5rem',opacity: 0.07, delay: '4s',    duration: '7s'  },
    { e: '📓', top: '45%', right: '22%', size: '4rem',  opacity: 0.08, delay: '2.8s',  duration: '6s'  },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

        .notes-root {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: linear-gradient(145deg, #e8ddd0 0%, #d6c9b8 40%, #c9b9a5 100%);
          position: relative;
        }
        .display-font { font-family: 'Playfair Display', serif; }

        .blob-top {
          position: fixed; top: -100px; right: -100px;
          width: 420px; height: 420px;
          background: #c9a96e; border-radius: 50%;
          opacity: 0.30; filter: blur(70px);
          z-index: 0; pointer-events: none;
        }
        .blob-bottom {
          position: fixed; bottom: -80px; left: -80px;
          width: 320px; height: 320px;
          background: #b5836a; border-radius: 50%;
          opacity: 0.28; filter: blur(60px);
          z-index: 0; pointer-events: none;
        }
        .blob-mid {
          position: fixed; top: 40%; left: 50%;
          transform: translate(-50%, -50%);
          width: 500px; height: 300px;
          background: #d4bfa0; border-radius: 50%;
          opacity: 0.20; filter: blur(80px);
          z-index: 0; pointer-events: none;
        }
        .grain-overlay {
          position: fixed; inset: 0;
          pointer-events: none; z-index: 0; opacity: 0.55;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
        }
        .z-content { position: relative; z-index: 5; }

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

        /* Page header */
        .notes-header {
          background: #2c2416;
          padding: 40px 0 32px;
          position: relative; overflow: hidden;
        }
        .notes-header::before {
          content: '';
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
            45deg, transparent, transparent 30px,
            rgba(251,191,36,0.04) 30px, rgba(251,191,36,0.04) 60px
          );
        }
        .header-badge {
          background: #FBBF24;
          color: #1c1917;
          font-weight: 700;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 50px;
          display: inline-block;
          margin-bottom: 12px;
        }

        @keyframes floatUp {
          0%   { opacity: 0; transform: translateY(20px) scale(0.85); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        .deco-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          animation: floatUp 0.5s cubic-bezier(.22,1,.36,1) both, bob 3s ease-in-out infinite;
          cursor: default; user-select: none;
        }

        .section-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: #efe5d8;
          border: 2px solid #1c1917;
          border-radius: 50px;
          padding: 6px 18px;
          font-weight: 700;
          font-size: 0.85rem;
          color: #1c1917;
          margin-bottom: 24px;
        }

        .empty-state {
          background: #ede0d0;
          border: 2px dashed #b5a090;
          border-radius: 24px;
          padding: 60px 40px;
          text-align: center;
          transition: border-color 0.2s ease;
        }
        .empty-state:hover { border-color: #FBBF24; }
        .empty-icon-stack {
          display: flex; justify-content: center;
          gap: 12px; margin-bottom: 20px;
        }

        .modal-content {
          border-radius: 24px !important;
          border: none !important;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(0,0,0,0.2) !important;
        }
        .modal-header-creamy {
          background: linear-gradient(135deg, #ede0d0 0%, #e8d5b7 100%);
          border-bottom: 2px solid #1c1917 !important;
          padding: 24px 28px;
        }
        .modal-title-creamy {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          color: #1c1917;
          font-size: 1.4rem;
        }
        .modal-body-creamy { padding: 28px; background: #ede0d0; }
        .modal-footer-creamy {
          background: #ede0d0;
          border-top: 1px solid #c9b5a0 !important;
          padding: 18px 28px;
        }

        .creamy-label {
          font-weight: 700;
          color: #1c1917;
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          margin-bottom: 7px;
          display: flex; align-items: center; gap: 6px;
        }
        .creamy-input {
          background: #f5ebe0 !important;
          border: 2px solid #c9b5a0 !important;
          border-radius: 14px !important;
          padding: 12px 16px !important;
          font-size: 0.95rem !important;
          color: #1c1917 !important;
          transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
          font-family: 'DM Sans', sans-serif !important;
        }
        .creamy-input:focus {
          border-color: #FBBF24 !important;
          box-shadow: 0 0 0 3px rgba(251,191,36,0.2) !important;
          outline: none !important;
        }

        .btn-modal-close {
          background: #ddd0c0;
          border: 2px solid #c9b5a0;
          border-radius: 12px;
          color: #78716c;
          font-weight: 600;
          padding: 10px 22px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-modal-close:hover { background: #c9b5a0; color: #1c1917; }

        .btn-modal-save {
          background: #1c1917;
          border: none;
          border-radius: 12px;
          color: #FBBF24;
          font-weight: 700;
          padding: 10px 26px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-modal-save:hover:not(:disabled) {
          background: #2c2416;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(28,25,23,0.3);
        }
        .btn-modal-save:disabled {
          background: #c9b5a0; color: #a8a29e; cursor: not-allowed;
        }

        .note-count-badge {
          background: #FBBF24;
          color: #1c1917;
          font-weight: 800;
          font-size: 0.8rem;
          padding: 3px 11px;
          border-radius: 50px;
          margin-left: 10px;
        }
      `}</style>

      <div className="notes-root">
        <div className="grain-overlay" />
        <div className="blob-top" />
        <div className="blob-bottom" />
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

        {/* ── PAGE HEADER ── */}
        <div className="notes-header z-content">
          <div className="container" style={{ maxWidth: '1100px' }}>
            <div className="d-flex gap-3 mb-4 flex-wrap">
              {[
                { e: '📝', bg: '#FBBF24', delay: '0ms'   },
                { e: '📌', bg: '#F87171', delay: '80ms'  },
                { e: '🗂️', bg: '#34D399', delay: '160ms' },
                { e: '💡', bg: '#FDE047', delay: '240ms' },
                { e: '🔖', bg: '#FB923C', delay: '320ms' },
                { e: '✏️', bg: '#A78BFA', delay: '400ms' },
                { e: '🗒️', bg: '#38BDF8', delay: '480ms' },
                { e: '🏷️', bg: '#F472B6', delay: '560ms' },
              ].map((ic, i) => (
                <div
                  key={i}
                  className="deco-icon"
                  style={{
                    backgroundColor: ic.bg,
                    animationDelay: ic.delay,
                    animationDuration: '0.5s, 3s',
                    animationTimingFunction: 'cubic-bezier(.22,1,.36,1), ease-in-out',
                    animationFillMode: 'both, none',
                    animationIterationCount: '1, infinite',
                  }}
                >
                  {ic.e}
                </div>
              ))}
            </div>
            <span className="header-badge">Your Workspace</span>
            <h1 className="display-font" style={{ color: '#fdf6ec', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 0 }}>
              All your notes,<br />
              <span style={{ color: '#FBBF24', fontStyle: 'italic' }}>beautifully kept.</span>
            </h1>
          </div>
        </div>

        {/* ── ADD NOTE ── */}
        <div className="z-content" style={{ position: 'relative' }}>
          <AddNote showAlert={props.showAlert} />
        </div>

        {/* Hidden modal trigger */}
        <button type="button" ref={ref} className="d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" />

        {/* ── EDIT MODAL ── */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header-creamy d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: '1.6rem' }}>✏️</span>
                  <h5 className="modal-title-creamy mb-0" id="exampleModalLabel">Edit Note</h5>
                </div>
                <button
                  type="button"
                  style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#78716c' }}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >✕</button>
              </div>

              <div className="modal-body-creamy">
                <form>
                  <div className="mb-4">
                    <label htmlFor="etitle" className="creamy-label"><span>📋</span> Title</label>
                    <input type="text" className="form-control creamy-input" id="etitle" name="etitle" value={note.etitle} onChange={onChange} minLength={5} required placeholder="Give your note a title..." />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="edescription" className="creamy-label"><span>📝</span> Description</label>
                    <textarea className="form-control creamy-input" id="edescription" name="edescription" rows="4" value={note.edescription} onChange={onChange} minLength={5} required placeholder="What's on your mind..." style={{ resize: 'none' }} />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="etag" className="creamy-label"><span>🏷️</span> Tag</label>
                    <input type="text" className="form-control creamy-input" id="etag" name="etag" value={note.etag} onChange={onChange} placeholder="e.g. work, personal, ideas..." />
                  </div>
                </form>
              </div>

              <div className="modal-footer-creamy d-flex justify-content-end gap-2">
                <button ref={refClose} type="button" className="btn-modal-close" data-bs-dismiss="modal">Cancel</button>
                <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" onClick={handleClick} className="btn-modal-save">
                  💾 Update Note
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ── NOTES SECTION ── */}
        <div className="z-content container py-5" style={{ maxWidth: '1100px' }}>
          <div className="d-flex align-items-center mb-4">
            <div className="section-pill">
              📒 Your Notes
              {notes.length > 0 && <span className="note-count-badge">{notes.length}</span>}
            </div>
          </div>

          {notes.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon-stack">
                {['📭', '🗒️', '✏️'].map((e, i) => (
                  <div key={i} style={{
                    width: '64px', height: '64px', borderRadius: '18px',
                    background: i === 0 ? '#e8d5b7' : i === 1 ? '#d4bfa0' : '#c9a96e',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.8rem', boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                  }}>{e}</div>
                ))}
              </div>
              <p className="display-font" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1c1917', marginBottom: '8px' }}>
                No notes yet
              </p>
              <p style={{ color: '#78716c', fontSize: '0.95rem', margin: 0 }}>
                Start by creating one above ✨
              </p>
            </div>
          )}

          <div className="row g-4">
            {notes.map((note) => (
              <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Notes;