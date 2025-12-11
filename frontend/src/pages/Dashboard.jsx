import Header from '../components/Header';
import Card from '../components/Card';
import './Dashboard.css';

// eslint-disable-next-line no-unused-vars
const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard">
      <Header onLogout={onLogout} />
      <main className="main-content">
        <Card />
      </main>
    </div>
  );
};

export default Dashboard;