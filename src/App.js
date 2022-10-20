import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
