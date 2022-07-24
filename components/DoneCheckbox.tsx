import { gql, useMutation } from "@apollo/client";
import React from "react";
import { GET_TODOS } from "./TodoContainer";

const UPDATE_TODO = gql`
  mutation ($updateTodoId: String!, $done: Boolean!) {
    updateTodo(id: $updateTodoId, done: $done) {
      id
      text
      done
    }
  }
`;

const DoneCheckbox = ({
  id,
  done,
}: {
  done: boolean | undefined;
  id: string | string[] | undefined;
}) => {
  const [updateTodo, { loading, error }] = useMutation(UPDATE_TODO, {
    refetchQueries: [{ query: GET_TODOS }, "getTodos"],
  });
  const onClick = () => {
    updateTodo({ variables: { updateTodoId: id, done: done } });
    alert("업데이트 완료!");
  };
  if (loading) {
    <h1>loading...</h1>;
  }
  if (error) {
    <h1>error :(</h1>;
  }
  return (
    <>
      {done ? (
        <input
          type="checkbox"
          className="w-6"
          onClick={onClick}
          defaultChecked
        />
      ) : (
        <input type="checkbox" onClick={onClick} className="w-6" />
      )}
    </>
  );
};

export default DoneCheckbox;
