import { useState } from "react";
import '../ToDoItem/ToDoItem.css';
import EditForm from "../EditForm/EditForm";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusAct, deleteTodoAct } from "../../redux/actions/todoAction";

function ToDoItem({ text, index, status, id, currentPage, login, email }) {

  const dispatch = useDispatch();

  const user = useSelector(state => state.user)

  const [edit, setEdit] = useState('')

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span className={`${status ? 'done' : 'undone'} d-flex align-items-center`}>{((currentPage - 1) * 3) + index + 1}. {text} | made by {login} | {email} </span>
        {user ? (
          <div>
            <button type="button" onClick={() => {setEdit(<EditForm setEdit={setEdit} id={id} />)}} className={`btn mx-1 btn-secondary ml-auto`}>Edit</button>
            <button type="button" onClick={() => dispatch(changeStatusAct(id))} className={`btn mx-1 btn-${status ? 'secondary' : 'success'} ml-auto`}>{status ? 'Undone' : 'Done'}</button>
            <button type="button" onClick={() => dispatch(deleteTodoAct(id))} className="btn btn-danger mx-1">Delete</button>
          </div>
        )
          :
          (
            <div>
              <button type="button" className={`btn mx-1 btn-${status ? 'secondary' : 'success'} ml-auto`}>{status ? 'Undone' : 'Done'}</button>
            </div>
          )
        }
      </li>
      <div>
        {edit}
      </div>
    </>
  );
}

export default ToDoItem;
