import "./styles/App.scss";
import { Link, Route, Routes, useMatch, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PeopleInSpace from "./pages/PeopleInSpace";
import Tracker from "./pages/Tracker";
function App() {
  const isHome = useMatch("/");
  return (
    <div className="container">
      {!isHome && (
        <Link className="go-back-btn" to="/">
          {"<"}
        </Link>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeopleInSpace />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </div>
  );
}

export default App;
