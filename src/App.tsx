import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout";

const Home = lazy(() => import("./pages/home/index"));
const About = lazy(() => import("./pages/about/index"));
const Todos = lazy(() => import("./pages/todos"));
const Contact = lazy(() => import("./pages/contact/index"));
const Todo = lazy(() => import("./pages/todos/todo/index"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/todos/:id" element={<Todo />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
