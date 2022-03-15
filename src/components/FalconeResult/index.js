import {Component} from 'react'
import './index.css'

class FalConeResult extends Component {
  state = {finalResponse: ''}

  componentDidMount() {
    this.getResultFalconeFinalResponse()
  }

  getResultFalconeFinalResponse = async () => {
    const finalResponseUrl = 'https://findfalcone.herokuapp.com/find'
    const {
      planetName1,
      planetName2,
      planetName3,
      planetName4,
      originalToken,
      isVesselSelectedId1,
      isVesselSelectedId2,
      isVesselSelectedId3,
      isVesselSelectedId4,
    } = this.props

    const planetNamesArray = [
      planetName1,
      planetName2,
      planetName3,
      planetName4,
    ]
    const vesselNamesArray = [
      isVesselSelectedId1,
      isVesselSelectedId2,
      isVesselSelectedId3,
      isVesselSelectedId4,
    ]

    const finalObject = {
      originalToken,
      planetNamesArray,
      vesselNamesArray,
    }

    const finalOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(finalObject),
    }

    const response = await fetch(finalResponseUrl, finalOptions)
    const resultStatus = await response.json()

    this.setState({
      finalResponse: resultStatus,
    })
  }

  render() {
    const {finalResponse} = this.state
    console.log(finalResponse)
    return (
      <div className="result-container">
        <p className="view-response">{finalResponse}</p>
      </div>
    )
  }
}

export default FalConeResult
