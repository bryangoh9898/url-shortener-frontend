
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import UrlFullList from "./components/UrlFullList";
import UrlGenerator from "./components/UrlGenerator";
function App(){
  return(
    <Router>
      <NavBar/>
      <Routes>
        <Route path = "/" exact element = {<UrlGenerator></UrlGenerator>}></Route>
        <Route path = "/UrlFullList" element = {<UrlFullList></UrlFullList>}></Route>
      </Routes>
    </Router>
  )
}


export default App;