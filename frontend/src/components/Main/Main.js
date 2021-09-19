import { Pagination } from "reactstrap";
import ToDoList from "../ToDoList/ToDoList";

function Main({item, changeStatus, deleteItem, textChanger}) {
  return (
    <main>
      <ToDoList item={item} changeStatus={changeStatus} deleteItem={deleteItem} textChanger={textChanger}/>
      <Pagination />
    </main>
  );
}

export default Main;
