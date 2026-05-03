import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateDecision from "./pages/CreateDecision";
import Result from "./pages/Result";
import History from "./pages/History"; // ✅ added

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateDecision />} />
          <Route path="/result" element={<Result />} />
          <Route path="/history" element={<History />} /> {/* ✅ added */}
        </Routes>
      </div>
    </div>
  );
}

export default App;