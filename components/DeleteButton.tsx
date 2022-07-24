import React from "react";
import { gql, useMutation } from "@apollo/client";
import { GET_TODOS } from "./TodoContainer";

const DELETE_TODO = gql`
  mutation deleteTodo($deleteTodoId: String!) {
    deleteTodo(id: $deleteTodoId)
  }
`;

const DeleteButton = ({ id }: { id: number }) => {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: GET_TODOS }, "getTodos"],
  });
  const onClick = async () => {
    try {
      await deleteTodo({
        variables: { deleteTodoId: String(id) },
      });
      alert("삭제 완료!");
    } catch (error) {
      alert("error!");
    }
  };

  // 삭제 후 새로고침해야 하는 문제
  // 서버 데이터는 바뀌었지만 cache 데이터는 그대로이기 때문
  // 방법 : 1. 서버에서 다시 값을 불러와 cache에 새로 넣어줌  2. cache를 직접 업데이트
  // 1번 방법 : 직관적이지만 서버와의 통신이 추가적으로 발생함
  // 2번 방법 : 서버와의 추가적인 통신은 발생하지 않지만, mutation이 복잡해짐

  // 위의 코드에서는 1번 방법을 사용하였다.
  // (공식문서에서 Apollo Client에 익숙하지 않은 사람에게는 1번 방법을 추천)

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
