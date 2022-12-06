import './App.css';
import NavigationBar from './Components/Navigation/NavigationBar';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AddReservations from './Pages/AddReservation/AddReservation';
import Employees from './Pages/Employees/Employees';
import Reservations from './Pages/Reservations/Reservations';
import Billing from './Pages/Billing/Billing';

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
          <Route path="/billing" element={<Billing />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
