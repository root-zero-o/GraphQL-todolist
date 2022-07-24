import { gql, useMutation } from "@apollo/client";
import React, { useCallback, useState } from "react";
import { GET_TODOS } from "./TodoContainer";

const ADD_TODO = gql`
  mutation ($text: String!) {
    addTodo(text: $text) {
      id
      text
      done
      location
    }
  }
`;

const TodoForm = () => {
  const [input, setInput] = useState("");
  const [addTodo, { loading, error }] = useMutation(ADD_TODO, {
    // 1번 방법
    // refetchQueries: [{ query: GET_TODOS }, "getTodos"],
    update(cache, { data: { addTodo } }) {
      cache.modify({
        fields: {
          // 모든 데이터를 불러오는 쿼리명을 알맞게 적어주어야 한다.
          allTodos(oldTodos = []) {
            const newTodoRef = cache.writeFragment({
              data: addTodo,
              fragment: gql`
                fragment NewTodo on Todo {
                  id
                  text
                  done
                }
              `,
            });
            return [...oldTodos, newTodoRef];
          },
        },
      });
    },
  });

  // 추가 후 새로고침해야 하는 문제
  // 서버 데이터는 바뀌었지만 cache 데이터는 그대로이기 때문
  // 방법 : 1. 서버에서 다시 값을 불러와 cache에 새로 넣어줌  2. cache를 직접 업데이트
  // 1번 방법 : 직관적이지만 서버와의 통신이 추가적으로 발생함
  // 2번 방법 : 서버와의 추가적인 통신은 발생하지 않지만, mutation이 복잡해짐

  // 위의 코드에서는 2번 방법을 사용하였다.

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ variables: { text: input } });
    setInput("");
    alert("추가완료!");
  };

  if (loading) {
    return <h1>loading..</h1>;
  }

  if (error) {
    return <h1>error!</h1>;
  }

  return (
    <div className="border-t-2 w-2/3 mt-10 py-10">
      <form className=" flex items-center" onSubmit={onSubmit}>
        <input
          type="text"
          className=" w-3/4 border-2 h-16"
          onChange={onChange}
          value={input}
        />
        <button
          type="submit"
          className="bg-slate-600 text-white w-1/4 h-16 text-xl hover:bg-slate-800 transition-all"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
