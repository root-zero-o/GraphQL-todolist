import React from "react";
import TodoItem from "./TodoItem";

const TodoForm = () => {
  return (
    <form className="border-t-2 w-2/3 mt-10 py-10">
      <div className=" flex items-center">
        <input type="text" className=" w-3/4 border-2 h-16" />
        <button
          type="submit"
          className="bg-slate-600 text-white w-1/4 h-16 text-xl hover:bg-slate-800 transition-all"
        >
          ADD
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
