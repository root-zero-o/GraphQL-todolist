import React from "react";
import { gql, useQuery } from "@apollo/client";
import TodoItem from "./TodoItem";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const GET_TODOS = gql`
  query getTodos {
    allTodos {
      id
      text
      done
    }
  }
`;

const TodoContainer = () => {
  const { data, loading, error } = useQuery(GET_TODOS);
  const todos: Todo[] = data?.allTodos;
  console.log(todos);
  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>error!</h1>;
  }
  return (
    <div className="w-2/3 bg-slate-300 flex flex-col items-center space-y-4 py-4">
      {todos?.map((val, idx) => {
        return (
          <TodoItem key={idx} id={val.id} text={val.text} done={val.done} />
        );
      })}
    </div>
  );
};
export default TodoContainer;
