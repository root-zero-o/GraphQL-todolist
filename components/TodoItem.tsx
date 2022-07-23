import React from "react";

const TodoItem = () => {
  return (
    <div className="w-4/5 h-16 bg-white border-2 border-slate-400 flex justify-between items-center">
      <div className="flex justify-evenly w-3/4">
        <span className="text-xl">밀크티 사먹기</span>
        <input type="checkbox" className="w-6" />
      </div>

      <button className="w-1/4 bg-slate-400 py-5 hover:bg-slate-500">
        Delete
      </button>
    </div>
  );
};
export default TodoItem;
