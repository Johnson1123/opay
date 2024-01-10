import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/home/Home";
import Login from "./component/Page/Login";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
// 3.opay
// 5.kuda
// 1.uba
// 6.palmpay
// 2.moniepoint
// 4t.paga
// 7.baiz
