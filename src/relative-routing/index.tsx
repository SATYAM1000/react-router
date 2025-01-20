import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const MainLayout = lazy(() => import("../layout"));

const Home = lazy(() => import("../pages/home/index"));

const About = lazy(() => import("../pages/about/index"));

const Contact = lazy(() => import("../pages/contact/index"));

const Todos = lazy(() => import("../pages/todos"));

const Todo = lazy(() => import("../pages/todos/todo/index"));

const TodosLayout = lazy(() => import("../pages/todos/layout/index"));

const RelativeRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="todos" element={<TodosLayout />}>
            <Route index element={<Todos />} />
            <Route path=":id" element={<Todo />} />
          </Route>

          <Route
            path="*"
            element={<h1 className="text-red-600 text-xl font-bold">404 Page not found</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RelativeRouting;
