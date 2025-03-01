import './App.scss';

import {BrowserRouter as Router , Route , Routes} from "react-router-dom"

import Home from './component/Home/Home';

import Header from './component/Header/Header';

function App() {


  return (

    <Router>
      <Header/>

      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
