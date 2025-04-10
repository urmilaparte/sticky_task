
 import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
 import Home from './Pages/Home';
 import Create from './Pages/Create';
import History from './Pages/History';
import About from './Pages/About';

function App(){
  return(
   <>
   <Router>
<Routes>
  <Route path='/' element = { <Home/>}></Route>
  <Route path="/create" element={<Create />} />
  <Route path="/history" element={<History />} />
  <Route path="/about" element={<About />} />
</Routes>
   </Router>
    
   </>

  )

}
export default App;
