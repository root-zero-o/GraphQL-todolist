import { useRouter } from "next/router";
import React from "react";
import { gql, useMutation } from "@apollo/client";

const DELETE_TODO = gql`
  mutation deleteTodo($deleteTodoId: String!) {
    deleteTodo(id: $deleteTodoId)
  }
`;

const DeleteButton = ({ id }: { id: number }) => {
  const [deleteTodo] = useMutation(DELETE_TODO);
  const onClick = async () => {
    try {
      await deleteTodo({ variables: { deleteTodoId: String(id) } });
      alert("삭제 완료!");
    } catch (error) {
      alert("error!");
    }
  };

  return (
    <button
      onClick={onClick}
      className="w-1/4 bg-slate-400 py-5 hover:bg-slate-500"
    >
      Delete
    </button>
  );
};
export default DeleteButton;
