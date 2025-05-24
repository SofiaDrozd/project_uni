import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Registation from "./Registration";
import Login from "./Login";
import Home from "./Home";
import CreateRoom from "./CreateRoom";
import Account from "./Account";
import Rooms from "./Rooms";

function App() {
  return (
    //  <Home></Home>
    // <Account></Account>
    // <CreateRoom></CreateRoom>
    <Router>
      <Routes>
       {/* <Route path="/" element={<Main></Main>} />
        <Route path="/registration" element={<Registation></Registation>} />
        <Route path="/login" element={<Login></Login>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms></Rooms>} />
        <Route path="/account" element={<Account></Account>}></Route>
      </Routes>
    </Router>
  );
}

export default App;