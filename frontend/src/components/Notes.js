import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  // const context = useContext(noteContext);
  const { notes, getNotes , editNote} = useContext(noteContext);
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else{
      navigate('/login')
    }
  }, [getNotes])

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }
  const ref = useRef(null)
  const refClose = useRef(null)
  
  const [note, setNote] = useState({
    id:"",
    etitle: "",
    edescription: "",
    etag: ""
  });
  
  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Updated Successfully", "success");

  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }
  return (
    <>
      <AddNote showAlert={props.showAlert} />

      <button type="button" ref={ref} className="d-none btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
     <div 
  className="modal fade"
  id="exampleModal"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div 
      className="modal-content"
      style={{
        borderRadius: "20px",
        border: "none",
        boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
        overflow: "hidden"
      }}
    >
      
      {/* Header */}
      <div 
        className="modal-header"
        style={{
          background: "linear-gradient(135deg, #0d6efd, #6610f2)",
          color: "white",
          border: "none"
        }}
      >
        <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">
          ✏️ Edit Note
        </h1>
        <button 
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      {/* Body */}
      <div className="modal-body p-4">
        <form>

          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="form-label fw-semibold">
              Title
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="etitle"
              name="etitle"
              value={note.etitle}
              onChange={onChange}
              minLength={5}
              required
              style={{
                borderRadius: "12px",
                transition: "0.3s"
              }}
              onFocus={e => e.target.style.boxShadow = "0 0 0 3px rgba(13,110,253,0.25)"}
              onBlur={e => e.target.style.boxShadow = "none"}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="form-label fw-semibold">
              Description
            </label>
            <textarea
              className="form-control form-control-lg"
              id="edescription"
              name="edescription"
              rows="3"
              value={note.edescription}
              onChange={onChange}
              minLength={5}
              required
              style={{
                borderRadius: "12px",
                transition: "0.3s"
              }}
              onFocus={e => e.target.style.boxShadow = "0 0 0 3px rgba(13,110,253,0.25)"}
              onBlur={e => e.target.style.boxShadow = "none"}
            />
          </div>

          {/* Tag */}
          <div className="mb-3">
            <label htmlFor="tag" className="form-label fw-semibold">
              Tag
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="etag"
              name="etag"
              value={note.etag}
              onChange={onChange}
              style={{
                borderRadius: "12px",
                transition: "0.3s"
              }}
              onFocus={e => e.target.style.boxShadow = "0 0 0 3px rgba(13,110,253,0.25)"}
              onBlur={e => e.target.style.boxShadow = "none"}
            />
          </div>

        </form>
      </div>

      {/* Footer */}
      <div 
        className="modal-footer"
        style={{
          border: "none",
          padding: "20px"
        }}
      >
        <button
          ref={refClose}
          type="button"
          className="btn btn-light"
          data-bs-dismiss="modal"
          style={{
            borderRadius: "10px",
            fontWeight: "500"
          }}
        >
          Close
        </button>

        <button
          disabled={note.etitle.length < 5 || note.edescription.length < 5}
          type="button"
          onClick={handleClick}
          className="btn btn-primary"
          style={{
            borderRadius: "10px",
            fontWeight: "600",
            transition: "0.3s"
          }}
          onMouseEnter={e => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 20px rgba(13,110,253,0.4)";
          }}
          onMouseLeave={e => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          Update Note
        </button>
      </div>

    </div>
  </div>
</div>


{/* Notes Section */}
<div className="container my-5">
  
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h2 className="fw-bold" style={{ letterSpacing: "0.5px" }}>
      📒 Your Notes
    </h2>
  </div>

  {notes.length === 0 && (
    <div 
      className="text-center p-5"
      style={{
        borderRadius: "18px",
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
      }}
    >
      <h5 className="text-muted mb-0">
        No notes available. Start by creating one ✨
      </h5>
    </div>
  )}

  <div className="row g-4">
    {notes.map((note) => (
      <NoteItem
        key={note._id}
        updateNote={updateNote}
        note={note}
        showAlert={props.showAlert}
      />
    ))}
  </div>

</div>
    </>
  )
}

export default Notes;
