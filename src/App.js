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
import DriverLoginList from './components/driverLoginList';
import DriverShiftModal from './components/driverShiftModal';
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
      <Router>
        <SecondNav/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/fare" component={Fare}/>
          <Route path="/driverList" component={DriverList}/>
          <Route path="/driverLoginList" component={DriverLoginList}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
