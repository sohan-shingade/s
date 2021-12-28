import React from 'react';
import ContributorInput from './ContributorInput';
import DisplayMatches from './DisplayMatches';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"

function App() {  
  return (
    <Router>
      <ul>
        <li>
          <Link to="/contributor-input" >To ContributorInput</Link>
        </li>
        <li>
          <Link to="/display-matches" >To DisplayMatches</Link>
        </li>
      </ul>

       <Switch>
          <Route exact path="/"><div></div></Route>
          <Route path="/contributor-input" component={ContributorInput}/>
          <Route path="/display-matches" component={DisplayMatches}/>
       </Switch>
    </Router>
  );
}

export default App;
