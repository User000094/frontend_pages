import { useNavigate } from "react-router-dom";
import { logout } from "../utils/logout";

export default function TopBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header
      style={{
        height: "60px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      {/* Left */}
      <div>
        <strong>Dashboard</strong>
      </div>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span>Admin</span>
        <button
          onClick={handleLogout}
          style={{
            background: "#ef4444",
            color: "#fff",
            border: "none",
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
