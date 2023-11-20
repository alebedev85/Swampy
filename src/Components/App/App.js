
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header'
import Boards from '../Boards/Boards';
import Board from '../Board/Board';

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
        <Route path={'/boards/*'}
          element={<Board />}
        />
      </Routes>

    </div>
  );
}

export default App;
