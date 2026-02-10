import { Outlet, Link } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      {/* Header */}
      <header
        style={{
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {/* Left: Navigation */}
        <nav style={{ display: "flex", gap: "24px" }}>
          <NavLink to="/home" label="Home" />
          <NavLink to="/dashboard" label="Dashboard" />
          <NavLink to="/about" label="About" />
        </nav>

        {/* Right: Brand */}
        <div
          style={{
            fontWeight: "600",
            fontSize: "16px",
            color: "#111827",
          }}
        >
          School Admin
        </div>
      </header>

      {/* Page Content */}
      <main
        style={{
          padding: "32px",
          backgroundColor: "#f9fafb",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

/* Small reusable link component */
function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: "500",
        color: "#374151",
      }}
    >
      {label}
    </Link>
  );
}
