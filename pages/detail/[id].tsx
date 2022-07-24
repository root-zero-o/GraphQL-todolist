import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DoneCheckbox from "../../components/DoneCheckbox";

const GET_TODO = gql`
  query getTodo($todoId: String!) {
    todo(id: $todoId) {
      id
      text
      done
      location
    }
  }
`;

const TodoDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQuery(GET_TODO, {
    variables: {
      todoId: id,
    },
  });

  if (loading) {
    <h1>loading...</h1>;
  }
  if (error) {
    <h1>error</h1>;
  }
  return (
    <div className="w-screen flex flex-col items-center py-10 font-serif space-y-10 text-5xl">
      <h1>id : {data?.todo.id}</h1>
      <h2>할 일 : {data?.todo.text}</h2>
      {data?.todo.location ? (
        <h2>장소 : {data?.todo.location}</h2>
      ) : (
        <h2>장소 : 장소를 등록하지 않았어요 :(</h2>
      )}

      <DoneCheckbox id={id} done={data?.todo.done} />
    </div>
  );
};
export default TodoDetail;
