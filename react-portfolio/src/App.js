import './App.css';
import Navigation from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Pages/Home';
import Work from './Pages/Work';
import About from './Pages/About';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Route exact path='/' component={Home}/>
        <Route exact path='/Work' component={Work}/>
        <Route exact path='/About' component={About}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
