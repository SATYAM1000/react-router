import React from "react";
import { Outlet } from "react-router";

const TodosLayout = () => {
  return (
    <>
      <h1>Todo List</h1>
      <Outlet />
    </>
  );
};

export default TodosLayout;
