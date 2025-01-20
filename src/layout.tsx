import { Outlet } from "react-router";
import { Footer, Navbar } from "./components";

const MainLayout = () => {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 h-screen">
        <Outlet
          context={{
            title: "Made by satyam",
          }}
        />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
