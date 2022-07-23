import React from "react";
import { gql, useQuery } from "@apollo/client";
import TodoItem from "./TodoItem";

// type 정해주기
export interface Todo {
  id: number;
  text: string;
  done?: boolean;
  location?: string;
}

// query로 서버에 원하는 데이터 요청하기
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
  // 쿼리로 불러온 데이터 꺼내주기
  const { data, loading, error } = useQuery(GET_TODOS);
  const todos: Todo[] = data?.allTodos;
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
