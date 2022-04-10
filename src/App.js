import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchIndex from './Search/search-index';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SearchIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
