import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Topbar />

      <div className="container">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
