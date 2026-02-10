import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/logout";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside
      style={{
        width: "220px",
        background: "#1e293b",
        color: "#fff",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h3 style={{ marginBottom: "30px" }}>School Admin</h3>

        <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dashboard/classes">Classes</Link>
          <Link to="/dashboard/teachers/create" style={linkStyle}>Teachers</Link>
          <Link to="/dashboard/subjects/create" style={linkStyle}>Subjects</Link>
          <Link to="/dashboard/students/create" style={linkStyle}>Students</Link>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        style={{
          background: "#ef4444",
          color: "#fff",
          border: "none",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </aside>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
