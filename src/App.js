import './App.css';
import TopNav from './components/topNav';
import SecondNav from './components/SecondNav';
import BookingsTable from './components/dashboard/bookingsTable';
import Nav from './components/dashboard/nav';
import MapContainer from './components/dashboard/mapContainer';
import DriverOnBoarding from './components/dashboard/driverOnBoarding';
import DriverWaiting from './components/dashboard/driverWaiting';
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <TopNav/>
      <SecondNav/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav/>
            <div className="flex mt-2 mb-2">
              <MapContainer/>
              <DriverOnBoarding/>
              <DriverWaiting/>
            </div>
            <BookingsTable/>
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
