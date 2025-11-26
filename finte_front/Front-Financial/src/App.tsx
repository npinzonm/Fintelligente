import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UploadFiles from "./pages/UploadFiles";
import ReportPage from "./pages/ReportPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadFiles />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;