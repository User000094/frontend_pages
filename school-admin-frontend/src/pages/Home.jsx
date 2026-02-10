export default function Home() {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1>🎓 School Admin Dashboard</h1>
        <p>Manage announcements, updates, and daily insights</p>
      </header>

      {/* Stats */}
      <section className="stats-grid">
        <StatCard title="Students" value="1,248" />
        <StatCard title="Teachers" value="86" />
        <StatCard title="Classes" value="42" />
        <StatCard title="Pending Requests" value="7" />
      </section>

      {/* Main Content */}
      <section className="content-grid">
        {/* Announcements */}
        <div className="card">
          <h2>📢 Announcements</h2>
          <ul className="list">
            <li>
              <strong>Exam Schedule Released</strong>
              <span>Final exams start March 12</span>
            </li>
            <li>
              <strong>Parent-Teacher Meeting</strong>
              <span>Scheduled for Feb 20</span>
            </li>
            <li>
              <strong>Holiday Notice</strong>
              <span>School closed on Feb 26</span>
            </li>
          </ul>
        </div>

        {/* Updates & Tips */}
        <div className="card">
          <h2>💡 Tips & Updates</h2>
          <ul className="list">
            <li>✔️ Review attendance reports weekly</li>
            <li>✔️ Upload assignments before Friday</li>
            <li>✔️ Respond to parent queries promptly</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <h3>{value}</h3>
      <p>{title}</p>
    </div>
  );
}
