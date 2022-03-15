import {Route, Switch} from 'react-router-dom'
import Falcone from './components/Falcone'

// import FinalResponse from './components/FinalResponse'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Falcone} />
  </Switch>
)

export default App
