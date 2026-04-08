import Notes from './Notes';

const  NotesDisplay = (props) => {

  return (
    <div>
      <div className="container my-3">
        <Notes showAlert={props.showAlert} />
      </div>
    </div>
  )
}

export default NotesDisplay
