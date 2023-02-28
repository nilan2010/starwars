import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Characters from './components/Characters';
import CardDetail from './components/CardDetail';
import Favourites from './components/Favourites';
function App() {
  return (
          <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Routes>
                    <Route  path="/" element={<Characters/>}/> 
                    <Route  path="/:id" element={<CardDetail/>}/>
                    <Route  path="/favourite" element={<Favourites/>}/>
                </Routes>
            </div>
          </BrowserRouter>
     
  );
}

export default App;
