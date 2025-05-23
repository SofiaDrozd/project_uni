
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Registation from "./Registration";
import Login from "./Login";
import Home from "./Home";
import CreateRoom from "./CreateRoom";
import Account from "./Account";


function App() {
  return (
   <Home></Home>
    <Account></Account>
    <CreateRoom></CreateRoom>
    <Router>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/registration" element={<Registation></Registation>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </Router>

  );
}

export default App;

