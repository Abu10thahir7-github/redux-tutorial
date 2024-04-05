import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from "./componet/Create.jsx"; // Make sure the path is correct
import Home from "./componet/Home.jsx"; // Make sure the path is correct

import Edit from './componet/Edit.jsx'; // Commented out for now

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit/:id' element={<Edit />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
