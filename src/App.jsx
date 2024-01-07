import Navbar from "./components/Navbar/Navbar"
import News from "./components/News/News"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <>
        <Routes>
          <Route
            exact path="/"
            element={<News/>}
          ></Route>
          <Route exact path="/business"  element={<News key="1" category="business" />}></Route>
          <Route exact path="/technology" element={<News key="2" category="technology" />}></Route>
          <Route exact path="/science" element={<News key="3" category="science"/>}></Route>
          <Route exact path="/sports" element={<News key="4" category="sports"/>}></Route>
          <Route exact path="/general" element={<News key="5" category="general"/>}></Route>
          <Route exact path="/health" element={<News key="6" category="health"/>}></Route>
          <Route exact path="/entertainment"  element={<News key="7" category="entertainment"/>}></Route>
        </Routes>
      </>
    </Router>
  )
}

export default App
