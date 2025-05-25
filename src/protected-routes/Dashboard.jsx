import { useAuth } from "./AuthContext";

function Dashboard() {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Welcome to my dashboard</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
