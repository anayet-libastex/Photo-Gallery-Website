import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ theme, toggleTheme }) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#020618] light:bg-gray-50 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-1"> 
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout