import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Hotel from './Pages/Hotel';
import List from './Pages/List';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
