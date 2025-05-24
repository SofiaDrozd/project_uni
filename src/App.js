import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";
import CreateRoom from "./CreateRoom";
import Account from "./Account";
import Rooms from "./Rooms"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<Home />} /> {/* уникайте двох "/" */}
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/account" element={<Account />} />
        <Route path="/create-room" element={<CreateRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
