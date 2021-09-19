import ToDoItem from "../ToDoItem/ToDoItem";
import { useDispatch, useSelector } from 'react-redux'
import { getTodosAct } from "../../redux/actions/todoAction";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";

function ToDoList() {

  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [sortValue, setSortValue] = useState('email')
  const [ascDesc, setAscDesc] = useState(true)

  const todoList = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(getTodosAct())
  }, [])

  const sortedList = todoList.sort((a, b) => (ascDesc ? a[sortValue].toString().localeCompare(b[sortValue].toString()) : b[sortValue].toString().localeCompare(a[sortValue].toString())))

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedList.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <div className='container p-5 d-flex'>
        <span> Sort </span>
        <div className='mx-2'>
          <select
            className="custom-select"
            value={sortValue}
            onChange={(e) => {
              const selected = e.target.value;
              setSortValue(selected)
            }}>
            <option value='email'> E-mail </option>
            <option value='login'> Login </option>
            <option value='status'> Status </option>
          </select>
        </div>

        <div>
          <select
            className="custom-select"

            onChange={(e) => {
              setAscDesc(!ascDesc)
            }}>
            <option value='ascending'> Ascending </option>
            <option value='descending'> Descending </option>
          </select>
        </div>
      </div>

      <ul>
        {currentPosts.map((el, i) => <ToDoItem {...el} key={el.id} index={i} currentPage={currentPage} />)}
      </ul>
      <Pagination postsPerPage={postsPerPage} totalPosts={todoList.length} paginate={paginate} />
    </>
  );
}

export default ToDoList;
