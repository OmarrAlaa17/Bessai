import {Switch, Route} from "react-router-dom"
import Nav from "./components/Nav";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path='/' exact>
            <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
