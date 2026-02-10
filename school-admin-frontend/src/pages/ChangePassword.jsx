import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function ChangePassword() {
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      await api.post("/auth/change-password/", {
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      });

      // ✅ Password changed → allow dashboard access
      localStorage.removeItem("must_change_password");

      alert("Password changed successfully. Please login again.");
      navigate("/login");
    } catch (err) {
  console.log("CHANGE PASSWORD ERROR:", err.response?.data);
  setError(
    err.response?.data?.message ||
    JSON.stringify(err.response?.data) ||
    "Failed to change password"
  );
}
finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto" }}>
      <h2>Change Password</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Old password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          style={{ marginTop: "10px" }}
        />

        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ marginTop: "10px" }}
        />

        <button disabled={loading} style={{ marginTop: "20px" }}>
          {loading ? "Updating..." : "Change Password"}
        </button>
      </form>
    </div>
  );
}
