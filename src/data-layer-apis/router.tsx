import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import MainLayout from "../layout";
import Home from "../pages/home/index";
import About from "../pages/about/index";
import Contact from "../pages/contact/index";
import Todos from "../pages/todos";
import Todo from "../pages/todos/todo/index";
import TodosLayout from "../pages/todos/layout/index";
import { action, Items, loader } from "../pages/items";
import Error from "../components/error";
import AuthRequired from "../pages/auth";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="todos" element={<TodosLayout />}>
        <Route index element={<Todos />} />
        <Route path=":id" element={<Todo />} />
      </Route>
      <Route element={<AuthRequired />}>
        <Route
          path="items"
          element={<Items />}
          loader={loader}
          action={action}
        />
      </Route>

      <Route
        path="*"
        element={
          <h1 className="text-red-600 text-xl font-bold">404 Page not found</h1>
        }
      />
    </Route>
  )
);
