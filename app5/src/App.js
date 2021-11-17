import {Route } from 'react-router-dom';
import Dates from './Components/Dates/Dates';
import Dispensaries from './Components/Dispensaries/Dispensaries';
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Dispensaries/Card';
import Login from './Components/Login/Login';
import "./index.css"
function App() {
  return (
    <>
       <Route exact path="/" component={Navbar} />
       <Route   exact path="/dispensaries" component={Dispensaries} />
      <Route   exact path="/dates/" component={Dates} />
      <Route   exact path="/Login" component={Login} />
      <Route   exact path="/Card/:id" component={Card} />
    </>
  );
}
export default App;
