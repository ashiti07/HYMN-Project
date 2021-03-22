import Home from './components/home/home';
import Browse from './components/Browse/browse';
import Radio from './components/Radio/radio';
import {Switch, Route, Redirect} from 'react-router-dom';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Browse" component={Browse} />
        <Route exact path="/Radio" component={Radio} />
        <Redirect to="/" />
        <Home />
        <Browse />
        <Radio />
      </Switch>
    </div>
  );
}

export default App;
