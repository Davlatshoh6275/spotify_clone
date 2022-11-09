import type { NextPage } from "next";
import  Sidebar  from "../components/Sidebar.js"
const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden ">

      <main className="">
        <Sidebar />
      </main>
    </div>
  );
};

export default Home;
