import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//creator
import Home from "./pages/Home";
import Create from "./pages/Create";
import Start from "./pages/Start";
import Share from "./pages/Share";
import PrivateRoute from "./utils/PrivateRoute";
import ScoreBoard from "./pages/ScoreBoard";
// Friends
import That from "./pages/Friends/Home";
import Play from "./pages/Friends/Play";
import PlayQuiz from "./pages/Friends/Start";
import Result from "./pages/Friends/Result";
// 404
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* public route */}
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/that/:id" element={<That />} />
          <Route path="/play" element={<Play />} />
          <Route path="/play-quiz" element={<PlayQuiz />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/scores" element={<ScoreBoard />} />
          {/* private route */}
          <Route element={<PrivateRoute />}>
            <Route path="/start" element={<Start />} />
            <Route path="/share" element={<Share />} />
            <Route path="/result" element={<Result />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
