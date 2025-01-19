import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface ITodoItem {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const [data, setData] = useState<ITodoItem[] | null>(null);
  useEffect(() => {
    const getTodos = async (): Promise<ITodoItem[] | undefined> => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        if (data) {
          setData(data);
        }
        return data;
      } catch (error) {
        console.log("An error has occured", error);
      }
    };

    getTodos();
  }, []);
  return (
    <div className="flex flex-col gap-2 p-12">
      <h1>All todos</h1>
      {data &&
        data.map((todo: ITodoItem) => {
          return (
            <Link
              to={`/todos/${todo.id}`}
              key={todo.id}
              className="text-red-600 font-semibold"
            >
              {todo.title}
            </Link>
          );
        })}
    </div>
  );
};

export default Todos;
