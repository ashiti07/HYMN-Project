import Home from './components/home/home';
import Browse from './components/Browse/browse';
import Generation from './components/Generation/generation';
import {Switch, Route, Redirect} from 'react-router-dom';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Browse" component={Browse} />
        <Route exact path="/Generation" component={Generation} />
        <Redirect to="/" />
        <Home />
        <Browse />
        <Generation />
      </Switch>
    </div>
  );
}

export default App;
