import React from "react";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  return (
    <div className="w-2/3 bg-slate-300 h-2/3 flex flex-col items-center space-y-4 py-4">
      <TodoItem />
    </div>
  );
};
export default TodoContainer;
