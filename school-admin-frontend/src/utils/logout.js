export function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("school");
  localStorage.removeItem("must_change_password");
}
