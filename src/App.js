import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
