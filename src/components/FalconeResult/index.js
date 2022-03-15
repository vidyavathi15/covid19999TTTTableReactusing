import {Component} from 'react'

import FinalResponse from '../FinalResponse'

import './index.css'

class FalConeResult extends Component {
  state = {token: ''}

  componentDidMount() {
    this.getResultFalcone()
  }

  getResultFalcone = async () => {
    const tokenUrl = 'https://findfalcone.herokuapp.com/token'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }

    const response = await fetch(tokenUrl, options)
    const tokenJson = await response.json()

    this.setState({token: tokenJson.token})
  }

  render() {
    const {token} = this.state
    const {planetsList, sendingVesselsList} = this.props
    console.log(token)
    return (
      <div className="result-container">
        <p className="view-response">Success</p>
        <FinalResponse
          token={token}
          planetsList={planetsList}
          sendingVesselsList={sendingVesselsList}
        />
      </div>
    )
  }
}

export default FalConeResult
