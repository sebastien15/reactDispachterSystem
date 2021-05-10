import './App.css';
import TopNav from './components/topNav';
import SecondNav from './components/SecondNav';
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import FareModal from './components/fareModal';
import Fare from './components/fare';
import Dashboard from './components/dashboard';
import DriverModal from './components/driverModal';
import DriverLoginModal from './components/driverLoginModal';
import DriverList from './components/driverList';
import DriverLeftList from './components/driverLeftList';
import DriverLoginList from './components/driverLoginList';
import DriverShiftModal from './components/driverShiftModal';
import AddLocationModal from './components/locationAddModal';
import LocationList from './components/locationList';
import AddZoneModal from './components/zoneModal';
import ZoneList from './components/zoneList';
import AddCustomerModal from './components/customerAddModal';
import CustomerList from './components/customerList';
import VehicleList from './components/vehicleList';
import AddVehicleModal from './components/vehicleAddModal';
import CallIdConfigModal from './components/callIdConfigurationModal';
import CallHistoryModal from './components/callHistoryModal';
import Setting from './components/setting';
// import {useSelector, useDispatch } from 'react-redux';
// import {incrementCounter, decrementCounter} from './redux/actions'

function App() {
  // const counter = useSelector(state => state.counter)
  // const dispatch = useDispatch();

  return (
    <>
      <TopNav/>
      {/* <h1>counter : {counter}</h1>
      <button onClick={()=>dispatch(incrementCounter(5))}>add counter</button>
      <button onClick={()=>dispatch(decrementCounter())}>minus counter</button> */}
      <FareModal/>
      <DriverModal/>
      <DriverLoginModal/>
      <DriverShiftModal/>
      <AddLocationModal/>
      <AddZoneModal/>
      <AddCustomerModal/>
      <AddVehicleModal/>
      <CallIdConfigModal/>
      <CallHistoryModal/>

      <Router>
        <SecondNav/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/fare" component={Fare}/>
          <Route path="/driverList" component={DriverList}/>
          <Route path="/leftDriverList" component={DriverLeftList}/>
          <Route path="/driverLoginList" component={DriverLoginList}/>
          <Route path="/locationList" component={LocationList}/>
          <Route path="/zoneList" component={ZoneList}/>
          <Route path="/customerList" component={CustomerList}/>
          <Route path="/vehicleList" component={VehicleList}/>
          <Route path="/setting" component={Setting}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
