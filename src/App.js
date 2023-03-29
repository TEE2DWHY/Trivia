import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Start from "./pages/Start";
import Share from "./pages/Share";
import PrivateRoute from "./utils/PrivateRoute";
// Friends
import That from "./pages/Friends/Home";
import Play from "./pages/Friends/Play";
import Quiz from "./pages/Friends/Quiz";
import PlayQuiz from "./pages/Friends/Start";
// 404
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* public route */}
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/that" element={<That/>}/>
        <Route path="/play" element={<Play/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/play-quiz" element={<PlayQuiz/>}/>
        <Route path="/*" element={<NotFound/>}/>
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
