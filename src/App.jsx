import Navbar from "./components/Navbar/Navbar"
import News from "./components/News/News"
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0)
  const changeProgress=(progress)=>{
    setProgress(progress);
  }
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <LoadingBar
        color='white'
        progress={progress}
      />
        <Routes>
          <Route
          key="10"
            exact path="/"
            element={<News changeProgress={changeProgress}/>}
          ></Route>
          <Route exact path="/business"  element={<News changeProgress={changeProgress} key="1" category="business" />}></Route>
          <Route exact path="/technology" element={<News changeProgress={changeProgress} key="2" category="technology" />}></Route>
          <Route exact path="/science" element={<News changeProgress={changeProgress} key="3" category="science"/>}></Route>
          <Route exact path="/sports" element={<News changeProgress={changeProgress} key="4" category="sports"/>}></Route>
          <Route exact path="/general" element={<News changeProgress={changeProgress} key="5" category="general"/>}></Route>
          <Route exact path="/health" element={<News changeProgress={changeProgress} key="6" category="health"/>}></Route>
          <Route exact path="/entertainment"  element={<News changeProgress={changeProgress} key="7" category="entertainment"/>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
