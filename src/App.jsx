import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Homepage from "./pages/Homepage"
import FavoritePage from "./pages/FavoritePage"

function App() {

  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </div>
  )
}

export default App