import React from "react";
import TodoContainer from "../components/TodoContainer";
import TodoForm from "../components/TodoForm";

const index = () => {
  return (
    <div className="w-screen h-screen font-serif flex flex-col items-center py-10">
      <h1 className=" font-bold text-5xl">To do list</h1>
      <h2 className=" text-2xl mt-2">
        with GraphQL, Apollo Server & Apollo Client
      </h2>
      <TodoForm />
      <TodoContainer />
    </div>
  );
};

export default index;
