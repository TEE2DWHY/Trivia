import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Start from "./pages/Start";
import Share from "./pages/Share";
import PrivateRoute from "./utils/PrivateRoute";
// Friends
import That from "./Friends/Home";

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* public route */}
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/that" element={<That/>}/>
        {/* private route */}
        <Route element={<PrivateRoute/>}>
        <Route path="/start" element={<Start/>}/>
        <Route path="/share" element={<Share/>}/>
        </Route>
      </Routes>
    </Router>
       
    </>
  );
}

export default App;
