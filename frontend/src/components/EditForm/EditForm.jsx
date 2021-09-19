import { useDispatch } from "react-redux";
import { editTodoAc } from "../../redux/actions/todoAction";

function EditForm({id, setEdit}) {

  const dispatch = useDispatch();

  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(editTodoAc(id, e.target.inputChanger.value))
    setEdit('')
  }

  return (
    <>
      <div className='container mt-3 mb-3 border p-3'>
        <h5>Change Task</h5>
        <form onSubmit={sumbitHandler}>
          <div className="d-flex justify-content-center flex-row align-items-center mt-5">
            <div className="form-check">
              <input placeholder="New Task Name" name="inputChanger" className='mx-1' type="text" />
            </div>
            <button type="submit" className="btn btn-secondary">Change!</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditForm;
