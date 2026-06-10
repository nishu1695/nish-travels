import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Trips from "./pages/Trips";
import TripDetail from "./pages/TripDetail";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import MapPage from "./pages/MapPage";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/trip/:id" element={<TripDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </div>
  );
}

// export default function App() {
//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>APP IS LOADING ✅</h1>
//     </div>
//   );
// }