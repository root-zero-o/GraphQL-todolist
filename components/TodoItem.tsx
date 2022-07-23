import { useRouter } from "next/router";
import React from "react";
import DeleteButton from "./DeleteButton";
import { Todo } from "./TodoContainer";

const TodoItem = ({ id, text, done }: Todo) => {
  const router = useRouter();
  return (
    <div className="w-4/5 h-16 bg-white border-2 border-slate-400 flex justify-between items-center ">
      <div
        className="flex justify-evenly w-3/4"
        onClick={() => router.push(`/detail/${id}`)}
      >
        <span className="text-xl">{text}</span>
        {done ? <h1>완료!</h1> : <h1>아직</h1>}
      </div>

      <DeleteButton id={id} />
    </div>
  );
};
export default TodoItem;
