import { Outlet } from "react-router";
import { Navbar } from "./components";

const MainLayout = () => {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default MainLayout;
