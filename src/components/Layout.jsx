import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#020618]">
        <Header />
        <main className="flex-1"> 
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout