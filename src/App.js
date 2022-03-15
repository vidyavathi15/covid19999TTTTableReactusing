import {Route, Switch} from 'react-router-dom'
import Falcone from './components/Falcone'

// import FinalResponse from './components/FinalResponse'

import './App.css'
import FinalResponse from './components/FinalResponse'

const App = () => (
  <Switch>
    <Route exact path="/" component={Falcone} />
    <Route exact path="/final-response" component={FinalResponse} />
  </Switch>
)

export default App
