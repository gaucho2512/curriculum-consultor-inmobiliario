import Headers from './components/Headers'
import Footer from './components/Footer'
import './App.css';
import './index.css'
import Home from './pages/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
  
        <>
   <Headers />
      <Router>
          <Switch>
             <Route to='/' component={Home} />
          </Switch>
      </Router>
   <Footer />
   </>
    
    
  );
}

export default App;
