import React from "react";
import { Todo } from "./TodoContainer";

const TodoItem = ({ id, text, done }: Todo) => {
  return (
    <div className="w-4/5 h-16 bg-white border-2 border-slate-400 flex justify-between items-center">
      <div className="flex justify-evenly w-3/4">
        <span className="text-xl">{text}</span>
        {done ? (
          <input type="checkbox" className="w-6" defaultChecked />
        ) : (
          <input type="checkbox" className="w-6" />
        )}
      </div>

      <button className="w-1/4 bg-slate-400 py-5 hover:bg-slate-500">
        Delete
      </button>
    </div>
  );
};
export default TodoItem;
