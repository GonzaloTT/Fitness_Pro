import "./MainLayout.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

export default function MainLayout({ children }) {
  return (
    <div className="layout">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="layout__main">

        {/* HEADER */}
        <Header />

        {/* CONTENT */}
        <main className="layout__content">
          {children}
        </main>

      </div>

    </div>
  );
}