import {Route, Switch} from 'react-router-dom'

import StartTest from './components/StartTest'
import SpecificNumberItem from './components/SpecificNumberItem'
import ResultPage from './components/ResultPage'

import Home from './components/Home'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/start-test" component={StartTest} />
    <Route
      exact
      path="/specificNumberItem/:sheetId"
      component={SpecificNumberItem}
    />
    <Route exact path="/result-page" component={ResultPage} />
  </Switch>
)

export default App
