import {Component} from 'react'
import Header from '../Header'

import './index.css'

class FinalResponse extends Component {
  state = {
    finalResponse: '',
  }

  componentDidMount() {
    this.getFinalResponse()
  }

  getFinalResponse = async () => {
    const {planetsList, sendingVesselsList, token} = this.props

    const finalResponseUrl = 'https://findfalcone.herokuapp.com/find'

    const details = [token, ...planetsList, ...sendingVesselsList]

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(details),
    }

    const response = await fetch(finalResponseUrl, options)
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    this.setState({finalResponse: jsonResponse})
  }

  render() {
    const {finalResponse} = this.state
    console.log(finalResponse)
    return (
      <>
        <Header />
        <div className="final-response-container">
          <div className="home-menu">
            <p className="reset-txt">Reset | </p>

            <p className="geek-home-txt"> Geek Trust Home </p>
          </div>
          <h1 className="main-falcone-heading">Finding Falcone </h1>
          <p className="planet-result">{finalResponse}</p>
        </div>
      </>
    )
  }
}

export default FinalResponse
