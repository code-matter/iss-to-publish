import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PeopleInSpace from "./pages/PeopleInSpace";
import Tracker from "./pages/Tracker";
function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/people" element={<PeopleInSpace />} />
                <Route path="/tracker" element={<Tracker />} />
            </Routes>
        </div>
    );
}

export default App;
