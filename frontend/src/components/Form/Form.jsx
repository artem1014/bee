import { useDispatch } from "react-redux";
import { addTodoAct } from "../../redux/actions/todoAction";

function Form() {

  const dispatch = useDispatch();

  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodoAct(e.target.text.value, e.target.email.value, e.target.login.value))
    e.target.reset();
  }

  return (
    <>
      <div className='container'>
        <h3>Create New Item</h3>
        <form onSubmit={sumbitHandler}>
          <div className="d-flex justify-content-center flex-row align-items-center mt-5">
            <div className="form-check">
              <input placeholder="Text" name="text" className='mx-1' type="text" />
            </div>
            <div className="form-check">
              <input placeholder="Login" name="login" className='mx-1' type="text" />
            </div>
            <div className="form-check">
              <input placeholder="Email" name="email" className='mx-1' type="email" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
