import React from "react";
import Form from "../Form/Form";

function Header({ addTodo }) {
  return (
    <header>
      <Form addTodo={addTodo} />
      <hr />
    </header>
  );
}

export default React.memo(Header);
