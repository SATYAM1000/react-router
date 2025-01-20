import { useCallback, useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router";
import { ITodoItem } from "../index";

const Todo = () => {
  const { id } = useParams<{ id: string }>();
  const [todo, setTodo] = useState<ITodoItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchParams, setSearcgParams] = useSearchParams();

  const location = useLocation();
  console.log("current location is ", location);
  const state=location.state.from;
  console.log("current state is ", state)

  const searchType = searchParams.get("type");

  useEffect(() => {
    const todoId = searchParams.get("id");
    if (!todoId) {
      setSearcgParams({
        id: "123",
      });
    }
  }, [searchParams, setSearcgParams]);

  const fetchTodo = useCallback(async () => {
    if (!id) {
      setError("Invalid ID");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }

      const data = (await res.json()) as ITodoItem;
      setTodo(data);
    } catch (error) {
      setError("Error while fetching todo item");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  if (loading) {
    return <div className="text-black text-xl font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-xl font-semibold">{error}</div>;
  }

  return (
    <div className="text-black text-xl font-semibold">
      {todo?.title || "Todo not found"}
    </div>
  );
};

export default Todo;
