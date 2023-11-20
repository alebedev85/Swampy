
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header'
import Boards from '../Boards/Boards';

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path={'/'}
          element={<section></section>} />
        <Route path={'/boards'}
          element={<Boards />}
        />
      </Routes>

    </div>
  );
}

export default App;
