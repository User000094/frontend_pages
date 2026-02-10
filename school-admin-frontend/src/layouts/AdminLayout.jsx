import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

export default function AdminLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="right">
        <TopBar />

        <main>
          <Outlet />
        </main>

        <footer>
          © {new Date().getFullYear()} Admin Panel
        </footer>
      </div>

      <style>{`
        .layout {
          display: flex;
          height: 100vh;
        }

        .right {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        main {
          flex: 1;
          padding: 20px;
          background: #f9fafb;
          overflow-y: auto;
        }

        footer {
          padding: 12px;
          text-align: center;
          font-size: 13px;
          background: #fff;
          border-top: 1px solid #e5e7eb;
        }
      `}</style>
    </div>
  );
}
