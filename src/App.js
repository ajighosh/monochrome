import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Landing from "./pages/Landing";
import ListGPT from "./pages/ListGPT";
import AddGPT from "./pages/AddGPT";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/list"
            element={
              <>
                <ListGPT />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/add"
            element={
              <>
                <AddGPT />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
