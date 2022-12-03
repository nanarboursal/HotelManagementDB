import './App.css';
import NavigationBar from './Components/Navigation/NavigationBar';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AddReservations from './Pages/AddReservation/AddReservation';
import Employees from './Pages/Employees/Employees';
import Reservations from './Pages/Reservations/Reservations';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add-reservation" element={<AddReservations />} exact />
          <Route path="/reservations" element={<Reservations />} exact />
          <Route path="/employees" element={<Employees />} exact />
        </Routes>
      </div>
    </BrowserRouter>
    // <div className="App">
    //   <NavigationBar />
    //   {/* <Router>
    //     <Route exact path="/" element={<Home />} />
    //   </Router> */}

    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
